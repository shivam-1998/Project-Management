const db = require('../config/db.js');
const config = require('../config/config.js');
const Project = db.project;
const Task = db.task;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//AddProject
exports.addproject = (req, res) => {
    // Save Projects to Database
    console.log("Processing func -> Addproject");
    // console.log(req.body);
    Project.create({
        project_name : req.body.p_name,
        project_type: req.body.p_type,
        project_start_date: req.body.p_start_date,
        project_end_date: req.body.p_end_date,
        project_description: req.body.p_desc,
        project_status: req.body.p_status,
      }).then(project => {
      res.send(project);
      // console.log(project); 
    });
  }

//ViewProjects
exports.viewproject = (req, res) => {
    Project.findAll({
    }).then(result => {
  
      res.send(result);
  
    }).catch(err => {
      res.status(500).json({
        "description": "Can not get projects",
        "error": err
      });
    })
  }

//ViewProjectById
exports.viewprojectById = (req,res)=>{
    const id = req.params.Id
     Project.findByPk(id).then(result=>{
      //  console.log(result);
       res.status(200).json(result);  
     });
  }

//Delete Project
exports.deleteproject = (req, res) => {
    const id = req.params.Id
    Project.destroy({
      where: { id: id }
    }).then((result) => {
      console.log(result);
      res.status(200).json('deleted successfully a project with id = ' + id);
    });
  }  

//Update Project
exports.updateproject = (req, res, next) => {
    const id = req.params.Id;
    console.log(req.params);
    
    // console.log(req.body);
    
    Project.update(
      {
        project_name : req.body.p_name,
        project_type: req.body.p_type,
        project_start_date: req.body.p_start_date,
        project_end_date: req.body.p_end_date,
        project_description: req.body.p_desc,
        project_status: req.body.p_status,
      },
      { where: { p_id: id } }
    ).then((result) => {
      if (result) {
        // console.log(result);
      }
      res.status(200).json("updated successfully a Project with id = " + id);
    });
  };  

//Add Task
exports.addTask = (req, res) => {
  // Save Projects to Database
  console.log("Processing func -> AddTask");
  // console.log(req.body);
  Task.create({
    task_name : req.body.task_name,
    planned_start_date: req.body.planned_start_date,
    planned_end_date: req.body.planned_end_date,
    task_description: req.body.task_description,
    task_status: req.body.task_status,
    task_review: req.body.task_review,
    task_feedback:req.body.task_feedback
    }).then(task => {
    res.send(task);
    console.log(task); 
  });
}