/**
 * Created by Tauqeer Ahmed on 3/3/2016.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    local : {
        email : String,
        password : String
    }
});

var User = mongoose.model('User',userSchema);
module.exports = User;