import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload file on clodinary
        const response = await cloudinary.uploader.upload(localFilePath ,
            {
                resource_type : "auto"
            })
        // file has been uploaded
        console.log("file has been succesfully uploadd on cloudinary" , response.url)
        return response;

    } catch (error) {
        // agar upload nhii to hata do file ko server se
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload opeartion got failed
        return null
    }
}

export {uploadOnCloudinary}