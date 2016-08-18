var express = require('express');
var override = require('method-override');
var parser = require('body-parser');
var app = express();
var burgerControl = require('../models/burgers.js');


var burgerExports = function(app){
    
    app.get('/', function(request, response){
        burgerControl.get('burgers', function(error, results){
            if(error){
                throw error;
            }
            console.log('burger-get');
            response.render('index', {
                rows: results
            });
        });
    });

    app.post('/burger', function(request, response){
        burgerControl.post(request.body.burger, function(error, results){
            if(error){
                throw error;
            }
            response.redirect('/');
        });
    });

    app.put('/burger', function(request, response){
        burgerControl.put(request.body.id, function(error, results){
            if(error){
                throw error;
            }
            response.redirect('/');
        });
    });

    app.delete('/burger', function(request, response){
        burgerControl.delete(request.body.id, function(error, results){
        if(error){
            throw error;
        } 
        response.redirect('/');
        });
    })

}

module.exports = burgerExports;