const db = require('../config/db.js');
const Manager = db.managers;
 
// Post a Manager
exports.create = (req, res) => {  
  // Save to MySQL database
  Manager.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password:req.body.password,
    username:req.body.username,
    dob:req.body.dob,
  }).then(manager => {    
    res.send(manager);
  });
};
 
// FETCH all Managers
exports.findAll = (req, res) => {
  Manager.findAll().then(managers => {
    res.send(managers);
  });
};

 
// Update a manager
exports.update = (req, res) => {
  const id = req.params.Id;
  Manager.update(
       { firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password:req.body.password,
        username:req.body.username,
        dob:req.body.dob
        }, 
           { where: {id: req.params.Id} }
           ).then(() => {
           res.status(200).send("updated successfully a Manager with id = " + id);
           });
};
 
// Delete a manager by Id
exports.delete = (req, res) => {
  const id = req.params.Id;
  Manager.destroy({
    where: { id: id }
  }).then((res) => {
    res.status(200).send('deleted successfully a manager with id = ' + id);
  });
};