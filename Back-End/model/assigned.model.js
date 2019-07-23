module.exports = (sequelize, Sequelize) => {
    const Assigned = sequelize.define('assigne', {
      assigne_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      firstname:{
        type:Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
    //   user_id:{
    //      type:Sequelize.INTEGER,
    //      reference:{
    //      model:'users',
    //      key:'id',
    //     }
    //  },
    //   project_id:{
    //     type:Sequelize.INTEGER,
    //     reference:{
    //       model:'projects',
    //       key:'p_id',
    //      }
    //   },
    //   task_id:{
    //     type:Sequelize.INTEGER,
    //     reference:{
    //       model:'tasks',
    //       key:'task_id',
    //      }
    //   }
  
    });
    
    return Assigned;
  }