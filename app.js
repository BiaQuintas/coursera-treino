(function () {
'use strict';

angular.module('MyLunchChecker', []);

.controller('MyLunchCheckerController', MyLunchCheckerController);
MyLunchCheckerController.$inject = [$scope];

fucntion MyLunchCheckController ($scope){
  $scope.dishList = "";
  $scope.message = "";
  $scope.color = "black";


  $scope.checkLunch = function () {
    $scope.count = 0;
    //if (!value)
    if ( $scope.dishList == undefined || $scope.dishList==""){
        $scope.message = "Please enter data first";
        $scope.color = "red";
      return;
    }

    var listDishes = value.split(',');

    for (var i = 0; i<list.length; i++){
      if(list[i].trim() != "")
        $scope.count++;
    }

    if ($scope.count<=3){
      $scope.message = "Enjoy";
      $scope.color = "green";
    } else {
      $scope.message = "Too much";
      $scope.color = "red";
    }
  };
}
})();

//})();
