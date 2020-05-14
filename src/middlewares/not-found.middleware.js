module.exports = function(req,res,next){
    return res.status(404).json({ok:false,message:'resource not found'});
}