'use strict';

var express = require('express');
var mongoose= require('mongoose');
var app = express();
var options = {
    root: __dirname + '/views',
    dotfiles: 'deny',
    headers: {}
};

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongodb connected @ localhost/test");
});

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});

var routes = require('./routes');
app.use('/', routes);
module.exports = app;