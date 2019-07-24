const db = require('../config/db.js');
const config = require('../config/config.js');
const User = db.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//Sign-UP
exports.signup = (req, res) => {
  // Save User to Database
  console.log("Processing func -> SignUp");
  console.log(req.body);
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    dob: req.body.dob,
    role: req.body.role
  }).then(user => {
    res.send(user);
    console.log(user);

  });
}

//Sign-IN
exports.signin = (req, res) => {
  console.log("Sign-In");
  console.log(req.body);

  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (!user) {
       res.status(500).send('User Not Found.');
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
       res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });


    res.status(200).send({ auth: true, accessToken: token, role: user.dataValues.role });

  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
}


//get All Managers
exports.getmanagers = (req, res) => {
  User.findAll({
    where: { role: 'MANAGER' }
  }).then(manager => {

    res.send(manager);

  }).catch(err => {
    res.status(500).json({
      "description": "Can not access Managers",
      "error": err
    });
  })
}

exports.getmanagerById = (req,res)=>{
  const id = req.params.Id
   User.findByPk(id,{
        where:{role:'MANAGER'}
   }).then(result=>{
     console.log(result);
     res.status(200).json(result);
     
   });
}

//Delete manager
exports.deletemanager = (req, res) => {
  const id = req.params.Id
  User.destroy({
    where: { id: id }
  }).then((result) => {
    console.log(result);
    res.status(200).json('deleted successfully a manager with id = ' + id);
  });
}


//update manager
exports.updatemanager = (req, res, next) => {
  const id = req.params.Id;
  User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      // password: req.body.password,
      dob: req.body.dob
    },
    { where: { id: id } }
  ).then((result) => {
    if (result) {
      console.log(result);
    }
    res.status(200).json("updated successfully a Manager with id = " + id);
  });
};













  