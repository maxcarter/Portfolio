'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, Sidenav) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.sidenav = Sidenav;
    $scope.aside = {
  "title": "Title",
  "content": "Hello Aside<br />This is a multiline message!"
};
  });
