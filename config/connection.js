var mysql = require('mysql');
//import keys
var sqlInfo = require('./sqlInfo.js').sqlInform;
//establish mysql database
var connection = mysql.createConnection(sqlInfo);

connection.connect(function(error){
  if(error){
    throw error;
  };
  console.log('connected to database');
});

module.exports = connection;
 


