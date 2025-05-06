require('dotenv').config();
const express=require("express");
const bp=require("body-parser");
const userroute=require('./routes/userroute.js');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.use(userroute);
app.listen(process.env.PORT,()=>{
    console.log("server is listen");
});


//database connetion
const mongoose=require("mongoose");
mongoose.connect(process.env.DB + '/USERLOGINPAGE').then(()=>{
    console.log("database is succefully connected");
}).catch((e)=>{
    console.log(e.message);
});



