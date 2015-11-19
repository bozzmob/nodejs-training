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
    connection.write(JSON.stringify(output) + "\n");
    fs.watchFile(file, function(){
        var output = {
            type : "change",
            filename : file,
            timestamp : new Date()
        }
        var outputAsString = JSON.stringify(output) + '\n';
        var output1 = outputAsString.substr(0,20);
        connection.write(output1);
        var output2 = outputAsString.substr(20);
        setTimeout(function(){
            connection.write(output2);
        },3000);
    });
});

server.listen(8080);
console.log("server listening on port 8080");

