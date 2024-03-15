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
exports.getProfile = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const zod_1 = require("zod");
const user_schema_1 = require("../schema/user.schema");
const user_model_1 = __importDefault(require("../database/models/user.model"));
const jwt_utils_1 = __importDefault(require("../utils/jwt.utils"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validate request using zod
        const userInput = user_schema_1.createUserSchema.parse(req.body);
        //verify if user already exist
        const userExist = yield user_model_1.default.findOne({ email: userInput.email });
        if (userExist) {
            res.status(400).json({ message: 'User with this email already exist' });
        }
        //create new user
        const newUser = yield user_model_1.default.create(userInput);
        // generate token and store it in the response cookie
        const token = (0, jwt_utils_1.default)(res, newUser._id);
        // Include the token in the user response
        const user = Object.assign(Object.assign({}, newUser.toObject()), { token });
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            const errorMessage = error.errors.map((err) => err.message).join(", ");
            return res.status(400).json({ message: errorMessage });
        }
        console.error("Error creating user", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get the input and validate using zod
        const userInput = user_schema_1.loginSchema.parse(req.body);
        // verify if user exists and password match
        const user = yield user_model_1.default.findOne({ email: userInput.email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // verify password
        const isPasswordValid = yield user.comparePassword(userInput.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid email or password" });
        }
        // Generate token and send response
        const token = (0, jwt_utils_1.default)(res, user._id);
        return res.status(200).json({ token });
    }
    catch (error) {
        // handle errors dynamically using zod
        if (error instanceof zod_1.ZodError) {
            const errorMessage = error.errors.map((err) => err.message).join(", ");
            return res.status(400).json({ message: errorMessage });
        }
        else {
            console.log("Error logging in: ", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
});
exports.loginUser = loginUser;
// desc auth/logout
// method POST
const logoutUser = (req, res) => {
    res.cookie("jwt", " ", {
        httpOnly: true,
        expires: new Date(0)
    });
    return res.status(200).json({ message: "User successfully logout" });
};
exports.logoutUser = logoutUser;
//@desc Get Users profile
//route Get /auth/users/me
//@access private
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // find if user exists in the database
    const user = yield user_model_1.default.find();
    if (user) {
        res.json(user);
    }
});
exports.getProfile = getProfile;
