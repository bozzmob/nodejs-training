var nodejsWebSocket = require('nodejs-websocket');
var server = nodejsWebSocket.createServer(function(conn){
    conn.on('text', function(msg){
        server.connections.forEach(function(con){
            con.sendText(msg);
        });
    });
    conn.on('error', function(){
        console.log('nothing importing.. dont worry');
    });
});
server.listen(9090);
console.log('socket server listening on port 9090');
