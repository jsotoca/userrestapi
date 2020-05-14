module.exports = function(status,message){
    let err = new Error();
    err.status = status;
    err.message = message;
    throw err;
}