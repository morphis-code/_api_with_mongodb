import {} from "jose"
import bcrypt from "bcryptjs"

export default async function router(app, options){
    
    app.get("/hello", async (req, res)=>{
        res.send({message:"hello world"})
    })
}