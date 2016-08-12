var express = require('express');
var override = require('method-override');
var parser = require('body-parser');
var app = express();

var router = express.Router();


router.get(function(request, response){
    response.render();
});

app.use('/', router);

module.exports = router;