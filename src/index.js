console.log("Hello this is from backend, \nyou wrote npm run start in terminal ");
import dotenv from "dotenv"
import {app} from "./app.js"
import my_DB from "./db/index.js";

dotenv.config({
path :"./.env"
})
const port = process.env.port ||3001
app.listen(port, ()=>{
    console.log(`console is running on port ${port}`);
    
})

my_DB().then(
    app.listen(port, () => console.log(`Server is running on port ${port}`))
).catch((err)=>{
    console.log("DB connection error",err)
    process.exit(1)
})
