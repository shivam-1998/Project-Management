module.exports = (sequelize, Sequelize) => {
    const task = sequelize.define('tasks', {
      task_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      task_name: {
        type: Sequelize.STRING,
        required:true
      },
      planned_start_date: {
        type: Sequelize.DATE,
        required:true
      },
      planned_end_date: {
        type: Sequelize.DATE,
        required:true
      },
      task_description: {
        type: Sequelize.STRING,
        required:true
      },
      task_status: {
          type :Sequelize.STRING,
          required:true
      },
    });
    
    return task;
  }