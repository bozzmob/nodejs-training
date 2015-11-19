var url = require('url'),
    qs = require('querystring');

module.exports = function(req, res){
    req.url = req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    if (req.method === 'POST'){
        var inputData= '';
        req.on('data', function(chunk){
            inputData += chunk;
        });
        req.on('end', function(){
            req.body =  qs.parse(inputData);
        });
    }
}
