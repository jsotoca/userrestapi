let _model = null;

class BaseRepository {
    constructor(model){
        _model = model;
    }
    async getAll(){
        return await _model.find({});
    }
    async getById(id){
        return await _model.findById(id);
    }
    async create(document){
        return await _model.create(document);
    }
    async update(id,document){
        return await _model.findByIdAndUpdate(id,document,{new:true,runValidators:true});
    }
    async delete(id){
        return await _model.findByIdAndUpdate(id,{status:false},{new:true,runValidators:true});
    }
}

module.exports = BaseRepository;