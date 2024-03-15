  import { mongoose, Schema } from "mongoose";

  export interface IToken extends Document {
    userId: Schema.Types.ObjectId;
    token: string;
    createdAt: Date;
}
