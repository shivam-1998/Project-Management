const db = require('../config/db.js');
const config = require('../config/config.js'); 
const User = db.user;

 
const checkDuplicateUserNameOrEmail = (req, res, next) => {
  // -> Check Username is already in use
 
  User.findOne({
    where: {
      username:req.body.username
    }
    
  }).then(user => {
    if(user){
      res.status(500).json({message:"Fail -> Username is already taken!"});
      return;
    }
    
    // -> Check Email is already in use
    User.findOne({ 
      where: {
        email: req.body.email
      } 
    }).then(user => {
      if(user){
        res.status(550).json("Fail -> Email is already in use!");
        return;
      }
    next();
    });
  });
}
 
 
const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;
 
module.exports = signUpVerify;