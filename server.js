/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */
//Require Module
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
var routes = require('./app/routes');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

mongoose.connect(configDB.url);

var app = express();



//morgan middleware logger in development environment by using dev
app.use(morgan('dev'));
//Read the header in between server and client and save the cookie
app.use(cookieParser());
//bodyParser middleware parse the body
app.use(bodyParser.urlencoded({extended : true}));  //we can send anything that's why extended is true
//express session middleware maintaining session between server and client
app.use(expressSession({
    secret: 'anystringoftext',
    saveUninitialized: true,
    resave: true
}));
app.set('view engine','ejs');
app.use('/',routes); // another way to do this--> //require('./app/routes.js')(app);

app.listen(port, function () {
    console.log('App started at port ' + port);
});

