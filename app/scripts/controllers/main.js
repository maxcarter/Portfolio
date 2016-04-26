'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
    .controller('MainCtrl', function($scope, Sidenav, Skills) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.sidenav = Sidenav;
        $scope.skills = Skills;
        $scope.events = [{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            title: 'First heading',
            content: 'Some awesome content.'
        }, {
            badgeClass: 'warning',
            badgeIconClass: 'glyphicon-credit-card',
            title: 'Second heading',
            content: 'More awesome content.'
        }];
    });