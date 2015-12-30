import * as angular from 'angular';
import 'angular-material';

var app = angular.module('TheSlideGuy', ['ngMaterial']);

app.config(['$mdThemingProvider', '$locationProvider',
  ($mdThemingProvider, $locationProvider: ng.ILocationProvider) => {
  $mdThemingProvider.theme('default').primaryPalette('light-blue').dark();

  $locationProvider.html5Mode(true);
}]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);

export default app;