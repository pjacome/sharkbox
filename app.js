'use strict';

var express = require('express');
var mongo   = require('mongodb');
var MongoClient = mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    if(err) {
        console.log("> Could not connect to Mongo Client.\n"+
            "> Try running 'mongodb.exe' in 'Git Bash' to start the Mongo Client.");
        return;
    } else {
        console.log("Connected successfully to Mongo Client.");
    }
});

var app = express();
var options = {
    root: __dirname + '/views',
    dotfiles: 'deny',
    headers: {}
};

app.set('port', process.env.PORT || 5000);
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.listen(app.get('port'), function() {
    console.log("listening on port 5000");
});

module.exports = app;