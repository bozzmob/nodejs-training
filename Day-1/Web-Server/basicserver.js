var http = require('http');
var server = http.createServer(function(req, res){
	var filename = req.url;
	console.log('requested resource = ',filename);
	res.write('<h1> Welcome to Node.js</h1>');
	res.end();
});
server.listen(8080);
console.log('server listening on 8080');