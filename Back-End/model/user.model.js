module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement: true
      },
      firstname: {
        type: Sequelize.STRING,
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
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dob: {
          type: Sequelize.STRING,
          allowNull: false
      },
      role:{
        type: Sequelize.STRING
      }
      
    });
    
    return User;
  }