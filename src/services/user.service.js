const BaseService = require('./base.service');
let _UserRepository = null;

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository);
        _UserRepository = UserRepository;
    }
    async getUserByEmail(email){
        return await _UserRepository.getUserByEmail(email);
    }
}

module.exports = UserService;