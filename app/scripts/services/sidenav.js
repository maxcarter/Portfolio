'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.Sidenav
 * @description
 * # Sidenav
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
    .factory('Sidenav', function() {
        return {
            elements: [{
                name: "Welcome",
                target: "#welcome",
                subelements: []
            }, {
                name: "About",
                target: "#about",
                subelements: []
            }, {
                name: "Skills",
                target: "#skills",
                subelements: []
            }, {
                name: "Experience",
                target: "#exprience",
                subelements: []
            }, {
                name: "Projects",
                target: "#projects",
                subelements: []
            }, {
                name: "Contact",
                target: "#contact",
                subelements: []
            }]
        };
    });