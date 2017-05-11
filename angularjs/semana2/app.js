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
    var count = 0;
    var listDishes = $scope.dishList.split(",");

    for (var i = 0; i<listDishes.length; i++){
      if(listDishes[i].trim() != ""){
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
