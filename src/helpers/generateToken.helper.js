const {sign} = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config');

module.exports = function(_user){
    return sign({_user},TOKEN_SECRET,{expiresIn:'4h'});
}