const TestMenu = require('../../models/testpizza')

function homeController(){
    return{
        async index(req,res){
            try {
                const pizza= await TestMenu.find();
                res.json(pizza)
                res.send('hello from home page')
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = homeController