/*
* @Author: dmyang
* @Date:   2015-06-04 17:12:13
* @Last Modified by:   dmyang
* @Last Modified time: 2015-06-04 18:11:36
*/

'use strict';

var path = require('path');

var koa = require('koa');
var app = koa();

var router  = require('koa-router')();
var rewrite = require('koa-rewrite');
var serve = require('koa-static');
var send = require('koa-send');

var conf = require('./conf');

router.get('/', function* (next) {
    yield send(this, __dirname + '/gui/index.html');
});

app.use(router.routes());
app.use(serve(__dirname + './gui'));

app.listen(conf.port, '0.0.0.0');

process.on('uncaughtException', function(err) {
    console.error(err);
});
