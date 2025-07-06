import { logIn, logOut, signUp } from "../controllers/auth.controller.js"

import express from "express"


const authRouter=express.Router()


authRouter.post('/signup',signUp)
authRouter.post('/signin',logIn)
authRouter.get('/logout',logOut)

export default authRouter;