const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send("home");
});

app.listen(3000);