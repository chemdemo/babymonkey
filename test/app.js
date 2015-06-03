/*
* @Author: dm.yang
* @Date:   2015-06-03 16:14:01
* @Last Modified by:   dm.yang
* @Last Modified time: 2015-06-03 19:38:45
*/

'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    console.log(req.url);

    var parsed = url.parse(req.url);
    var options = parsed;

    options.headers = req.headers;
    options.agent = false;

    req.setTimeout(3000, function() {
        req.abort();
        res.end(504);
    });

    var _req = http.request(options, function(_res) {
        _res.setTimeout(3000, function() {
            req.abort();
            res.end(504);
        });
        res.writeHead(_res.statusCode, _res.headers);
        _res.pipe(res);
    });

    _req.on('error', function(err) {
        res.end(500, err.message);
    });

    req.pipe(_req);
});

server.listen(8090);

process.on('uncaughtException', function(err) {
    console.error(err);
});
