/*
* @Author: dmyang
* @Date:   2015-05-10 16:43:37
* @Last Modified by:   dmyang
* @Last Modified time: 2015-06-04 19:27:24
*/

'use strict';

var http = require('http');

var app = require('app');
var BrowserWindow = require('browser-window');

var win;

// require('crash-reportor').start();
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') app.quit();
});

app.on('ready', function() {
    win = new BrowserWindow({width: 800, height: 600});

    win.loadUrl('file://' + __dirname + '/gui/index.html');

    win.on('closed', function() {
        win = null;
    });
});

process.on('error', function(err) {
    console.error(err);
});

process.on('uncaughtException', function(err) {
    console.error(err);
});
