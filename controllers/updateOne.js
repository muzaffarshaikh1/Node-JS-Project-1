const { ObjectId } = require("mongodb");
const connectDB = require("../database/db");
async function updateOne(req,resp){
    try {
        const db = await connectDB();
        const users = db.collection('users');

        const id =req.params.id;
        const input = req.body;

        const filter = {_id:new ObjectId(id)};
        const updateData = {
            username:input.username,
            email:input.email,
            age:input.age
        };

        console.log(filter,updateData);

        const result = await users.updateOne(filter,{$set:updateData});

        if(result){
            resp.send('success');
        }else{
            resp.send('unable to update');
        }

    } catch (error) {
        console.error("updateOne:",error);
    }
}

module.exports = updateOne;