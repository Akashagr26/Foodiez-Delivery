const Category= require('../../../models/category') ;
const Product= require('../../../models/product') ;



exports.initialData=async(req,res)=>{
    const categories= await Category.find({}).exec(); 
    const products= await Product.find({})
    .select('_id name price slug description productPictures category')
    .populate({path:'category',select:'_id name'})
    .exec(); 

    res.status(200).json({
        categories,
        products
    })
}