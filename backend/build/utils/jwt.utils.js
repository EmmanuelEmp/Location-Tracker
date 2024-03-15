"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// generateToken to verify the token in the cookie
const generateToken = (res, userId) => {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "30d" } // 30 days
    );
    // store the token in cookie
    res.cookie("jwt", token, {
        httpOnly: true, // httonly cookie to prevent client side req
    });
    return token;
};
exports.default = generateToken;
