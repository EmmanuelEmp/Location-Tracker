import {NextFunction, Request, Response} from 'express'
import { omit } from 'lodash';
import { z, ZodError } from "zod";

import { createUserSchema, CreateUserInput, LoginInput, loginSchema } from '../schema/user.schema';
import User from '../database/models/user.model';
import generateToken from '../utils/jwt.utils';
import { requestPasswordReset, resetPassword } from '../services/auth.service';

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
// desc auth/logout
// method POST
export const logoutUser = (req: Request, res: Response) => {
    res.cookie("jwt", " ", {
        httpOnly: true,
        expires: new Date(0)
    })
    return res.status(200).json({message: "User successfully logout"})
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

