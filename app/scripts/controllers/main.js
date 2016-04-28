'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
    .controller('MainCtrl', function($scope, Sidenav, Skills, Timeline, Projects) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.sidenav = Sidenav;
        $scope.skills = Skills;
        $scope.timeline = Timeline;
        $scope.projects = Projects;
        $scope.animateElementIn = function($el) {
            $el.removeClass('invisible');
            $el.addClass('animated fadeIn');
        };

        $scope.animateElementOut = function($el) {
            $el.addClass('invisible');
            $el.removeClass('animated fadeIn');
        };
        
    });