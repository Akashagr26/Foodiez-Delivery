function authController(){
    return{
        login(req,res){
            res.send('hello from login page')
        },
        signup(req,res){
            res.send('hello from signUp page')
        }
    }
}

module.exports= authController