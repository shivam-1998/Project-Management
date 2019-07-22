module.exports = (sequelize, Sequelize) => {
    const task = sequelize.define('tasks', {
      task_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      task_name: {
        type: Sequelize.STRING
      },
      planned_start_date: {
        type: Sequelize.DATE
      },
      planned_end_date: {
        type: Sequelize.DATE
      },
      task_description: {
        type: Sequelize.STRING
      },
      task_status: {
          type :Sequelize.STRING
      },
      task_review:{
          type :Sequelize.STRING
      },
      task_feedback:{
         type : Sequelize.STRING
      }
    });
    
    return task;
  }