import genToken from "../config/token.js";


import User from "../models/userModel.js";
import bcrypt from "bcryptjs";




export const signUp = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log("Signup hit ✅"); // Debug log
    console.log("Body:", req.body); // Debug input

  
      const existEmail = await User.findOne({ email });
      if (existEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      const token = genToken(user._id);
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "None",
        secure: true,
      });
  
      return res.status(201).json(user);
    } catch (error) {
      console.log(`SignUp error: ${error}`);
      return res.status(500).json({ message: "Server error" });
    }
  };
  



export const logIn= async (req,res)=>{
    try {
        const {email,password}=req.body;

        const user= await User.findOne({email});
        if (!user){
            return res.status(400).json({message:"email does not exists"})
        }
        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:"Password is incorrect"});
        }

      
        
        const token= genToken(user._id);
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
          sameSite: "None",
          secure: true,
        });
        return res.status(201).json(user);



    } catch (error) {
        console.log(`login error ${error}`)
    }
}



export const logOut=async (req,res)=>{
    try {
      res.clearCookie('token');
        return res.status(500).json({message:"Log out user successfully"})
    } catch (error) {
        console.log(error)
    }
} 