(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventCtrl', eventCtrl);

    eventCtrl.$inject = ['eventFactory'];

    /* @ngInject */
    function eventCtrl(eventFactory) {
        var vm = this;
        vm.title = 'eventCtrl';
        //properties
        
        vm.getEvents = getEvents;
        // vm.reviewlist = [];
        // vm.review = {};
        //methods
        // vm.events = events;
        // vm.addReview = addReview;
        // vm.removeReview = removeReview;
        // vm.updateReview = updateReview;

        getEvents();

        ////////////////

        function getEvents(city) {
        	eventFactory.get(city).then(
        		function(data) {
        			vm.events = data;

        		}
        	);
        }

//         function addReview() {
//         	eventFactory.add(vm.review).then(
//         		function(newReview) {
//         			vm.reviewlist.push(newReview);
//         			vm.review = {};
//         		}
//         	);
//         }
//         function removeReview(review) {
//         	if(confirm("Are you sure you want to delete your review?")) {
//         		eventFactory.remove(review).then(
//         			function() {
//         				var index = vm.reviewlist.indexOf(review);
//         				vm.reviewlist.splice(index, 1);
//         			}
//         		);
//         	}
//         }
//         function updateReview(review) {
//         	eventFactory.update(review).then(
//         		function() {
//         			review.edit = false;
//         		}
//         	);
//         }
    }
})();