const db = require('../config/db.js');
const config = require('../config/config.js');
const Project = db.project;
const Task = db.task;
const User = db.user;
const Assigned = db.assigned;
const TaskReview = db.taskreview

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//AddProject
exports.addproject = (req, res) => {
  // Save Projects to Database
  console.log("Processing func -> Addproject");
  // console.log(req.body);
  Project.create({
    project_name: req.body.p_name,
    project_type: req.body.p_type,
    project_start_date: req.body.p_start_date,
    project_end_date: req.body.p_end_date,
    project_description: req.body.p_desc,
    project_status: req.body.p_status,
  }).then(project => {
    res.send(project);
  }).catch(err => {
    res.status(500).json({
      "description": "Can not add projects",
      "error": err
    });
  })
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
exports.viewprojectById = (req, res) => {
  const id = req.params.Id
  Project.findByPk(id).then(result => {
    //  console.log(result);
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).json({
      "description": "Can not View project By ID",
      "error": err
    });
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
  }).catch(err => {
    res.status(500).json({
      "description": "Can not delete projects",
      "error": err
    });
  })
}

//Update Project
exports.updateproject = (req, res, next) => {
  const id = req.params.Id;
  console.log(req.params);
  Project.update(
    {
      project_name: req.body.p_name,
      project_type: req.body.p_type,
      project_start_date: req.body.p_start_date,
      project_end_date: req.body.p_end_date,
      project_description: req.body.p_desc,
      project_status: req.body.p_status,
    },
    { where: { p_id: id } }
  ).then((result) => {
    res.status(200).json("updated successfully a Project with id = " + id);
  }).catch(err => {
    res.status(500).json({
      "description": "Can not update projects",
      "error": err
    });
  })
};

//Add Task
exports.addTask = (req, res) => {
  // Save Projects to Database
  console.log("Processing func -> AddTask");

  Task.create({
    task_name: req.body.task_name,
    planned_start_date: req.body.planned_start_date,
    planned_end_date: req.body.planned_end_date,
    task_description: req.body.task_description,
    task_status: req.body.task_status,
    task_review: req.body.task_review,
    task_feedback: req.body.task_feedback,
    projectPId: req.body.p_id
  }).then(task => {
    res.send(task);
    // console.log(task); 
  }).catch(err => {
    res.status(500).json({
      "description": "Can not add Task",
      "error": err
    });
  })
}

//getTasks
exports.getTask = (req, res) => {
  Task.findAll({
  }).then(result => {
    res.send(result);
  }).catch(err => {
    res.status(500).json({
      "description": "Can not get Tasks",
      "error": err
    });
  })
}

//getEmployess
exports.getEmployee = (req, res) => {
  User.findAll({
    where: { role: 'EMPLOYEE' }
  }).then(result => {

    res.send(result);

  }).catch(err => {
    res.status(500).json({
      "description": "Can not get Employees",
      "error": err
    });
  })
}
//Add Employee to the Project
exports.addemployee = (req, res) => {
  console.log('calling');

  Assigned.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    projectPId: req.body.Id
  }).then(emp => {
    res.status(200).json("Employee assigne successfully to the project")
  }).catch(err => {
    res.status(500).json({
      "description": "Can not add Employees to the Project",
      "error": err
    });
  })
}

//Add Employee to the Task
exports.postemployee = (req, res) => {
  console.log('calling');

  Assigned.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    taskTaskId: req.body.Id
  }).then(emp => {
    res.status(200).json("Employee assigne successfully to the Task")
  }).catch(err => {
    res.status(500).json({
      "description": "Can not postEmployee to the Task",
      "error": err
    });
  })
}

//see assined employee in task
exports.assignedEmployees = (req, res) => {
  const id = req.params.Id;
  Assigned.findAll({
    where: { taskTaskId: id }
  }).then(result => {
    res.send(result);
  }).catch(err => {
    res.status(500).json("can not see Employees assinged to task");
  })
}

//add Review
 exports.addreview = (req, res) => {
   TaskReview.create({
    task_review: req.body.task_review,
     task_feedback: req.body.task_feedback,
     taskTaskId: req.body.Id
   }).then(emp => {
     res.status(200).json("Successfully add review for the completed the task");
   }).catch(err => {
     res.status(500).json({
       "description": "Can not add review to the task",
       "error": err
     });
   })
}
