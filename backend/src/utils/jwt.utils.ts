 import jwt from "jsonwebtoken";
import { Response } from "express"

// generateToken to verify the token in the cookie
 const generateToken = (res: Response, userId: any) => {
    const token = jwt.sign(
      {userId }, process.env.SECRET_KEY as string, 
      {expiresIn: "30d" } // 30 days
    );

    // store the token in cookie
    res.cookie("jwt", token, {
      httpOnly: true, // httonly cookie to prevent client side req
    })

    return token;
     }


    export default generateToken;
    