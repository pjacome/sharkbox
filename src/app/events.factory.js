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
            // remove: remove,
            // add: add
        };
        return service;

        ////////////////

        function get(city) {
        	var defer = $q.defer();

        	$http.get(apiUrl + key + '&keywords=concerts&location=' + city)
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
//         function add(review) {
//         	var defer = $q.defer();

//         	$http.post(apiUrl + '/', review)
//         	.then(
//         		function(response) {
//         			defer.resolve(response.data);
//         		},
//         		function(error) {
//         			defer.reject(error);
//         		}
//         	);
//         	return defer.promise;
//         }
//         function remove(review) {
//         	var defer = $q.defer();

//         	$http.delete(apiUrl + '' + review.reviewId)
//         	.then(
//         		function(response) {
//         			defer.resolve(response.data);
//         		},
//         		function(error) {
//         			defer.reject(error);
//         		}
//         	);
//         	return defer.promise;
//         }
//         function update(review) {
//         	var defer = $q.defer();

//         	$http.put(apiUrl + '' + review.reviewId, review)
//         	.then(
//         		function(response) {
//         			defer.resolve(reponse.data);
//         		},
//         		function(error) {
//         			defer.reject(error);
//         		}
//         	);
//         }
    }
})();