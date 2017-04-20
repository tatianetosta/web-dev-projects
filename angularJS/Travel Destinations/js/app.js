var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('AppCtrl', ['$scope', function ($scope) {
    
    /* This data cannot be changed */
    var weather = [{"high":"53","low":"45","text":"Showers","cityName":"Vancouver"},
                   {"high":"76","low":"61","text":"Partly Cloudy", "cityName":"Havana Cuba"},
                   {"high":"77","low":"56","text":"Clear","cityName":"San Diego"}, 
                   {"high":"82","low":"70","text":"Partly Cloudy","cityName":"Honolulu"}];

    // Define title model.
    $scope.title = "Travel Destinations";
    
    $scope.cityName = '';
    $scope.cityText = '';
    $scope.cityHighF = 0;
    $scope.cityLowF = 0;
    $scope.cityHighC = '';
    $scope.cityLowC = '';
    $scope.reverseSort = false;
    $scope.scale = 'f';
    $scope.fractionSize = 0;
    
    $scope.getAllWeather = function() {
        return  weather;
    } 
    
    // Return weather to application.
    $scope.forecast = $scope.getAllWeather();
    
    $scope.getCelsius = function(f) {
        return (f - 32) * 5 / 9;
    }
    
    $scope.changeCityValues = function(city, text, high, low)  {
        $scope.cityName = city;
        $scope.cityText = text;
        $scope.cityHighF = high;
        $scope.cityLowF = low;
        
        $scope.cityHighC = $scope.getCelsius(high);
        $scope.cityLowC = $scope.getCelsius(low);
    }
    
    $scope.updateTemperature = function () {
        console.log("updateTemperature = "+$scope.scale);        
    }

}]);
