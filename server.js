const express=require("express");
const db=require("./db.js");
const app=express();
const port=8000;

app.use(express.json());

app.get("/",(req,res)=>
{
    db.then(async (db)=>
    {
        console.log("Base de datos conectada");
        const users=db.collection("users");
        
        //Read
        // const query={age:32};
        // const user=await users.findOne(query);
        // res.json(user);

        //create
        // const newUser={name:"Antonio Ricaute",age:69};
        // const result = await users.insertOne(newUser);
        // res.json(result);

        //update
        // const filter={name:"Antonio Ricaute"};
        // const update={$set:{age:70,name:"Antonio Ricaute Salinas Echeverri"}};
        // const result= await users.updateOne(filter,update);
        // res.json(result);

        //Delete
        const filter={name:"Daniel Salinas Jaramillo"};
        const result=await users.deleteOne(filter);
        res.json(result);

    });
});

app.listen(port,()=>{
    console.log("El servidor esta escuchando en http://localhost:"+port);
});