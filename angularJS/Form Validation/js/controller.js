var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);

    // Define this so it can be accessed globally for simplicity.
    

    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "Homework 2";
    }]);

    // Child controller (no parameters) - Inject scope.
    ctrls.controller('FormCtrl', ['$scope', 'formService',
        function ($scope, formService) {
        
            $scope.submitted = false;
            $scope.showSuccessMsg = false;
            $scope.sucessMessage = "";
        
            $scope.sendEmail = function (isValid, email) {
                $scope.submitted = true;
                $scope.showSuccessMsg = false;
                
                if(isValid) {
                    $scope.sucessMessage = formService.getSuccessMessage(email);
                    $scope.showSuccessMsg = true;
                }
            };

        }]);
    
    // Child controller (no parameters) - Inject scope.
    ctrls.controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.aboutInfo = "This is the Homework 2 - COMP 2909";
    }]);

    return ctrls;
}());
