const { ObjectId } = require('mongodb');
const connectDB = require('../database/db');
async function deleteOne(req,resp){
    try {
        const db = await connectDB();
        const users = db.collection('users');

        const id = req.params.id;

        const result = await users.deleteOne({_id:new ObjectId(id)});

        if(result){
            resp.send('success');
        }else{
            resp.send('unable to delete');
        }

    } catch (error) {
        console.error("inserOne:",error);
    }
}

module.exports = deleteOne;