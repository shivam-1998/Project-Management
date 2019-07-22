module.exports = (sequelize, Sequelize) => {
    const Assigned = sequelize.define('assigne', {
      assigne_id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      user_id:{
         type:Sequelize.INTEGER,
         reference:{
         model:'users',
         key:'id',
        }
     },
      project_id:{
        type:Sequelize.INTEGER,
        reference:{
          model:'projects',
          key:'p_id',
         }
      }
  
    });
    
    return Assigned;
  }