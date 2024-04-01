import {NextFunction, Request, Response} from 'express'
import { omit } from 'lodash';
import { z, ZodError } from "zod";
import jwt from "jsonwebtoken";

import { createUserSchema, CreateUserInput, LoginInput, loginSchema } from '../schema/user.schema';
import { updateUserProfileSchema, UpdateUserProfileInput } from '../schema/update.user.schema';
import User from '../database/models/user.model';
import generateToken from '../utils/jwt.utils';
import { requestPasswordReset, resetPassword } from '../services/auth.service';

//@desc register user
//route Get /auth/signup
//@access public
export const registerUser = async (req: Request, res: Response) => {
    try {
        // validate request using zod
        const userInput: CreateUserInput = createUserSchema.parse(req.body);
       
        //verify if user already exist
        const userExist = await User.findOne({ email: userInput.email });
        if(userExist){
           return res.status(400).json({message: 'User with this email already exist'})
        }

        //create new user
        const newUser = await User.create(userInput)

        // generate token and store it in the response cookie
        const token = generateToken(res, newUser._id)

        // Include the token in the user response
        const user = { ...newUser.toObject(), token}
         return res.status(201).json(user)
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            const errorMessage = error.errors.map((err: any) => err.message).join(", ");
            return res.status(400).json({ message: errorMessage });
        }

       console.error("Error creating user", error)
       return res.status(500).json({ message: "Internal server error"}) 
    }

}

//@desc login user
//route POST /auth/login
//@access 
export const loginUser = async (req: Request, res: Response) => {
   
   try {
        // Get the input and validate using zod
        const userInput: LoginInput = loginSchema.parse(req.body)

        // verify if user exists and password match
        const user = await User.findOne( { email: userInput.email })
        if(!user){
            return res.status(401).json({ message: "Invalid email or password" })
        }
        // verify password
        const isPasswordValid = await user.comparePassword(userInput.password);
    
        if(!isPasswordValid){
           return res.status(401).json({ message: "Invalid email or password"})
        }
    
        // Generate token and send response
    
        const token = generateToken(res, user._id)
        if(token) {
            return res.status(200).json({ token })
        }
       
   } catch (error: any) {
    // handle errors dynamically using zod
    if (error instanceof ZodError) {
        const errorMessage = error.errors.map((err: any) => err.message).join(", ");
        return res.status(400).json({ message: errorMessage });
    } else {
        console.log("Error logging in: ", error)
        //return res.status(500).json({ message: "Internal server error" });
    }
   }
}

//@desc logout user
//route POST /auth/logout
//access private
export const logoutUser = (req: Request, res: Response) => {
    res.cookie("jwt", " ", {
        httpOnly: true,
        expires: new Date(0)
    })
    return res.status(200).json({message: "User successfully logout"})
}

//@desc Get login status
//route Get /auth/login/status
//@access private
export const loginStatus = (req: Request, res: Response) => {
    
       const token = req.cookies.jwt;
    
    if(!token){
        return res.status(401).json(false)
    }
    try {
        // Verify Token
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        return res.json(true);
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.json(false);
    }
}

//@desc Get Users profile
//route Get /auth/users/me
//@access private
export const getProfile = async (req: Request, res: Response) => {
// The user should be attached to the request object by the middleware
 const user = req.user

 if(user) {
    console.log(user)
   return res.status(200).json({ user });
   
 } else {
    return res.status(401).json({message: "User not found"})
 }
}

//@desc update user profile
//@route PATCH /auth/users/me
//@access private

export const updateProfile = async (req: Request, res: Response) => {
    try {
        // Retrieve authenticated user ID from the request object
        const userId = req.user._id;
        // Validate request body using updateUserProfileSchema
        const userInput: UpdateUserProfileInput = updateUserProfileSchema.parse(req.body);
        
        // Find the user in the database by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user profile
        user.firstName = userInput.firstName || user.firstName;
        user.lastName = userInput.lastName || user.lastName;
        user.mobileNumber = userInput.mobileNumber || user.mobileNumber ;
        user.age = userInput.age || user.age;
        user.address = userInput.address || user.address;
        user.country = userInput.country || user.country;
        user.gender = userInput.gender || user.country;

        // Save the updated user
        const updatedUser = await user.save();

        return res.status(200).json({ message: "User profile updated successfully", updatedUser });
    } catch (error: any) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            const errorMessage = error.errors.map((err: any) => err.message).join(", ");
            return res.status(400).json({ message: errorMessage });
        }

        // Handle other errors
        console.error("Error updating user profile", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
//@desc update user profile photo
//@route PATCH /auth/users/me/photo
//@access private
export const updateProfilePhoto = async (req: Request, res: Response) => {
    try {
        // Retrieve authenticated user ID from the request object
        const userId = req.user._id;
        
        // Get the photo URL from the request body
        const { photo } = req.body;

        if (!photo) {
            return res.status(400).json({ message: "Photo is required" });
        }

        // Find the user in the database by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user's photo
        user.photo = photo;

        // Save the updated user
        const updatedUser = await user.save()

        return res.status(200).json({ message: "User profile photo updated successfully", updatedUser });
    } catch (error: any) {
        // Handle errors
        console.error("Error updating user profile photo", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


//@desc forgot password
//@route POST /auth/forgotPassword
//@access private

export const forgotPassword = async (req: Request, res: Response) => {

    try {
        const requestPasswordResetService = await requestPasswordReset(req, res, req.body.email);
        res.json(requestPasswordResetService);
    } catch (error) {
      //res.status(400).json({message: "Invalid user"})
    }
    
    // Validate the email
    // Generate token randomly
    // send an email to the user,
}

//@desc set new password
//route POST /auth/resetPassword
//@access private
export const resetPasswordRequest = async (req: Request, res: Response) => {
    try {
        const resetPasswordService = await resetPassword(
            req,
            res, 
            req.body.userId,
            req.body.token,
            req.body.password
        );
        res.json(resetPasswordService)
    } catch (error) {
         res.status(400).json({message: "Invalid user"})
    }
    
}

