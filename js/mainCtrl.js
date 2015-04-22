var app = angular.module('directiveWorkshop', ['notifyDirective']);

app.controller('mainCtrl', function($scope, mainService){
  
  $scope.getData = function () {
    return mainService.getData($scope.query).then(function (data) {
       console.log('mainCtrl: data', data);
       return $scope.data = data;
    });
  };


});