
import mongoose from "mongoose";

export interface UserInput {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mobileNumber: string,
    age: number,
    address: string,
    gender: string,
    country: string,
    photo: string
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
    comparePassword(userPassword: string): Promise<boolean>,
}
