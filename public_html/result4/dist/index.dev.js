"use strict";

var _http = require("http");

var s = (0, _http.Server)(function (req, res) {
  //resres.writeHead(200, {'Content-Length': 3});
  res.write('OK\n');
  res.end();
});
s.listen();