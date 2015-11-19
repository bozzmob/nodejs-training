var net = require("net");
var fs = require("fs");
var path = require("path");

//node server.js test.txt
//0     1         2
var fileName = process.argv[2] || '';
var file = path.join(__dirname, fileName);

if (!fileName || !fs.existsSync(file)){
    console.log("Invalid filename");
    process.exit(1);
}

var server = net.createServer(function(connection){
    connection.on("error", function(){
        console.log("connection error");
    });
    console.log("a new connection is established");
    var output = {
        type : "watching",
        filename : file
    };
    connection.write(JSON.stringify(output));
    fs.watchFile(file, function(){
        var output = {
            type : "change",
            filename : file,
            timestamp : new Date()
        }

        var outputAsString = JSON.stringify(output);
        connection.write(outputAsString);
    });
});

server.listen(8080);
console.log("server listening on port 8080");

