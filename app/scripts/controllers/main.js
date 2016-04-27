'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
    .controller('MainCtrl', function($scope, Sidenav, Skills, Timeline) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.sidenav = Sidenav;
        $scope.skills = Skills;
        $scope.timeline = Timeline;
    });