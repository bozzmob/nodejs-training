var net = require("net");
var MessageParser = require("./MessageParser");


var socket = net.connect(8080);

var changeCount = {};

var parser = new MessageParser(socket);
parser.on("watching", function(filename){
    console.log("watching for file " + filename);
});
parser.on("change", function(filename){
    changeCount[filename] = (changeCount[filename] || 0) + 1;
    console.log(filename + " changed " + changeCount[filename] + " times");
})
parser.on("error", function(err){
    console.log(err);
});

