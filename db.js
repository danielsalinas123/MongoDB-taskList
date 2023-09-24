const {MongoClient}=require("mongodb");
const env=require("dotenv");
env.config();

const dbName="Clase";
const client=new MongoClient(process.env.MONGO_ATLAS);

const connect=async ()=>
{
    try{
        await client.connect();
    }catch(error){
        console.log(error);
    }

    return client.db(dbName);
}

const db=connect();

module.exports=db;