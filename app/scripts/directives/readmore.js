'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:readMore
 * @description
 * # readMore
 */
angular.module('portfolioApp')
  .directive('readMore', function () {
    var controller = ['$scope', '$filter', function($scope, $filter) {
      // Default limit is 100
      $scope.validateLimit = function() {
        $scope.rmLimit = ($scope.rmLimit && $scope.rmLimit <= 0) ? 100 : $scope.rmLimit;
      };
      $scope.toggle = function() {
        $scope.validateLimit();
        $scope.displayMore = !$scope.displayMore;
        $scope.text.content = $filter('limitTo')($scope.rmText, ($scope.displayMore) ? $scope.rmText.length : $scope.rmLimit);
        $scope.text.link = ($scope.displayMore) ? $scope.text.less : $scope.text.more;
      };
      $scope.displayMore = true;
      $scope.text = {
        dots: '...',
        more: $scope.rmMoreText || 'Read More',
        less: $scope.rmLessText || 'Read Less'
      };
      $scope.styles = {
        dots: $scope.rmDotsClass,
        link: $scope.rmLinkClass
      };
      $scope.toggle();
    }];

    return {
      restrict: 'AE',
      scope: {
          rmText: '@',
          rmLimit: '@',
          rmMoreText: '@',
          rmLessText: '@',
          rmDotsClass: '@',
          rmLinkClass: '@'
      },
      templateUrl: 'views/tpl-readmore.html',
      controller: controller
    };
  });
