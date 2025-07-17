import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const my_DB = async() =>{
    try{
const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
console.log(`Mongo db connected successfully ${connectionInstance.connection.host}`);

    }
    catch(error){
        console.log("Mongo db connection error",error)
        process.exit(1)
    }
}

export default my_DB