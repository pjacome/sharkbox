'use strict';

var config = require('../../config.js');
var request = require('request');
var events = {};

// HELPER FUNCTIONS
function location(city, state) {
    if(city === '' && state === '') {
        return '';
    } else if(city !== '' && state !== '') {
        return city + ', ' + state;
    } else if(city !== '' && state === '') {
        return city;
    } else {
        return state;
    }
}
// ----------------

events.POST = function(req, res) {
    var data = req.body;
    var url = 'http://api.eventful.com/json/events/search';

    var a = 3,
        loc = location(data.city, data.state),
        date = data.date;

    var oArgs = {
        app_key: config.keys.eventful,
        keywords: '',
        location: loc,
        date: '',
        category: '',
        ex_category: '',
        within: '',
        units: '',
        count_only: '',
        sort_order: '',
        sort_direction: '',
        page_size: '',
        page_number: '',
        image_sizes: '',
        languages: '',
        mature: '',
        include: '',
        change_multi_day_start: ''
    };

    request.get(url, {qs: oArgs}, function(err, res2, body) {
        var data = JSON.parse(body);
        if(err) {
            console.log("Error in events.js, function request.get(...)", err);
            res.json({error: '500'});
        } else if(data.status === "Missing parameter" && data.error === "1") {
            console.log("Query String Error: ", data);
            res.json({error: 'Missing parameter'});
        } else {
            res.json(data);
        }
    });
};

module.exports = events;