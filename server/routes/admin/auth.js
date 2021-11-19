const express=require('express');
const router = express.Router();


const authController = require('../../http/controllers/admin/authController');
const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require('../../validators/validate');


// setting paths

//user registration route
router.post('/admin/signup',validateSignUpRequest,isRequestValidated,authController().signup)

// user login route
router.post('/admin/signin',validateSignInRequest,isRequestValidated,authController().signin)

 
module.exports=router;