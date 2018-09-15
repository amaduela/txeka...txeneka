var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {   
    $routeProvider

        // rotas da nossa SPA

        // route home page
        .when('/', {
            templateUrl : 'app/views/home.html',
            controller  : 'homeCtrl'
        })

        // route about page
        .when('/bor_dashboard', {
            templateUrl : 'app/views/bor_dashboard.html',
            controller  : 'bor_dashboardCtrl'
        })

        // route contact page
        .when('/bor_loans', {
            templateUrl : 'app/views/bor_loans.html',
            controller  : 'bor_loansCtrl'
        })
        .when('/bor_reg', {
            templateUrl : 'app/views/bor_reg.html',
            controller  : 'bor_regCtrl'
        })
        .otherwise({
            redirectTo: "/"
        });
});