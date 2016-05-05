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
            Request.post('server/form.php', $.param(data), {}, {
                'Content-Type': 'application/x-www-form-urlencoded'
            }).then(
                function success(response) {
                    $scope.formdata = {};
                    Banner.success(response);
                },
                Banner.error);
        };
        Pace.on("done", function() {
            $("body").removeClass('unscrollable');
            $("div.site").removeClass('invisible');
            $("div.site").addClass('animated fadeIn');
        }, []);
    });