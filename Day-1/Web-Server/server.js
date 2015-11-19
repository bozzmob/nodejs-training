var http = require('http'),
    calculator = require('./calculator'),
    dataParser = require('./dataParser'),
    serveStatic = require('./serveStatic')
    notFoundHandler = require('./dataParser'),


var server = http.createServer(function(req, res){
    dataParser(req,res);
    serveStatic(req,res);
    calculatorHandler(req,res);
    notFoundHandler(req,res);
    
});
server.listen(8080);
console.log('server listening on port 8080');

/*/calculator?operation=add&n1=100&n2=200*/
