const express = require('express');
const app = express();

require('dotenv').config({path:'../.env'});

port = process.env.PORT;

app.listen(port,()=>{
    console.log(`The server is listening on ${port}`);
    
})

app.get("/",(req,res)=>{
    res.send("<h1>This is the homepage</h1>")
})