import express from 'express';
//import * as C from './constants';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from 'config';
import connectDB from './config/connect';
import routes from "./routes/user.routes";
import authRoutes from './routes/user.routes';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors";


const PORT = process.env.PORT || 5000
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());



app.listen(PORT, async () => {
    console.log(`Server running on PORT: ${PORT}`);
    await connectDB()

    app.use("/auth/", authRoutes); 
});