'use strict';

var events = {};

events.POST = function(req, res) {
    console.log("body  =", req.body);
    var data = req.body;
    console.log("data =", data.state);
    res.json({'firstName': 'pablo', 'lastName': 'jacome'});
};

module.exports = events;