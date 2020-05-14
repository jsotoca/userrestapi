const {_err} = require('../helpers');
let _repository = null;

class BaseService{
    constructor(repository){
        _repository = repository;
    }
    async getAll(){
        const data = await _repository.getAll();
        return data;
    }
    async getById(id){
        if(!id) _err(400,'id must sent');
        const data = await _repository.getById(id);
        if(!data) _err(404,'document not found');
        return data;
    }
    async create(document){
        const data = await _repository.create(document);
        return data;
    }
    async update(id,document){
        if(!id) _err(400,'id must sent');
        const data = await _repository.update(id,document);
        if(!data) _err(404,'document not updated');
        return data;
    }
    async delete(id){
        if(!id) _err(400,'id must sent');
        const data = await _repository.delete(id);
        if(!data) _err(404,'document not deleted');
        return data;
    }
}

module.exports = BaseService;