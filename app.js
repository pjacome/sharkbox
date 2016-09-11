'use strict';

var express = require('express');
var mongo   = require('mongodb');
var MongoClient = mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    if(err) {
        console.log("you fucked up mongo somehow someway.", err);
        return;
    } else {
        console.log("Connected successfully to mongo localhost");
    }
});

var app = express();
var options = {
    root: __dirname + '/views',
    dotfiles: 'deny',
    headers: {}
};

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});

// var routes = require('routes');
// app.use('/', routes);
module.exports = app;