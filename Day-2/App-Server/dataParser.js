var url = require('url'),
    qs = require('querystring');

module.exports = function(req, res, next){
    req.url = req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    req.body = {};
    req.field = function(attrName){
        return req.url.query[attrName] || req.body[attrName];
    };
    if (req.method === 'POST'){
        var inputData= '';
        req.on('data', function(chunk){
            inputData += chunk;
        });
        req.on('end', function(){
            req.body =  qs.parse(inputData);
            next();
        });
    } else {
        next();
    }
}
