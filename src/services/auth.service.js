const {_err,generateToken} = require('../helpers');
let _UserService = null;
class AuthService{
    constructor({UserService}) {
        _UserService = UserService;
    }
    async signUp(user){
        const {email} = user;
        const userExists = await _UserService.getUserByEmail(email);
        if(userExists) _err(400,'user found in the db');
        const userNew = await _UserService.create(user);
        const token = generateToken(userNew._id);
        return {
            userNew,
            token
        }
    }
    async signIn(user){
        const {email,password} = user;
        const userExists = await _UserService.getUserByEmail(email);
        if(!userExists) _err(400,'user and/or password incorrect * ');
        if(!userExists.comparePasswords(password)) _err(400,'user and/or password incorrect');
        const token = generateToken(userExists._id);
        return {
            userExists,
            token
        }
    }
}

module.exports = AuthService;