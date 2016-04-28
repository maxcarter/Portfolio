'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.Projects
 * @description
 * # Projects
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
    .factory('Projects', function() {
        return {
            projects: [{
                "name": "Twitter Vibes",
                "image": "twittervibes.svg",
                "modal": {
                    "title": "test",
                    "content": "test"
                }
            }, {
                "name": "REST UP",
                "image": "rest.svg",
                "modal": {
                    "title": "test",
                    "content": "test"
                }
            }, {
                "name": "NRAPI",
                "image": "nrapi.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }, {
                "name": "Sault Ste. Marie Lawyers",
                "image": "saultstemarielawyers.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }, {
                "name": "Code Bat",
                "image": "codebat.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }, {
                "name": "Lomas Carpentry",
                "image": "lomascarpentry.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }, {
                "name": "Are You Nuts?",
                "image": "nuts.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }, {
                "name": "Crokinole",
                "image": "crokinole.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }, {
                "name": "Vaporizer",
                "image": "vaporizer.svg",
                "modal": {
                    "title": "",
                    "content": ""
                }
            }]
        };
    });