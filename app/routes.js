/**
 * Created by Tauqeer Ahmed on 3/3/2016.
 */
var User = require('./models/user');
/*
module.exports = function(app){
    app.get('/',function(req,res){
        res.send('Hello world');
    });

    app.get('/:username/:password',function(req,res){
        var newUser = new User();
        newUser.local.username = req.params.username;
        newUser.local.password = req.params.password;
        newUser.save(function(err){
            if(err){
                throw err;
            }
        });
        res.send('Success');
        console.log(newUser);

    });
};
*/

var express = require('express');
var api = express.Router();         //express router instance

api.get('/',function(req,res){
    res.render('index.ejs');
});

api.get('/signup',function(req,res){
   res.render('signup.ejs',{message : 'Success'});
});

api.post('/signup',function(req,res){
    var newUser = new User();
    newUser.local.email = req.body.email;
    newUser.local.password = req.body.password;
    console.log(newUser.local.email + " " + newUser.local.password);
    newUser.save(function(err){
       if(err){
           throw err;
       }
    });
    res.redirect('/');
});

api.get('/:username/:password',function(req,res){
    var newUser = new User();
    newUser.local.username = req.params.username;
    newUser.local.password = req.params.password;
    newUser.save(function(err){
       if(err){
           throw err;
       }
    });
    res.send('Success');
    console.log(newUser);

});
module.exports = api;