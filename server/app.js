const dotenv =require("dotenv");
const express =require("express");
const cors = require('cors');
const app =express();
const session =require('express-session');
const flash=require('express-flash');
const MongoDbStore=require('connect-mongo');


// dotenv configuration
dotenv.config({path:'./config.env'});

require("./db/connect");
const User =require('./models/userSchema');

//setting body parser (json to object)
app.use(express.json());


// session config
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    store:MongoDbStore.create({
        mongoUrl:process.env.DATABASE_OFF
    }),
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24} // 24 hours
}))

app.use(flash());

// //global middleware
// app.use((req,res,next)=>{
//     res.locals.session=req.session;
//     next()
// })


// setting cross platform
app.use(cors());


//linking routes files
app.use(require('./routes/auth'));


//setting port
PORT= process.env.PORT || 8000;


// listening req at the PORT
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})