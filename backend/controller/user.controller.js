const mongoose = require('mongoose')
// const users = expess.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = mongoose.model('User')

process.env.SERECT_KEY = 'serect'

module.exports.register = (req,res,next) =>{
    var user = new User();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) 
            res.send(doc);
        else{
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address']);
            else
                return next(err);
        }
    });
}
//call for passport authentication

// module.exports.login = (req, res, next)=>{
    
//    let promise = User.findOne({ email: req.body.email}).exec();

//    promise.then(function(doc){
//     if (doc) {
//         if(doc.isValid(req.body.password)){
//             //generate token
//             let token = jwt.sign({username:doc.username},'secret');
//             return res.status(200).json(token);
            
//         }else{
//             return res.status(501).json({message: "Invalid Credentials"});
//         }
//     }
//     else{
//         return res.status(501).json({message: "User Email not register"});
//     }
//    });
//    promise.catch(function(err){
//     return res.status(501).json({message: "Some internal error"});
//    });
// }