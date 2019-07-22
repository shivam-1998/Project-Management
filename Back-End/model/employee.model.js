module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employees', {
      emp_id: {
        type: Sequelize.INTEGER,
        primaryKey : true
      },
      emp_code: {
        type: Sequelize.STRING
      },
      emp_name: {
        type: Sequelize.STRING
      },
      
    });
    
    return Employee;
  }