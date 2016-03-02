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

var api = express.Router();

api.get('/',function(req,res){
   res.send('Hello world');
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