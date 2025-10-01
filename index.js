const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

let db;

async function connectDB(){
    await client.connect();
    db = client.db('myDatabaseOne');
    console.log("mongodb connected!");
}

connectDB();

// app.set("view engine","ejs");
app.get('/users', async (req,resp)=>{
    let result = await db.collection("users").find().toArray();
    resp.json(result);
});

app.post('/users',async(req,resp)=>{
    try {
        let userData = req.body;
        let result = await db.collection('users').insertOne(userData);
        resp.json({message:"Users added"})
    } catch (error) {
        resp.status(500).json({error:error.message});
    }
})

app.listen(3000);