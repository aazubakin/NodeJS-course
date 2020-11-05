"use strict";

var s = require('http').Server(function (req, res) {
  //resres.writeHead(200, {'Content-Length': 3});
  res.write('OK\n');
  res.end();
});

s.listen(4321);