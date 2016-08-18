//dependencies
var express = require('express');
var handlebars = require('express-handlebars');
var override = require('method-override');
var mysql = require('mysql');
var parser = require('body-parser');
var connections = require('./config/connection.js').connections;
var ORMstuff = require('./config/orm.js').ormFile;
var burgersStuff = require('./models/burgers.js').burgers;
var PORT = process.env.PORT || 8000;
var app = express();
var control = require('./controllers/burger_controller.js');

//delivers static webpages
app.use(express.static(__dirname + '/public'));

app.use(parser.urlencoded({extended: false}))
app.set('view engine', 'handlebars');

//get and post routes
app.get('/', function(request, response){
    ORMstuff.selectAll(response);
});

app.post('/', function(request, response){
   ORMstuff.selectOne(request.body.id);
});

app.post('/', function(request, response){
    ORMstuff.updateOne(request.body.id);
});

//establish the method override and handlebars
app.use(override('_method'));
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

control(app);

//fire up the server
app.listen(PORT, function(){
    console.log("listening at port " + PORT);
});
