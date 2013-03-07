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