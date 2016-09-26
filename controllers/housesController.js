angular
    .module('my-app')
    .controller('housesController', function ($scope, housesFactory) {
        $scope.welcome = "Welcome to my-app Houses in Rosemere";
        $scope.houses;
        housesFactory.gethouses().success(function (data) {
            $scope.houses = data;
        }).error(function (error) {
            $scope.houses = error;
        })
    });