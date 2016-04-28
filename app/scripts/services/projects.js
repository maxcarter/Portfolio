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
                    "title": "Twitter Vibes",
                    "content": "Twitter Vibes is a MEAN web app that searches and analyzes recent tweets based on a provided query. The tweets are classified as either positive, negative, or neutral depending on the results of sentiment analysis.",
                    "icon": "twittervibes.svg",
                    "image": "twittervibes_screenshot.jpg",
                    "github": "https://github.com/maxcarter/TwitterVibes",
                    "demo": "http://twittervibes-mcarter.mybluemix.net"
                }
            }, {
                "name": "REST UP",
                "image": "rest.svg",
                "modal": {
                    "title": "REST UP",
                    "content": "A customizable Representational State Transfer (REST) Application Program Interface (API) and routing engine designed to provide a quick set of tools for developers to quickly build their own API.",
                    "icon": "rest.svg",
                    "image": "",
                    "github": "https://github.com/maxcarter/REST-UP",
                    "demo": ""
                }
            }, {
                "name": "NRAPI",
                "image": "nrapi.svg",
                "modal": {
                    "title": "NRAPI",
                    "content": "NRAPI (Node.js RESTful API) is a simple Node.js RESTful API solution created using the Node-Restful library with Mongo DB integrations.",
                    "icon": "nrapi.svg",
                    "image": "",
                    "github": "https://github.com/maxcarter/NRAPI",
                    "demo": ""
                }
            }, {
                "name": "Sault Ste. Marie Lawyers",
                "image": "saultstemarielawyers.svg",
                "modal": {
                    "title": "SaultSteMarieLawyers.com",
                    "content": "SaultSteMarieLawyers.com is a responsive website for the Law Office of Murdoch J. Carter in Sault Ste. Marie Ontario. Built in HTML, CSS, jQuery and PHP, The site features an adaptive design that adjusts to various screen sizes to work on any device.",
                    "icon": "saultstemarielawyers.svg",
                    "image": "saultstemarielawyers_screenshot.jpg",
                    "github": "",
                    "demo": "http://saultstemarielawyers.com/"
                }
            }, {
                "name": "Code Bat",
                "image": "codebat.svg",
                "modal": {
                    "title": "Code Bat",
                    "content": "Code Bat is a tutorial website that provides tips and tricks for various programming languages. The site was originally developed as a school project in high school but has become a place where I can experiment with new technologies. The website is still unfinished and is constantly subject to theme change as I experiment with different web designs. CodeBat was made using HTML, CSS, JavaScript, jQuery and PHP.",
                    "icon": "codebat.svg",
                    "image": "codebat_screenshot.jpg",
                    "github": "",
                    "demo": "http://code-bat.com/pages/index.php"
                }
            }, {
                "name": "Lomas Carpentry",
                "image": "lomascarpentry.svg",
                "modal": {
                    "title": "LomasCarpentry.com",
                    "content": "LomasCarpentry.com is a website designed and developed for Carpenter David Lomas in Sault Ste. Marie Ontario. The site was built as a Weebly Theme using HTML, CSS, and jQuery.",
                    "icon": "lomascarpentry.svg",
                    "image": "lomascarpentry_screenshot.jpg",
                    "github": "",
                    "demo": "http://www.lomascarpentry.com/"
                }
            }, {
                "name": "Are You Nuts?",
                "image": "nuts.svg",
                "modal": {
                    "title": "Are You Nuts?",
                    "content": "Are You Nuts? is a Flash tower defence game in which squirrels must defend their tree from owls and other birds. This game was created during Grade 12 Computer Science class ICS4U at Superior Heights C&VS in Sault Ste. Marie, Ontario. The game was created using Action Script 3.0 and Adobe Flash Professional.",
                    "icon": "nuts.svg",
                    "image": "are-you-nuts_screenshot.jpg",
                    "github": "https://github.com/maxcarter/Are-You-Nuts",
                    "demo": ""
                }
            }, {
                "name": "Crokinole",
                "image": "crokinole.svg",
                "modal": {
                    "title": "Crokinole: The Forgotten Game",
                    "content": "Crokinole: The Forgotten Game is a Flash remake of the classic tabletop game Crokinole. This game was created during Grade 12 Computer Science ICS4U at Superior Heights C&VS in Sault Ste. Marie, Ontario. The game was created using Action Script 3.0 and Adobe Flash Professional.",
                    "icon": "crokinole.svg",
                    "image": "",
                    "github": "https://github.com/maxcarter/Crokinole",
                    "demo": ""
                }
            }, {
                "name": "Vaporizer",
                "image": "vaporizer.svg",
                "modal": {
                    "title": "Vaporizer",
                    "content": "Vaporizer is a survival shooter game developed in Flash. The object of the game is to vaporize as many alien ships as possible before they vaporize you. This game was created during Grade 11 Computer Science class ICS3U at Superior Heights C&VS. The game was made using Action Script 2.0 and Adobe Flash Professional.",
                    "icon": "vaporizer.svg",
                    "image": "vaporizer.jpg",
                    "github": "https://github.com/maxcarter/Vaporizer",
                    "demo": ""
                }
            }]
        };
    });