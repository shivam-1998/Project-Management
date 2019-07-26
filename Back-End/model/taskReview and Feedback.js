module.exports = (sequelize, Sequelize) => {
    const TaskReview = sequelize.define('Task Review', {
      task_review:{
          type :Sequelize.STRING,
          required:true
      },
      task_feedback:{
         type : Sequelize.STRING,
         required:true
      }
    });
    
    return TaskReview;
  }