'use strict';

var express = require('express');
var mongo   = require('mongodb');
var handlebars = require('express-handlebars');
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

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// blocks header info about Node technology
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home')
});

app.get('/discussion', function(req, res) {
    res.render('discussion');
});

app.get('/index', function(req, res) {
    res.sendFile('index.html', options);
});

app.use(function(req, res) {
    res.type('text/html');
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log("listening on port " + app.get('port'));
});

module.exports = app;