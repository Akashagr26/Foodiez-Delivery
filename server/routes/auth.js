const express=require('express');
const router = express.Router();


const homeController = require('../http/controllers/homeController');
const authController = require('../http/controllers/authController');
const cartController = require('../http/controllers/customer/cartController');
const { validateRequest, isRequestValidated } = require('../validators/validate');
const { requireSignin } = require('../http/middlewares/authMiddleware');



// setting paths
router.get('/', homeController().index)

router.post('/contact',requireSignin, (req,res)=>{
    res.status(200).json({user:'profile'})
    res.send('hello from contact page')
})

router.get('/cart', cartController().index)

router.post('/update-cart', cartController().update)

//user registration route
router.post('/signup',validateRequest,isRequestValidated,authController().signup)

// user login route
router.post('/signin',authController().signin)

 
module.exports=router;