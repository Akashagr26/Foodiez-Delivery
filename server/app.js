const dotenv =require("dotenv");
const mongoose=require("mongoose");
const express =require("express");
const app =express();


// dotenv configuration
dotenv.config({path:'./config.env'});
require("./db/connect");
const User =require('./models/userSchema');

//setting json to object
app.use(express.json());

//linking routes files
app.use(require('./routes/auth'));

//setting port
PORT= process.env.PORT || 8000;

// listening req at the PORT
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})