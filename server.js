/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */

var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var app = express();

var port = process.env.PORT || 8080;
//morgan middleware in development environment by using dev
app.use(morgan('dev'));

app.use(cookieParser());
app.use(expressSession({secret : 'anystringoftext',
                        saveUninitialized : true,
                        resave : true}));
app.use('/',function(req,res){
    res.send('Our first express app');  //send is express function
    console.log(req.cookies);
    console.log(req.session);
});

app.listen(port,function(){
   console.log('App started at port ' + port);
});

