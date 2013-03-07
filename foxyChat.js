var io = require('socket.io').listen(3000);
 
io.configure(function (){
  io.set('authorization', function (handshakeData, callback) {
    callback(null, true); // error first callback style 
  });
});


io.sockets.on('connection', function (socket) {
    console.log(socket.handshake.address.address);
    socket.on('message', function (message) {
        console.log("Got message: " + message);
        io.sockets.emit('pageview', { 'url': message });
    });
 
});