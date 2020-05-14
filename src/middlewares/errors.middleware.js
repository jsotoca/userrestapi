module.exports = function(err,req,res,next){
    const httpStatus = err.status || 500;
    return res.status(httpStatus).json({ok:false,message:err.message});
}