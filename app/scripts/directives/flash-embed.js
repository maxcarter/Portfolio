'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:flashEmbed
 * @description
 * # flashEmbed
 */
angular.module('portfolioApp')
  .directive('flashEmbed', function() {
    return {
      restrict: 'A',
      replace: true,
      template: ['',
        '<object data="{{src}}" type="application/x-shockwave-flash" id="myflash" width="{{width}}" height="{{height}}">',
        '<param name="movie" value="{{src}}" />',
        '<param name="bgcolor" value="{{background}}" />',
        '<param name="height" value="{{height}}" />',
        '<param name="width" value="{{width}}" />',
        '<param name="quality" value="high" />',
        '<param name="menu" value="false" />',
        '<param name="allowscriptaccess" value="samedomain" />',
        '<p> Adobe <a href = "http://get.adobe.com/flashplayer/"> Flash Player </a> is required to view this content.</p > ',
        '</object>'
      ].join(''),
      scope: {
        width: '@',
        height: '@',
        src: '@',
        background: '@'
      }
    };
  });
