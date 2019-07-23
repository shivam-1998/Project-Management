var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();
const db = require('./config/db.js');


//configuration
app.use(bodyparser.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

require('./router/router.js')(app);
//when you start the execution first time you have to uncomment this commented code after that you will comment this uncommented code. You have to do this because it will generate tables in databse when you you execute progarm.  

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    
  });

  
app.listen(3000,function(){
    console.log("Sever started at port 3000");
})
