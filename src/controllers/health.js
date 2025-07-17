import {ApiResponse} from '../utils/api_response.js'
import { async_handler } from '../utils/async_handler.js'

const healthcheck = async_handler(async(req,res)=>{
    return res
    .status(200)
    .json(new ApiResponse(200,"ok","healthcheck passed"))
})

export {healthcheck}