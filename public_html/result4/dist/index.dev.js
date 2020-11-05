"use strict";

var _http = require("http");

var s = (0, _http.Server)(function (req, res) {
  //resres.writeHead(200, {'Content-Length': 3});
  if (req.url === '/ru') {
    res.write('Веб');
  } else {
    res.write('OK\n');
  }

  res.end();
});
s.listen(4321);