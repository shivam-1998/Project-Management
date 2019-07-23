const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
 
module.exports = function(app) {
 
    const controller = require('../controller/controller.js');
    const project = require('../controller/project.js');
 
  //register  
  app.post('/api/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
  
  //login
  app.post('/api/signin', controller.signin);
  
  //retrive managers
  app.get('/api/managers', controller.getmanagers);

  //retrive manager by ID
  app.get('/api/manager/:Id',controller.getmanagerById);
   
  //delete manager
  app.delete('/api/manager/:Id',controller.deletemanager);

  //update manager
  app.put('/api/manager/:Id', controller.updatemanager);
  
  //add project
  app.post('/api/addproject', project.addproject);

  //view projects
  app.get('/api/viewproject', project.viewproject);

  //view project By Id
  app.get('/api/viewproject/:Id', project.viewprojectById);

  //delete project
  app.delete('/api/deleteprojet/:Id', project.deleteproject);

  //update project
  app.put('/api/updateproject/:Id',project.updateproject);
  
  //addtask
  app.post('/api/addtask',project.addTask);

  //getemployees
  app.get('/api/getemployee',project.getEmployee);

  //add assigned Employee to project
  app.post('/api/addemployee',project.addemployee);
   


}