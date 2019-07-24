module.exports = (sequelize, Sequelize) => {
    const TaskReview = sequelize.define('tasks', {
      task_review:{
          type :Sequelize.STRING
      },
      task_feedback:{
         type : Sequelize.STRING
      }
    });
    
    return TaskReview;
  }