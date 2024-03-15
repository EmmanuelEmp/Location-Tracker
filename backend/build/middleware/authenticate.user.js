"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the token from the request headers or cookies
    var _a;
    const token = ((_a = req.header.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) || req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "Not authorized, please login" });
    }
    try {
        // verify the token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        // fetch user from the database based on the token payload
        const user = yield user_model_1.default.findById(decoded.userId);
        if (!user) {
            res.status(401).json({ message: "User not found" });
        }
        // send the user with the request object
        req.user = user;
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});
