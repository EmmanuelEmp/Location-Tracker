 import { Express, Request, Response } from "express";
import { registerUser, loginUser, logoutUser, getProfile, forgotPassword, resetPasswordRequest } from "../controller/user.controller";
import express from "express"
import authenticateUser from "../middleware/authenticate.user";

const router = express.Router()


    
    router.post('/signup', registerUser)
    
    router.post('/login', loginUser)

    router.post('/logout', logoutUser)
    router.get('/users/me', authenticateUser, getProfile )
    router.post('/forgotPassword', forgotPassword)
    router.post('/resetPassword', resetPasswordRequest)

export default router;