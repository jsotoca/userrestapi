const BaseRepository = require('./base.repository');
let _UserModel = null;

class UserRepository extends BaseRepository{
    constructor({UserModel}){
        super(UserModel);
        _UserModel = UserModel;
    }
    async getUserByEmail(email){
        return await _UserModel.findOne({email});
    }
}

module.exports = UserRepository;