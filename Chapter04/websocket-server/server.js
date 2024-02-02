const WebSocket = require('ws');

const WebSocketServer = new WebSocket.Server({
  port: 3000
});

WebSocketServer.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log('Received:', msg);
    if (msg.toString() === 'Hello') socket.send('World!');
  });
});
