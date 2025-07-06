import jwt from "jsonwebtoken"
const isauth =async(req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token does not found.."})
        }
        const verifyToken=await jwt.verify(token,process.env.JWT_SECRET)
        req.userId=verifyToken.userId

        next()

    } catch (error) {
        return res.status(500).json({message:"is Auth errror"})
    }
}


export default isauth;