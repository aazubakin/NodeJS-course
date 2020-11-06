"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept,Access-Control-Allow-Headers'
};

var s = require('http').Server(function (req, res) {
  res.writeHead(200, _objectSpread({
    'Content-Type': 'application/json'
  }, CORS, {
    'x-test': 'abc'
  }));
  var bodyData = '';

  if (req.url === '/result4/') {
    req.on('data', function (chunk) {
      bodyData += chunk;
    });
    req.on('end', function () {
      res.end(JSON.stringify({
        'message': 'azubakin',
        'x-result': req.headers['x-test'],
        'x-body': bodyData
      }));
    });
  } else {
    res.write('OK\n');
    res.end();
  }
});

s.listen();