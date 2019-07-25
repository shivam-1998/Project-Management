const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.js');
// const Role = db.role;
const User = db.user;
 
//verify token
verifyToken = (req, res, next) => {
  // console.log(req.headers.authorization);
  
  let token = req.headers.authorization.split(' ')[1];
    console.log((JSON.parse(token)).accessToken);
    let accesstoken = (JSON.parse(token)).accessToken;
    console.log(accesstoken);
    
    
  if (!token){
    return res.status(403).send({ 
      auth: false, message: 'No token provided.' 
    });
  }
 
  jwt.verify(accesstoken, config.secret, (err, decoded) => {
    console.log(decoded);
    
    if (err){
      return res.status(500).json({ 
          auth: false, 
          message: 'Fail to Authentication. Error -> ' + err 
        });
    }
    req.userId = decoded.id;
    next();
  });

}

 //check admin role
// isAdmin = (req, res, next) => {
  
//   User.findByPk(req.userId)
//     .then(user => {
//       console.log(user.dataValues.role);
      
//       if(user.dataValues.role.toUpperCase() === "ADMIN"){
//             next();
//             return;
//           }
//         })
//         res.status(403).json("Require Admin Role!");
//         return;
//       }

 
// //check admin or project manager role
// isPmOrAdmin = (req, res, next) => {
  
//   User.findByPk(req.userId)
//     .then(user => {         
//       console.log(user.dataValues.role);
//           if(user.dataValues.role.toUpperCase() === "MANAGER"){
//             next();
//             return;
//           }
          
//           if(user.dataValues.role.toUpperCase() === "ADMIN"){
//             next();
//             return;
//           }
//         })
//         res.status(403).send("Require PM or Admin Roles!");
//       }
 
      
const authJwt = {};
authJwt.verifyToken = verifyToken;
// authJwt.isAdmin = isAdmin;
// authJwt.isPmOrAdmin = isPmOrAdmin;
 
module.exports = authJwt;