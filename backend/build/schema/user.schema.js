"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    firstName: (0, zod_1.string)({
        required_error: 'First Name is required'
    }),
    lastName: (0, zod_1.string)({
        required_error: 'Last Name is required'
    }),
    password: (0, zod_1.string)({
        required_error: 'Password is required'
    }).min(6, "Minimum of 6 character is required"),
    passwordConfirmation: (0, zod_1.string)({
        required_error: 'Password confirm is required'
    }),
    email: (0, zod_1.string)({
        required_error: "Email is required"
    }).email('Not a valid email')
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["PasswordConfirmation"],
});
exports.loginSchema = (0, zod_1.object)({
    email: (0, zod_1.string)({
        required_error: "Email is required"
    }),
    password: (0, zod_1.string)({
        required_error: "Password is required"
    })
});
