import fastify from "fastify";
import cors from "@fastify/cors"
import fastifyCookie from "@fastify/cookie";
import router from "../routers/route.js";


const app = fastify()

app.register(fastifyCookie)
app.register(cors, {
    origin:"*",
    credentials:true
})
app.register(router, {prefix:"api"})


const start = async ()=>{

    try{
        app.listen({port:3333}, ()=>{
            console.log("Server runing - http://localhost:3333")
        })
    }catch(error){
        console.error("Error start server", error)
    }
}

start()

