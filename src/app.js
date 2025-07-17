import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Common middleware
app.use(cookieParser());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extends:true,limit:"16kb"}))
app.use(express.static("public"))

//import routes
import  healthcheckRouter  from "./routes/healthcheck.routes.js";

//routes
app.use("/api/v1/healthcheck",healthcheckRouter)
export {app}