(function () {
    angular
        .module('app', ['ngRoute', 'ngResource'])
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('logInterceptor');
        })
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<home></home>'
                })
                .when('/task/:id', {
                    template: '<task-details></task-details>'
                })
                .when('/create', {
                    template: '<task-create></task-create>'
                })
                .when('/update/:id', {
                    template: '<task-edit></task-edit>'
                })
                .when('/interval', {
                    template: '<interval></interval>'
                });
        });
} ());