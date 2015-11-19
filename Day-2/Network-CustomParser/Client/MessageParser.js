var EventEmitter = require("events").EventEmitter;
var util = require("util");

function MessageParser(socket){
    socket.setEncoding("utf8");

    EventEmitter.call(this);
    var self = this;

    var buffer = '';
    socket.on("data", function(chunk){
        buffer = buffer + chunk;
        while(buffer.indexOf("\n") !== -1){
            var msg = buffer.substr(0, buffer.indexOf("\n"));
            buffer = buffer.substr(buffer.indexOf("\n") + 1);
            var response = JSON.parse(msg);
            self.emit(response.type, response.filename);
        }
    });
    socket.on("close", function(){
        self.emit("close");
    });
    socket.on("error", function(err){
        self.emit("error", err);
    });
}
util.inherits(MessageParser, EventEmitter);
module.exports = MessageParser;
