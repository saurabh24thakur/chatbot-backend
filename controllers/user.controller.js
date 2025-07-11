import User from "../models/userModel.js"
export const getCurrentUser=async(req,res)=>{
    try {
        const userId=req.userId
        const user=await User.findById(userId).select("-password")
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        console.log("Cookies?", req.cookies);

        return res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({message:"error during user fetching in get current user"})

        
    }
}