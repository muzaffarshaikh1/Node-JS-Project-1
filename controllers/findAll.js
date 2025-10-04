const connectDB = require('../database/db');
async function findAll(req,resp){
    try {
        const db = await connectDB();
        const users = db.collection('users');
        const result = await users.find().toArray();
        resp.json(result);
    } catch (error) {
        console.error("all users:",error);
    }
}

module.exports = findAll;