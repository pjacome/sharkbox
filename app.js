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

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// for parsing encoded data (typically for POSTs)
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('body-parser').json());

// blocks header info about Node technology
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);
app.use('/', express.static(__dirname + '/public'));

// routes
app.use('/', require('./routes/routes'));

app.listen(app.get('port'), function() {
    console.log("listening on port " + app.get('port'));
});

module.exports = app;