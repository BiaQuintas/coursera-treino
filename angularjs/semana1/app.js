(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];


fucntion LunchCheckController ($scope){
  $scope.dishList = "";
  $scope.message = "";
  $scope.color = "black";

  $scope.checkLunch = function () {
    //if (!$scope.dishList)
    if ( $scope.dishList == undefined || $scope.dishList==""){
        $scope.message = "Please enter data first";
        $scope.color = "red";
        return;
    }
        var listDishes = $scope.dishList.split(",");

    var count = 0;
    for (count = 0; count<listDishes.length; count++){
      if(listDishes[count].trim() != ""){
        count++;
      }
    }

    if (count<=3){
      $scope.message = "Enjoy!";
      $scope.color = "green";
    } else {
      $scope.message = "Too much!";
      $scope.color = "red";
    }
  };
}
})();
