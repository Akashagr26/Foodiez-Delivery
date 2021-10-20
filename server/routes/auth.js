const express=require('express');
const User = require('../models/userSchema');
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');
const homeController = require('../http/controllers/homeController');
const authController = require('../http/controllers/authController');
const cartController = require('../http/controllers/customer/cartController');

const router = express.Router();

// setting paths
router.get('/', homeController().index)

router.get('/login', authController().login)

router.get('/signup', authController().signup)

router.get('/contact', (req,res)=>{
    res.send('hello from contact page')
})

router.get('/cart', cartController().index)

router.post('/update-cart', cartController().update)

//user registration route
router.post('/signup',async (req,res)=>{

    const{name ,email,phone,password,cpassword}= req.body;

    if(!name || !email|| !phone|| !password|| !cpassword){
        return res.status(422).json({error:"plz fill fields properly"})
    }

    try {
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }else if(password!=cpassword){
            return res.status(422).json({error:"Password does not match"});
        }else{
            const user=new User({name ,email,phone,password,cpassword});

        await user.save();

        res.status(201).json({message:"User registered successfully"})
        }

    } catch (error) {
        console.log(error);
    }
})


// user login route

router.post('/login',async (req,res)=>{
    try {
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please  fill the data"})
        }

        const userLogin= await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)

            // creating jwt token 
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtToken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"Invaid Credentials"})
            }else{
                res.status(200).json({message:"Login successful"})
            }
        }
        else{
            res.status(400).json({error:"Invaid Credentials"})
        }

    } catch (error) {
        console.log(error);
    }
})

 
module.exports=router;