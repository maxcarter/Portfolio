'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:flowtype
 * @description
 * # flowtype
 */
angular.module('portfolioApp')
  .directive('flowtype', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          var opt = {};
          opt.maximum = attrs.maximum || 9999;
          opt.minimum = attrs.minimum || 1;
          opt.minFont = attrs.minFont || 1;
          opt.maxFont = attrs.maxFont || 9999;
          opt.fontRatio = attrs.fontRatio || 35;
          opt.lineRatio = attrs.lineRatio || 1.45;
          element.flowtype(opt);
      }
    };
  });
