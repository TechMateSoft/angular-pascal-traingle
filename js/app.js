angular.module('angular-app-assignment', [])

.controller('pascalTriangleCtrl', ['$scope', function($scope) {

  $scope.len;

  // Get LocalStorage value by default as number of ROWS
  var init = function() {
    $scope.len = localStorage.getItem('len');
  }

  init();

  // Checking for null value
  $scope.shouldDisplayTriangle = function(l) {
    return (l != null && l != 0);
  }

  // Getting number of rows and columnf for Traiangle
  $scope.getList = function(l) {
    var arr = [];
    for (var i = 0; i < l; i++) {
      arr.push(i);
    }
    return arr;
  }

  // Main logic for left-aligned PASCAL's triangle
  $scope.getPascalValue = function(row, column) {
    if(row < column) return "";
    else if(row == column || column == 0) return 1;
    else return ($scope.getPascalValue(row-1, column) + $scope.getPascalValue(row-1, column-1));
  }


  // CSS class assignment
  $scope.getClass = function(num) {
    var cls = "";
    switch(num % 4) {
      case 0:
        cls = "red-text";
        break;
      case 1:
        cls = "blue-text";
        break;
      case 2:
        cls = "orange-text";
        break;
      case 3:
        cls = "green-text";
        break;
    }
    return cls;
  }

  // Storing value in LocalStorage
  $scope.$watch('len', function() {
    if(typeof $scope.len != "undefined") {
      localStorage.setItem('len', $scope.len);
    }
  })

}]);