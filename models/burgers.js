exports.burgers = function(){

    var newORM = require('../config/orm.js').ormFile;

    newORM.selectAll('date','burger_name','devoured', 'DESC');

    newORM.insertOne('date', 'burger_name', 'devoured');

    newORM.updateOne('date', 'burger_name', 'devoured');

}