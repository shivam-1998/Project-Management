module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('projects', {
      p_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      project_name: {
        type: Sequelize.STRING,
        required:true
      },
      project_type: {
        type: Sequelize.STRING,
        required:true
      },
      project_start_date: {
        type: Sequelize.DATE,
        required:true
      },
      project_end_date: {
        type: Sequelize.DATE,
        required:true
      },
      project_description: {
        type: Sequelize.STRING,
        required:true
      },
      project_status:{
        type: Sequelize.STRING,
        required:true 
      }
    });
    
    return Project;
  }