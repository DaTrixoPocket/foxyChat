{
  "name": "foxyChat",
  "description": "foxyChat - smart, modern and fast way to support your clients",
  "version": "0.0.2",
  "private": true,
  "dependencies": {
    "express": "3.x",
    "socket.io": "0.9.x",
    "underscore": ">0"
  }
}

io.configure(function () {
io.set('authorization', function (handshakeData, callback) {
if (handshakeData.xdomain) {
callback('Cross-domain connections are not allowed');
} else {
callback(null, true);
}
});
});



// Sessions without express
http://stackoverflow.com/questions/12122783/socket-io-session-without-express-js
http://stackoverflow.com/questions/10609564/socketio-mysql-authentication/10622204#10622204
http://stackoverflow.com/questions/8993369/using-socket-io-how-can-i-find-out-the-session-id-of-a-disconnected-user

// Node Modules
http://www.catonmat.net/blog/nodejs-modules-cradle/
http://www.catonmat.net/blog/nodejs-modules-jsonstream/