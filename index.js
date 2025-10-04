const express = require("express");
const { Collection } = require("mongodb");
const findAll = require("./controllers/findAll");
const findOne = require("./controllers/findOne");
const updateOne = require("./controllers/updateOne");

const app = express();

// middlware
app.use(express.urlencoded({extended:true}));

app.get("/users",findAll);

app.get("/users/:id",findOne);

app.put("/users/:id",updateOne);

app.listen(3000);

