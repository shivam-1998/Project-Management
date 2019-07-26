module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement: true
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        validate:{
          is: ["^[a-z]+$",'i'],
          max:20
        }
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        validate:{
          is: ["^[a-z]+$",'i'],
          max:20
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        validate:{
          isEmail: true
        }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        unique: true,
        validate:{
          max:20
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        required:true,
        unique: true,
        validate:{
          max:20
        }
      },
      dob: {
          type: Sequelize.STRING,
          allowNull: false,
          required:true
      },
      role:{
        type: Sequelize.STRING,
        allowNull: false,
        required:true
      }
      
    });
    
    return User;
  }