 import { Request, Response } from "express";
import User from "../database/models/user.model";
import sendEmail from "../config/emailSender";
import Token from "../database/models/token.model";
import crypto from "crypto";
import bcrypt from "bcrypt";

const bcryptSalt = process.env.BCRYPT_SALT;
const client_URL = process.env.CLIENT_URL;

const requestPasswordReset = async (req: Request, res: Response, email: string) => {
    try {
        // find if user email exist in the database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // check if token exist in the database
        let token = await Token.findOne({ userId: user._id });
        if (token) {
            await token.deleteOne();
        }

        // Create a reset Token
        let resetToken = crypto.randomBytes(32).toString("hex");
        // hash the generated token
        const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

        await new Token({
            userId: user._id,
            token: hash,
            createdAt: Date.now(), // Corrected typo here
        }).save();

        const link = `${client_URL}/resetPassword?token=${resetToken}&id=${user._id}`;
        const message = `<h2>Hello ${user.lastName},</h2>
            <p>You are receiving this email because you requested a password reset for your account.</p>
            <p>This link is valid for 1 hr.</p>
            <p>Please click the following link to reset your password:</p>
            <a href=${link} clicktracking=off>${link}</a>
            <p>If you didn't request this, please ignore this email.</p>
            <p>Trackito team</p>`;

        const subject = "Password Reset Request"
        // const send_to = user.email
        const send_from = process.env.USER as string


    
        const success = await sendEmail(user.email, subject, message, send_from);  
        if(success){
           return res.status(200).json({ message: "Password reset link sent successfully", link});
        }  else {
            return res.status(400).json({message: "something is wrong"})
        }   
        
    
    } catch (error) {
        console.error("Error requesting password reset:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const resetPassword = async (req: Request, res: Response, userId: string, token: string, password: string) => {
    const passwordResetToken = await Token.findOne({ userId });
    if(!passwordResetToken){
        return res.status(400).json({ message: "Invalid or expired token" });
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if(!isValid) {
        return res.status(400).json({message: "invalid or expired password"})
    }
    const hash = await bcrypt.hash(password, Number(bcryptSalt))

    await User.updateOne(
        { _id: userId },
        { $set: { password: hash } },
        { new: true }
    );
    const user = await User.findById(userId);

if (!user) {
    return { message: "User not found" };
}

const subject = "Password reset was successful";
const message = `<h2>Password reset was successful</h2>`;
const send_from = process.env.USER as string;

if (user.email) {
    await sendEmail(user.email, subject, message, send_from);
} else {
    return { message: "User email not found" };
}

await passwordResetToken.deleteOne()

return { message: "Password reset was successful" };

}

export { requestPasswordReset, resetPassword }