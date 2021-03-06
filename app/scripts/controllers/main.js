'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
    .controller('MainCtrl', function($scope, $alert, Sidenav, Skills, Timeline, Projects, Request, Banner) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.sidenav = Sidenav;
        $scope.skills = Skills;
        $scope.timeline = Timeline;
        $scope.projects = Projects;
        $scope.formdata = {};
        $scope.done = false;
        $scope.animateElementIn = function($el) {
            $el.removeClass('invisible');
            $el.addClass('animated fadeIn');
        };

        $scope.animateElementOut = function($el) {
            $el.addClass('invisible');
            $el.removeClass('animated fadeIn');
        };
        $scope.submit = function(data) {
            $scope.loading = true;
            Request.post('/api/v1/email', data, {}, {
                'Content-Type': 'application/json'
            }).then(
                function success(response) {
                    $scope.loading = false;
                    $scope.formdata = {};
                    Banner.alert(response, 'success');
                },
                function error(response) {
                    $scope.loading = false;
                    Banner.alert(response, 'danger');
                });
        };
    });
