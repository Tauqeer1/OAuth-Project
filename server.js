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


mongoose.connect(configDB.url);

var app = express();


var port = process.env.PORT || 8080;

//morgan middleware logger in development environment by using dev
app.use(morgan('dev'));
//Read the header in between server and client and save the cookie
app.use(cookieParser());
//express session middleware maintaining session between server and client
app.use(expressSession({
    secret: 'anystringoftext',
    saveUninitialized: true,
    resave: true
}));

/*app.use('/',function(req,res){
 res.send('Our first express app');  //send is express function
 console.log("Cookies = " ,req.cookies);
 console.log("Session = " ,req.session);
 });*/
app.use('/',routes);
// another way
//require('./app/routes.js')(app);

app.listen(port, function () {
    console.log('App started at port ' + port);
});

