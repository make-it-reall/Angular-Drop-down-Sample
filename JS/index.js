// require('./angular-route');
// module.exports = 'ngRoute';
var dropApp = angular.module('DropApp', []);
dropApp.controller('DropController', function ListController($scope) {
  $scope.items = [
  	"Test1", "Test2", "Test3"
  ];
	$scope.selected = "Tutorial";
	$scope.setTutorial = function(value) {
	  $scope.selected = value;
	}
});
