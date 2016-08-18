var sql = require('../config/connection.js');

var ormFile = {

selectAll: function(request, response){
    sql.query("SELECT * FROM burgers;", function(error, results){
        if(error){
            response(error);
        }
        response(false, results);
    });
},

insertOne: function(request, response){
    sql.query("INSERT INTO burgers (date, burger_name, devoured) VALUES (?)", [request.body.date, request.body.burger_name, request.body.devoured], function(error, results){
        if(error){
            response(error);
        }
        callback(false, results)
    });
},

updateOne: function(request, response){
    sql.query('UPDATE burgers SET burger_name = ?, devoured = ? WHERE Id = ?', [request.body.date, request.body.burger_name, request.body.devoured], function(error, results){
        if(error){
            response(error);
        }
        response(false, results);
    });
},

deleteOne: function(request, response) {
		sql.query('DELETE FROM burgers WHERE Id = ?', id, function(error, results) {
			if(error) {
				response(error);
			};
			response(false, results);
		});
	}

}

module.exports =ormFile;


