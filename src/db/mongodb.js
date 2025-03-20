import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.SECRET_CONNECTION
const client = new MongoClient(uri)

async function connectMongoDb(){
    try{
        await client.connect()
        console.log("Conect Mongodb")
    }catch(error){
        console.error("Erro when connecting", error)
    }
}

function manipulationMongoDb(db, collection){
    const data = client.db(db)
    const collec = data.collection(collection)

    return collec
}

connectMongoDb()


export{manipulationMongoDb}