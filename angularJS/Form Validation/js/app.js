/***************************************** 
 * Declare application reference.
 *****************************************/
// Inject routing service and controller reference.
var homeworkApp = angular.module('HomeworkApp', ['ngRoute', 'myControllers'])
                     .config(function ($routeProvider) {

    /***************************************** 
    * Define routes.
    *****************************************/
    // For the 'home' page.
    $routeProvider.when("/home", {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
    })
    // For the 'home' page.
    .when("/home/about", {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    // For the 'default' page.
    .otherwise({ redirectTo: '/home' });
});
