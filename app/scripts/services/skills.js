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
                "body": "UI/UX, Websites, Web Apps, Web Services, RESTful APIs",
                "icon": "fa-code",
                "description": "With several years of experience, I have acquired a strong understanding of web development. I have designed, developed, and maintained various websites, web apps, and web based games throughout my life. My focus lies in designing responsive and easy to use interfaces that are supported by robust backend solutions. I have worked with several development stacks and have completed various university co-op work term placements that focused primarily on web development. With experience developing everything from static webpages to data-driven single page web applications and RESTful APIs, web development is my passion and always provides new learning experiences at home and in the work place."
            }, {
                "title": "Front-End Development",
                "body": "HTML, CSS, SASS, JavaScript, jQuery, AngularJS, ReactJS, VueJS",
                "icon": "fa-code",
                "description": "I strive to develop professional, responsive front-ends with special emphasis on UI/UX. My websites and web apps scale to work on various screen sizes on any device that has an internet browser. I have designed and built various websites and data-driven web applications throughout my career. My specialty lies in using JavaScript frameworks to effectively complement responsive HTML and CSS web user interfaces."
            }, {
                "title": "Back-End Development",
                "body": "Python, Java Spring Boot, Node.js, PHP, ASP.NET",
                "icon": "fa-terminal",
                "description": "I focus on developing robust and secure backend solutions to websites and applications. With years of experience working with server side technologies, I have developed a strong sense of best practises and design patterns corresponding to effective web backends. I have experience designing and developing secure RESTful API solutions for large scale web applications, and creating scalable automated platforms that can manage large quantities of data effectively and efficiently."
            }, {
                "title": "Databases",
                "body": "MySQL, Firebase, Mongo DB, ElasticSearch",
                "icon": "fa-database",
                "description": "With years experience developing backend solutions, I have obtained a firm understanding of both SQL and NoSQL databases and their corresponding CRUD (Create, Retrieve, Update, Delete) operations. I have worked with both structured and unstructured data and have experience designing databases for large scale applications. I have experience building MySQL store procedures and have a strong understanding of relational data. My experience with NoSQL databases extends from various university co-op work terms where I had to setup and design database solutions to support existing infrastructure."
            }, {
                "title": "Object-Oriented Programming",
                "body": "Java, C#, C++",
                "icon": "fa-laptop",
                "description": "My experience working with object-oriented programming (OOP) languages extends from academic courses. I have taken several engineering courses at the University of Waterloo that had a lab component focusing on OOP. I am knowledgeable about various OOP design concepts and strategies, including Objects, Classes, Polymorphism, Inheritance, Abstraction, Encapsulation, and many more."
            }, {
                "title": "Quality Assurance",
                "body": "Karma, Jasmine, jUnit",
                "icon": "fa-bug",
                "description":"Quality Assurance (QA) is a vital part to any application. I have had first hand experience working with a QA department to help improve existing testing structures and efficiency using automation. I have experience building an automated QA pipeline that streamlines end to end testing using Karma, Jasmine, and jUnit. Quality Assurance is definitely a skill I am constantly improving as I continue to work on projects that are starting to focus more on Test Drive Development."
            }, {
                "title": "DevOps",
                "body": "Jenkins, GitOps, Docker, StackStorm",
                "icon": "fa-cogs",
                "description": "Engineering effeciency is a topic I am very passionate about. Being able to enable a fully automated continuous integration pipeline is vital to the success and scalability of any product (both in terms of feature delivery and incident response). I have experience working with various automation pipelines to enable effective software delivery to real production environments. My ideal pipelines automate everything from a code review to full scale rollout (and all the testing and phased delievery that goes in between). I work with DevOps technologies on a day to day basis and am constantly learning about the latest and greatest tools in the industry."
            }]
        };
    });
