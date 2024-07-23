(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = "";
        $scope.message = "";

        $scope.checkLunch = function () {
            if (!$scope.lunchList) {
                $scope.message = "Please enter data first!";
                return;
            }

            var dishes = $scope.lunchList.split(',');
            var numberOfDishes = dishes.filter(function (dish) {
                return dish.trim() !== "";
            }).length;

            if (numberOfDishes <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();
