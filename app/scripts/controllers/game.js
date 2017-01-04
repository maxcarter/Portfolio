'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('GameCtrl', function($scope, $routeParams, $window, Games) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.flashGame = (Games[$routeParams.id]) ? Games[$routeParams.id] : {};
    if (!Games[$routeParams.id]) {
      $window.location.href = '404.html';
    }
  });
