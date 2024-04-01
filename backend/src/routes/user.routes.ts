 import { Express, Request, Response } from "express";
import { registerUser, loginUser, logoutUser, getProfile, forgotPassword, resetPasswordRequest, updateProfile, loginStatus, updateProfilePhoto } from "../controller/user.controller";
import express from "express"
import authenticateUser from "../middleware/authenticate.user";
import { upload } from "../config/imageUpload";

const router = express.Router()


    
    router.post('/signup', registerUser)
    
    router.post('/login', loginUser)

    router.post('/logout', logoutUser)
    router.get('/users/me', authenticateUser, getProfile )
    router.get('/users/loginStatus', loginStatus )
    router.patch('/users/me', authenticateUser, updateProfile)
    router.patch('/users/updatePhoto', authenticateUser, updateProfilePhoto)
    router.post('/forgotPassword', forgotPassword)
    router.post('/resetPassword', resetPasswordRequest);
    router.put('/uploadProfilePicture')


export default router;