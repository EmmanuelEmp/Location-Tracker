
import nodemailer from "nodemailer";
import { Request, Response } from "express"
import Handlebars from "handlebars";
const fs = require("fs");
const path = require("path");
const sendEmail = async (email: string, HTMLAreaElement: string, subject: string, send_from: string) => {
    try {
        const transporter = nodemailer.createTransport({
            // Transport configuration
        host: "smtp.gmail.com",
        port: 587,
        secure: false,

        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
        tls: {
            rejectUnauthorized: false
        }

    });

        const mailOptions = {
            from: send_from,
            to: email,
            subject: subject,
            html: HTMLAreaElement
        };

        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Propagate the error to the caller
    }
};

export default sendEmail;
