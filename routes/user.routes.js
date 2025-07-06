

import express from "express"
import { getCurrentUser } from "../controllers/user.controller.js";
import authRouter from "./auth.routes.js";
import isAuth from "../middleware/isAuth.js"


const userRouter=express.Router()



userRouter.get('/currentuser',isAuth,getCurrentUser)

export default userRouter;