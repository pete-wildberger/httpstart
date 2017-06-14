//requires
var express= require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/', index);

//globals
var port = process.env.PORT || 2017;

//baseurl

//spin up
app.listen(port, function(){
  console.log('up on: ', port);
});
