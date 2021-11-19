const express=require('express');
// const { } = require('../http/controllers/categoryController');
const { requireSignin, adminMiddleware } = require('../http/middlewares/authMiddleware');
const { createProduct } = require('../http/controllers/productController');
const router = express.Router();
const multer = require('multer');
const nanoid =require('nanoid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, nanoid.nanoid() + '-' + file.originalname)
    }
})

const upload = multer({storage});


router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);

// router.get('/category/getcategory',getCategories);



module.exports=router;