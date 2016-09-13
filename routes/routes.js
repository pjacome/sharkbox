'use strict';

var express = require('express');
var router  = express.Router();
var events  = require('./controller/events');

router.get('/', function(req, res) {
    res.render('events');
});

router.get('/discussion', function(req, res) {
    res.render('discussion');
});

router.get('/about', function(req, res) {
    res.render('about');
});

// router.post('/search', function(req, res) {
//     console.log("We're here!");
//     res.redirect('/');
// });
router.post('/events/search', events.POST);


/*
    Catch 400 Errors
*/

router.use(function(req, res) {
    console.log("Tried to visit '" + req.url + "'");
    res.type('text/html');
    res.status(404);
    res.render('404');
});

/*
    Catch 500 Errors
*/

router.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

module.exports = router;