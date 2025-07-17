import { v2 as cloudinary } from "cloudinary";
import { log } from "winston";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_SECRET,
  api_secret: process.env.CLOUDNARY_API_KEY, 
});

const uploadOnCloudnary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )
        console.log("file uploaded successfully"+ response.url);
        //once file uploaded we want to delete it from server
        fs.unlinkSync(localFilePath);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}