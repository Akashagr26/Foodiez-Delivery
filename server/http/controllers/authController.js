const User = require('../../models/userSchema');
const bcrypt=require("bcryptjs");




function authController(){
    return{
        async signup(req,res){

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

                res.status(201).json(
                    {message:"User registered successfully"})
                }

            } catch (error) {
                console.log(error);
            }
        },
        async signin(req,res){
            try {
                const {email,password}=req.body;
        
                if(!email || !password){
                    return res.status(400).json({error:"Please  fill the data"})
                }
        
                const userLogin= await User.findOne({email:email});
        
                if(userLogin && userLogin.role==='customer'){
                    const isMatch = await bcrypt.compare(password,userLogin.password)
        
                    // creating jwt token 
                    const token = await userLogin.generateAuthToken();
                    
                    console.log(token);
                    res.cookie("jwtToken",token,{
                        expires:new Date(Date.now()+(1000*24*60*60*10)),//10 days
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
        }
    }
}

module.exports= authController