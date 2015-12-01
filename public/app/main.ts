import * as angular from 'angular';
import 'angular-material';

console.log('app started');

export var app = angular
  .module('TheSlideGuy', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);

import 'app/api';
