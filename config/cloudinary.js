import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
const uploadOnCloudinary =async(filepath){
    import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SCERET,
        // Click 'View API Keys' above to copy your API secret

        
    });

    // images uploading
    try {
        const uploadResult = await cloudinary.uploader
       .upload(filepath)
       fs.unlinkSync(filepath)
       return uploadResult.secure_url
            
    } catch (error) {
       fs.unlinkSync(filepath)
        return res.status(500).json({message:"cloudinary error"})        
    }
    
}

export default uploadOnCloudinary
    
   
