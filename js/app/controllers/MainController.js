function MainController($scope){
  $scope.name = 'Sarah Lynn';
  $scope.phrase = 'Suck a dick, dumbshits!';
}

angular
  .module('app')
  .controller('MainController', MainController);
