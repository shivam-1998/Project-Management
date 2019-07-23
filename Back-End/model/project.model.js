module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('projects', {
      p_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      project_name: {
        type: Sequelize.STRING
      },
      project_type: {
        type: Sequelize.STRING
      },
      project_start_date: {
        type: Sequelize.DATE
      },
      project_end_date: {
        type: Sequelize.DATE
      },
      project_description: {
        type: Sequelize.STRING
      },
      project_status:{
        type: Sequelize.STRING 
      }
    });
    
    return Project;
  }