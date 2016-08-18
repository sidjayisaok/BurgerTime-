var ORM = require('../config/orm');

var burger = {

    get: function(table, response){
        ORM.selectAll(table, response);
    },
    
    post: function(burger, response){
        ORM.insertOne(burger, response);
    },
    
    put: function(id, response){
        ORM.updateOne(id, response);
    },

    delete: function(id, response){
        ORM.deleteOne(id, response);
    }
    
}

module.exports = burger;