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
            error: function(response) {
                $alert({
                    title: response.status + " " + response.statusText,
                    content: response.data.message,
                    type: 'danger',
                    show: true,
                    container: '#alert-container'
                });
            },
            success: function(response) {
                $alert({
                    title: response.status + " " + response.statusText,
                    content: response.data.message,
                    type: 'success',
                    show: true,
                    container: '#alert-container'
                });
            }
        };
    });