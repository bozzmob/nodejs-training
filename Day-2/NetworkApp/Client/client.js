var net = require("net");

var socket = net.connect(8080);
socket.setEncoding("utf8");
socket.on('data', function(chunk){
     var message = JSON.parse(chunk);
    if (message.type === 'watching'){
        console.log('The server has started watching the file');
    } else if (message.type === 'change'){
        console.log('The file has changed at ' + message.timestamp);
    }
})
