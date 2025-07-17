const async_handler = (rqstHandler)=>{
return (req,res,next) =>{
    Promise.resolve(rqstHandler(req,res,next)).catch((err)=>next(err))
}
}
export {async_handler}