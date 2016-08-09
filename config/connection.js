exports.connections = {
  //import keys
  var sqlInfo = require('./sqlInfo.js').sqlInform;

  //establish mysql database
  var connection = mysql.createConnection(sqlInfo);

  connection.connect(function(error){
    if(error){
      console.log("error: " + error.stack);
      return;
    };

    console.log('connected as: ' + connection.threadId);
  });

  connection.end(function(error){});
}
}
