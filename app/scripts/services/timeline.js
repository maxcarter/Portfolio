'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.Timeline
 * @description
 * # Timeline
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
    .factory('Timeline', function() {

        return {
            events: [{
                badgeClass: 'primary',
                badgeIconClass: 'fa-code',
                title: 'Software Developer',
                small: 'SMART Technologies',
                content: '',
                image: 'smart.png',
                date: 'May 2016 - August 2016'
            },{
                badgeClass: 'primary',
                badgeIconClass: 'fa-code',
                title: 'Systems Software Development Student',
                small: 'Blackberry',
                content: 'Developed a consolidated messaging single page web application for reducing cycles while normalizing communications for the BlackBerry Network Operations Centre (NOC). The tool was built using AngularJS while interfacing with a PHP REST API and structured to be scalable for use with any template messaging solution. <br /><br />Actively participated in the development of a PHP RESTful API solution to predefined endpoints. Helped define a scalable model-view-controller structure for ease of extensibility and security.<br><br> Contributed to the BlackBerry Service Assurance Solutions team by developing an extension to a landing page web application that visualizes service alert data. The app now allows users to associate alerts with actions that define how to resolve the alert. Additionally, the extension included the ability to search, browse, create, read, update, and delete, actions and alert links. The extension was developed using AngularJS with ElasticSearch database integration.',
                image: 'blackberry.png',
                date: 'Sept. 2015 - Dec. 2015'
            }, {
                badgeClass: 'primary',
                badgeIconClass: 'fa-code',
                title: 'Systems Software Development Student',
                small: 'Blackberry',
                content: 'Contributed to the BlackBerry Service Assurance Solutions team by participating in the creation of a unified event-driven automated platform for managing alert workflows using various DevOps micro-services and StackStorm integrations.<br><br>Developed an admin tool single page web application for managing the BlackBerry Networks Operation Centre’s (NOC) monitoring wall. The app was built using AngularJS supported by a PHP REST API.<br><br>Helped improve productivity by integrating JavaScript task management and automation into web applications using GruntJS. Code validation, end-to-end testing, and automatic deployment are just a few of the many tasks merged into automatic processes.',
                image: 'blackberry.png',
                date: 'Jan. 2015 - April 2015 '
            }, {
                badgeClass: 'primary',
                badgeIconClass: 'fa-code',
                title: 'Front-End Developer',
                small: '2020 Technologies',
                content: "Used JavaScript MEAN Full-Stack development to create a dashboard web application to be used for testing many aspects of 2020 Technologies' industry leading interior design software.<br><br>Worked in collaboration with the Quality Assurance department to help improve the existing testing structure and efficiency using automation.",
                image: '2020.png',
                date: 'May 2014 - July 2014'
            }, {
                badgeClass: 'success',
                badgeIconClass: 'fa-graduation-cap',
                title: 'Computer Engineering',
                small: 'University of Waterloo',
                content: 'I am currently pursuing a Bachelor of Applied Science (BASc) in Computer Engineering at the University of Waterloo. It is a five year co-op program consisting of alternating four month work and study terms. Computer Engineering combines the all the strengths of Electrical Engineering with those of Computer Science. Our courses focus on everything from electrical systems and chip design through to software development, networks, and communications.',
                image: 'uofw.png',
                date: 'Sept. 2013 - Present'
            }, {
                badgeClass: 'success',
                badgeIconClass: 'fa-graduation-cap',
                title: 'High School Diploma',
                small: 'Superior Heights C&VS',
                content: 'I graduated from the French Immersion program at Superior Heights C&VS in Sault Ste. Marie Ontario. I was on the Ontario Scholar Honour Role each year with a cumulative average above 90%. I was awarded a Certificate of Excellence in Computer Science for achieving the highest mark in 12th grade University Computer Science (ICS4U) as well as the Computer & Business Award for achieving the top mark in business and computer science throughout all four years of high school.  ',
                image: 'superiorheights.gif',
                date: 'June 2013'
            }, {
                badgeClass: 'primary',
                badgeIconClass: 'fa-paint-brush',
                title: 'Flash Developer',
                small: 'SooToday.com',
                content: "SooToday.com is the leading online news company in Sault Ste. Marie, Ontario with over 60,000 average daily visits. During this employment I worked in the advertising department using the Adobe Creative Suite 5 to design and develop animated internet advertisements for various local companies.",
                image: 'sootoday.svg',
                date: 'June 2012 - Sept. 2013'
            }, {
                badgeClass: 'primary',
                badgeIconClass: 'fa-video-camera',
                title: 'Camera Operator',
                small: 'Soo Greyhounds',
                content: "The Soo Greyhounds are Sault Ste. Marie's local OHL hockey team. During this employment I worked on the media team as a camera operator. I filmed various hockey games live at Sault Ste. Marie’s Essar Center. The film for each game was streamed live on the Jumbotron and on SooGreyhounds.com. Parts were also often re-mastered for highlight reels and intro videos.",
                image: 'soogreyhounds.png',
                date: 'Oct. 2012 - April 2013'
            }, {
                badgeClass: 'primary',
                badgeIconClass: 'fa-gavel',
                title: 'Court Runner',
                small: 'Willson, Carter',
                content: "Willson, Carter Barristers & Solicitors is a long established litigation law firm in Sault Ste. Marie, Ontario with special emphasis on criminal and family matters. During this employment I worked as a court runner. I delivered, filed, certified, and issued court documents. Also delivered mail, opened and closed files, did banking and other errands. In addition I created their website www.willsoncarter.com and provided technical support.",
                image: 'willsoncarter.png',
                date: 'Sept. 2009 - Aug. 2013'
            }]
        };
    });