var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    qs = require('querystring'),
    calculator = require('./calculator');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.json', '.xml'];
function isStatic(resPath){
    return staticExtns.indexOf(path.extname(resPath)) != -1;
}
var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);
    if (isStatic(urlObj.pathname)){
        var filename = path.join(__dirname, urlObj.pathname);
        if (!fs.existsSync(filename)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(filename).pipe(res);
    } else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
        var operation = urlObj.query.operation,
            n1 = parseInt(urlObj.query.n1, 10),
            n2 = parseInt(urlObj.query.n2, 10);
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    } else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
        var inputData= '';
        req.on('data', function(chunk){
            inputData += chunk;
        });
        req.on('end', function(){
            var query = qs.parse(inputData);
            var operation = query.operation,
                n1 = parseInt(query.n1, 10),
                n2 = parseInt(query.n2, 10);
            var result = calculator[operation](n1, n2);
            res.write(result.toString());
            res.end();
        });

    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080');

/*/calculator?operation=add&n1=100&n2=200*/
