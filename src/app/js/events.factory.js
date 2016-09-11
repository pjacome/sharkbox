(function() {
    'use strict';

    angular
        .module('app')
        .factory('eventFactory', eventFactory);

    eventFactory.$inject = ['$http', '$q', 'apiUrl', 'key'];

    /* @ngInject */
    function eventFactory($http, $q, apiUrl, key) {
        var service = {
            get: get
            // add: add
            // update: update,
            // remove: remove
            
        };
        return service;

        ////////////////

        function get(city) {
        	var defer = $q.defer();

        	$http.get(apiUrl + key + '&location=' + city + '&location=San+Diego&date=ThisWeek&category=Music')
        	.then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			defer.reject(error);
        		}
        	);
        	return defer.promise;
        }

        // function add(comment, id) {
        // 	var defer = $q.defer();

        // 	$http.post('http://api.eventful.com/rest/events/comments/new?' + key + '&id=' + Id + '&comment=' + comment, comment)
        // 	.then(
        // 		function(response) {
        // 			defer.resolve(response.data);
        // 		},
        // 		function(error) {
        // 			defer.reject(error);
        // 		}
        // 	);
        // 	return defer.promise;
        // }
        // function update() {
        // 	var defer = $q.defer();

        // 	$http.put()
        // 	.then(
        // 		function() {
        // 			defer.resolve();
        // 		},
        // 		function() {
        // 			defer.reject(error);
        // 		}
        // 	);
        // 	return defer.promise;
        // }       
        // function remove(review) {
        // 	var defer = $q.defer();

        // 	$http.delete(apiUrl + '' + review.reviewId)
        // 	.then(
        // 		function(response) {
        // 			defer.resolve(response.data);
        // 		},
        // 		function(error) {
        // 			defer.reject(error);
        // 		}
        // 	);
        // 	return defer.promise;
        // }
    }
})();