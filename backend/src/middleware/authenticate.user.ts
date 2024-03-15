import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/user.model";
import user  from '../database/types/custom';
const authenticateUser = async (req:Request, res: Response, next:NextFunction) => {
    // Get the token from the request headers or cookies
 
    try {
         // Get the token from the request headers or cookies
         let token;
         if (req.headers.authorization) {
             token = req.headers.authorization.split(' ')[1];
         } else if (req.cookies.jwt) {
             token = req.cookies.jwt;
         }

         if(!token){
            return res.status(401).json({message: "Not authorized, please login"})
        }

        // verify the token
        const decoded: any = jwt.verify(token, process.env.SECRET_KEY as string)
        // fetch user from the database based on the token payload
        const user = await User.findById(decoded.userId).select('-password')

        if (!user){
            return res.status(401).json({ message: "User not found"})
        }
        // send the user with the request object
        req.user = user;
        return next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token"})
    }
}
export default authenticateUser;