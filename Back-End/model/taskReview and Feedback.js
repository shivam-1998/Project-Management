module.exports = (sequelize, Sequelize) => {
    const TaskReview = sequelize.define('tasks', {
      Tr_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      task_review:{
          type :Sequelize.STRING
      },
      task_feedback:{
         type : Sequelize.STRING
      }
    });
    
    return TaskReview;
  }