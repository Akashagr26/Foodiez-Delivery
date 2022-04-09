const express=require('express');
const { initialData } = require('../../http/controllers/admin/initiaData');
const router = express.Router();



//user registration route
router.post('/initialdata',initialData)


 
module.exports=router;