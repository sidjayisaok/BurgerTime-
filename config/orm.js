exports.ormFile = function() {

var sql = require('connection.js').connections;

function selectAll(request, response){
    sql.query("SELECT * FROM burgers;", function(error, results){
        if(error){
            throw error;
        }
        results.render('index', {
            burger: results
        });
        console.log(results);
    });
}

function insertOne(request, response){
    sql.query("INSERT INTO burgers (date, burger_name, devoured) VALUES (?, ?, ?)", [request.body.date, request.body.burger_name, request.body.devoured], function(error, results){
        if(error){
            throw error;
        }
        results.redirect('/');
        // console.log('You have entered: ' + results.burger_name);  
    });
}

function updateOne(request, response){
    sql.query('UPDATE burgers SET burger_name = ?, devoured = ? WHERE Id = ?', [request.body.date, request.body.burger_name, request.body.devoured], function(error, results){
        if(error){
            throw error;
        }
        results.redirect('/');
        // console.log('Updated at ' + results.burger_name);
    });
}
}


