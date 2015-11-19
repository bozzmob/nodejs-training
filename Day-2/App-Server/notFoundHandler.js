module.exports = function(req, res, next){
    console.log('sending 404');
    res.statusCode = 404;
    res.end();
    next();
}
