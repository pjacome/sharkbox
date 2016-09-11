(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .value('apiUrl', 'https://crossorigin.me/http://api.eventful.com/json/events/search?app_key=')
        .value('key', 'ThPMmx93M7QSk4Mq')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/event');

            $stateProvider
            .state('event', {
                url:'/event',
                controller: 'eventController as event',
                templateUrl:'app/events.html'
            })
            .state('comments', {
                url:'/comment.html',
                controller: '', 
                templateUrl: 'app/comment.html'
            });
        }
    );

})();