const jwt=require('jsonwebtoken')
const mongoose=require("mongoose");
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        min : 1000000000,
        max : 9999999999
        // validate: {
        //     validator: function(val) {
        //         return val.toString().length === 9
        //     },
        //     message: val => `${val.value} has to be 9 digits`
        // }
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

// hashing password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
})


//function generating token
userSchema.methods.generateAuthToken=async function(){
    try {
        let token  =jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens= this.tokens.concat({token:token}) 
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }

}




const User =mongoose.model('USER',userSchema);

module.exports=User; 
