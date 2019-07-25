const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.password,'', {
  host: env.host,
  dialect: 'mysql',
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
logging:true; 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.project = require('../model/project.model.js')(sequelize, Sequelize);
db.task = require('../model/task.model.js')(sequelize, Sequelize);
db.assigned = require('../model/assigned.model.js')(sequelize,Sequelize);
db.taskreview = require('../model/taskReview and Feedback.js')(sequelize,Sequelize);

db.project.hasMany(db.task);
db.project.hasMany(db.assigned);
db.task.hasMany(db.assigned);
db.task.hasMany(db.taskreview);




module.exports = db;