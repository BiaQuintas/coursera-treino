(function () {
'use strict';

angular.module('MyLunchChecker', []);
//.controller('myLunchCheckerController', myLunchCheckerController);
.controller('MyLunchCheckerController', MyLunchCheckerController);
MyLunchCheckerController.$inject = [$scope];

fucntion MyLunchCheckerController ($scope){

  $scope.checkLunch = function (value) {
    $scope.count = 0;
    //if (!value)
    if ( $scope.dishList == undefined || $scope.dishList==""){
      $scope.message = "Please enter data first";
      return;
    }

    var list = value.split(',');

    for (var i = 0; i<list.length; i++){
      if(list[i].trim() != "")
        $scope.count++;
    }

    if ($scope.count<=3){
      $scope.message = 'Enjoy';
    } else {
      $scope.message = 'Too much';
    }
  };
});
})();

//})();
