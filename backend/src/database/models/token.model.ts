 import mongoose from "mongoose"
// import { Schema } from "zod"
import { IToken } from "../types/token.type";
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    token:{type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600, // expiring time in second
    }

});
const Token = mongoose.model<IToken>("Token", tokenSchema)
export default Token;