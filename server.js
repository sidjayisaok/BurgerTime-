//dependencies
var express = require('express');
var handlebars = require('express-handlebars');
var override = require('method-override');
var mysql = require('mysql');
var parser = require('body-parser');
var PORT = process.env.PORT || 8000;
var app = express();

//delivers static webpages
app.use(express.static(__dirname + '/public'));

app.use(parser.urlencoded({extended: false}))
app.set('view engine', 'handlebars');

//might not need this
app.get('/', function(request, response){
   response.send('root'); 
});

app.post('/', function(request,response){
    response.send('root');
});

//establish the method override and handlebars
app.use(override('_method'));
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//fire up the server
app.listen(PORT, function(){
    console.log("listening at port " + PORT);
});
