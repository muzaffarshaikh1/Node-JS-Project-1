const {MongoClient} = require('mongodb')


const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function connectDB(){
    try {
        await client.connect();
        console.log("Mongodb connected successfully");
        return client.db("myDatabaseOne");
    } catch (error) {
        console.error("Mongodb connection error:",error);
    }
}

module.exports = connectDB;