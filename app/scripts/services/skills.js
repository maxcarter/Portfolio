'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.Skills
 * @description
 * # Skills
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
    .factory('Skills', function() {
        return {
            active: 0,
            panels: [{
                "title": "Web Development",
                "body": "Responsive Websites, Data-Driven Web-Apps, Dashboards, Consoles, Admins tools, RESTful APIs, LAMP, MEAN, Productivity Automation"
            }, {
                "title": "Front-End Development",
                "body": "HTML, CSS, JavaScript, jQuery, AngularJS, BootStrap, Yeoman, GruntJS, Bower"
            }, {
                "title": "Back-End Development",
                "body": "Node.js, PHP, JSP, Python, Wordpress, StackStorm, REST, JSON, XML"
            }, {
                "title": "Databases",
                "body": "MySQL, MongoDB, ElasticSearch"
            }, {
                "title": "Object-Oriented Programming",
                "body": "Java, C, C++, C#"
            }, {
                "title": "Quality Assurance",
                "body": "Karma, Jasmine, Selenium"
            }, {
                "title": "Low-Level Programming",
                "body": "ARM Assembly Language"
            }, {
                "title": "Mobile Development",
                "body": "Android"
            }, {
                "title": "Hardware",
                "body": "VHDL"
            }, {
                "title": "Animation",
                "body": "Adobe Flash, Action Script 2.0, Action Script 3.0"
            }, {
                "title": "Graphic Design",
                "body": "Adobe Photoshop, Adobe Illustrator, Vector Graphics, GIF"
            }]
        };
    });