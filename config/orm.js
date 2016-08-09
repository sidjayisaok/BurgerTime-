exports.ormFile = {

function(){

var sql = require('connection.js').connections;

function selectAll(){
    sql,query("SELECT * FROM burgers", function(error, results){
        if(error){
            throw error;
        }
        console.log(results);
    });
}

function insertOne(){
    sql.query("INSERT INTO burgers ?", function(error, results){
        if(error){
            throw error;
        }
        console.log('You have entered: ' + results.burger_name);  
    });
}

function updateOne(){
    sql.query('UPDATE burgers SET burger_name = ? Where Id = ?', function(error, results){
        if(error){
            throw error;
        }
        console.log('Updated at ' + results.burger_name);
    });
}


}

}


