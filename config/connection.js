var mysql = require('mysql');
//import keys
var sqlInfo = require('./sqlInfo.js').sqlInform;
//establish mysql database
var connection = mysql.createConnection(sqlInfo);

exports.connections = {
 connect : function(){
   connection.connect(function(error){
    if(error){
      console.log("error: " + error.stack);
      return;
    };
    console.log('connected as: ' + connection.threadId);
  });
  connection.end(function(error){});
 } 
};
 


