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
  app.get('/api/managers', [authJwt.verifyToken],controller.getmanagers);

  //retrive manager by ID
  app.get('/api/manager/:Id', [authJwt.verifyToken],controller.getmanagerById);
   
  //delete manager
  app.delete('/api/manager/:Id', [authJwt.verifyToken],controller.deletemanager);

  //update manager
  app.put('/api/manager/:Id',  [authJwt.verifyToken],controller.updatemanager);
  
  //add project
  app.post('/api/addproject', [authJwt.verifyToken], project.addproject);

  //view projects
  app.get('/api/viewproject', [authJwt.verifyToken],project.viewproject);

  //view project By Id
  app.get('/api/viewproject/:Id',[authJwt.verifyToken], project.viewprojectById);

  //delete project
  app.delete('/api/deleteprojet/:Id',[authJwt.verifyToken], project.deleteproject);

  //update project
  app.put('/api/updateproject/:Id',[authJwt.verifyToken],project.updateproject);
  
  //addtask
  app.post('/api/addtask',[authJwt.verifyToken],project.addTask);

  //Get Tasks
  app.get('/api/gettasks',[authJwt.verifyToken],project.getTask);

  //getemployees
  app.get('/api/getemployee',[authJwt.verifyToken],project.getEmployee);

  // assigned Employee to project
  app.post('/api/addemployee',[authJwt.verifyToken],project.addemployee);

   //assigned Employee to task
   app.post('/api/postemployee',[authJwt.verifyToken],project.postemployee);

   //see assinge employee to th task
   app.get('/api/viewassignedEmployee/:Id',[authJwt.verifyToken],project.assignedEmployees);

   //add Review
   app.post('/api/postreview',[authJwt.verifyToken],project.addreview);
   


}