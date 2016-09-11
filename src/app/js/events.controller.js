(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventController', eventController);

    eventController.$inject = ['eventFactory','$stateParams','$state'];

    /* @ngInject */
    function eventController(eventFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'eventController';
        //properties
        
        vm.getEvents = getEvents;
        vm.events = [];
        // vm.reviewlist = [];
        // vm.review = {};
        //methods
        
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

        // function addReview() {
        // 	eventFactory.add(vm.review).then(
        // 		function(newReview) {
        // 			vm.reviewlist.push(newReview);
        // 			console.log(vm.reviewlist);
        // 			vm.review = {};
        // 		}
        // 	);
        // }
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