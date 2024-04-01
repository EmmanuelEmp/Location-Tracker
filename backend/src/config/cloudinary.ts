
import dotenv from "dotenv";
dotenv.config();

// Import the cloudinary module
import cloudinaryModule from "cloudinary";

// Extract the v2 module from the cloudinaryModule and assign it to cloudinary constant
export const cloudinary = cloudinaryModule.v2

// Configure Cloudinary with the provided environment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
