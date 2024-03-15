import mongoose from "mongoose";
import config from "config";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGOURI as string);
        console.log('DB connected', conn.connection.host);
    } catch (error) {
       console.error('Error connecting to DB: ', error) 
        process.exit(1);
    }
  
}

export default connectDB;