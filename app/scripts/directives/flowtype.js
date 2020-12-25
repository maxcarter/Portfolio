'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:flowtype
 * @description
 * # flowtype
 */
angular.module('portfolioApp')
  .directive('flowtype', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        // This function is based on Flowtype.js
        var adjustSize = function(el, settings) {
           var $el = $(el),
              elw = $el.width(),
              width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
              fontBase = width / settings.fontRatio,
              fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
           $el.css('font-size', fontSize + 'px');
        };

          var opt = {};
          opt.maximum = attrs.maximum || 9999;
          opt.minimum = attrs.minimum || 1;
          opt.minFont = attrs.minFont || 1;
          opt.maxFont = attrs.maxFont || 9999;
          opt.fontRatio = attrs.fontRatio || 35;
          opt.lineRatio = attrs.lineRatio || 1.45;

          angular.element($window).on('resize', function(){
            adjustSize(element, opt);
          });
          adjustSize(element, opt);
      }
    };
  }]);
