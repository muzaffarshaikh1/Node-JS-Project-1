const { ObjectId } = require('bson');
const connectDB = require('../database/db');

async function findOne(req,resp){
    try {
        const id = req.params.id;
        const db = await connectDB();
        const users = db.collection('users');

        const result = await users.findOne({_id:new ObjectId(id)});
        resp.send(result);
    } catch (error) {
        console.error("findOne:",error);
    }
}

module.exports = findOne;