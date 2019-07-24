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
    });
    
    return Assigned;
  }