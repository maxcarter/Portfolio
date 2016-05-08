'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.Banner
 * @description
 * # Banner
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
    .factory('Banner', function($alert) {

        return {
            alert: function(response, type) {
                $alert({
                    title: response.status + " " + response.statusText,
                    content: response.data.message,
                    type: type,
                    show: true,
                    container: '#alert-container'
                });
            }
        };
    });