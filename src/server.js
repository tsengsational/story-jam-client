const io = require('socket.io')();
io.on('connection', (client) => {
  // emit events to the client
});

const port = 8000;
io.listen(port);
console.log('listening on port', port);
