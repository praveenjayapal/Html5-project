'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/loginScreen.html', controller: 'LoginCtrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/home-screen.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);


function sendJob() {
    //window.alert("job");
    var url = 'http://localhost:3000/pickup';
    var name = 'Cindy';
    //var store = document.getElementsId('name').value;
    //var jsonobj = {'name':'Cindy', 'store': 'wollies' };

    $.post( url, { name: "John", time: "2pm" } );
}