angular
    angular.module('my-app')
    .factory('housesFactory', function ($http) {
        function gethouses() {
            return $http.get('data/data.json');
        }
        return{
            gethouses: gethouses
        }
    });
