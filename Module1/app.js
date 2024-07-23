(function() {
  'use strict';
  angular.module('myfirstapp', [])
  .controller('myfirstController' , function($scope){
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function()
      {
        var totalNameValue = calculateStringValue($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateStringValue(string)
      {
         var stringValue = 0;
         for(var i=0;i<string.length;i++)
         {
           stringValue += string.charCodeAt(i);
         }
         return stringValue;
      }
  });
})();
