exports.errorHandler = function errorHandler(err, req, res, next) {
    console.log(err.message);
    console.log(err.stack);
    res.status(500);
    res.end("Error"+ err.message);
}