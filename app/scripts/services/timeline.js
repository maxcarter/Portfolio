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
            more: true,
            showMoreEvents: function() {
                this.more = false;
                angular.forEach(this.events, function(e) {
                  e.extra = false;
                });
            },
            events: [{
                extra: false,
                badgeClass: 'badge-green',
                badgeIconClass: 'fa-code',
                title: 'Systems Software Engineer',
                small: 'NVIDIA',
                content: 'NVIDIA GPU Network (NGN) Infrastructure Performance & Storage Engineering (IPSE) team. <br /><br />Service owner of a storage web service in the NVIDIA GeForce Now (GFN) cloud gaming service. The service plays an important role in enabling game platform streaming.<br /><br />Build software solutions in Python, C#, Java, and various other programming languages.',
                image: 'nvidia.png',
                date: 'June 2018 - Present',
                location: 'Santa Clara CA, USA',
                site: 'http://www.nvidia.com/'
            }, {
                extra: false,
                badgeClass: 'badge-green',
                badgeIconClass: 'fa-code',
                title: 'Software Engineering Intern',
                small: 'NVIDIA',
                content: 'Built an automation system in Python for deploying Ceph virtual storage clusters in the NVIDIA GPU Network. The system provided a serviceable way to quickly create filesystem storage for hosting deep learning datasets for the NVIDIA GPU Cloud (NGC).<br /><br />Worked with Kibana to visualize various key performance indicators for an NVIDIA GPU Network storage service. The dashboard provided improved metric visualization and introduced automated alerts for unexpected service behaviour.',
                image: 'nvidia.png',
                date: 'Sept. 2017 - Dec. 2017',
                location: 'Santa Clara CA, USA',
                site: 'http://www.nvidia.com/'
            }, {
                extra: false,
                badgeClass: 'badge-green',
                badgeIconClass: 'fa-code',
                title: 'Software Engineering Intern',
                small: 'NVIDIA',
                content: 'Developed a web service in ASP.NET that provided storage on demand. The service played an important role in enabling gaming platform streaming on the NVIDIA GeForce Now cloud gaming system. <br /><br />Built Kerberos as a Service using Pythonic RESTful API development. The service enabled Kerberos authentication cryptography in NVIDIA GPU Network storage systems.<br /><br/>Designed and developed a self-service web portal using Vue.js and Node.js. The portal improved the NVIDIA DGX-1 Saturn V user on-boarding experience.',
                image: 'nvidia.png',
                date: 'Jan. 2017 - April 2017',
                location: 'Santa Clara CA, USA',
                site: 'http://www.nvidia.com/'
            },{
                extra: false,
                badgeClass: 'badge-purple',
                badgeIconClass: 'fa-code',
                title: 'Software Developer',
                small: 'SMART Technologies',
                content: 'Designed and developed an interactive web based educational game for SMART Boards that placed first in the company wide intern project competition and will be included as part of the next SMART Lesson Activity Builder release. The game was an interactive quiz game based on teacher defined content that emphasized learning while encouraging class participation and student engagement.<br /><br/>Developed various features and stability improvements to the SMART Lesson Activity Builder game engine.<br /><br/>Redesigned the SMART Lesson Activity Builder iOS native application for a new sign-in workflow that decreases the length of time required for students to join an activity from their native devices.<br/><br/>Built a student progress tracker in ReactJS and Node.js during the SMART Exemplary Educators Summit Hackathon',
                image: 'smart.png',
                date: 'May 2016 - August 2016',
                location: 'Calgary AB, Canada',
                site: 'https://home.smarttech.com/'
            },{
                extra: false,
                badgeClass: 'badge-black',
                badgeIconClass: 'fa-code',
                title: 'Software Development Student',
                small: 'Blackberry',
                content: 'Developed a consolidated messaging web application in AngularJS. The application reduced cycles and normalized communication in the BlackBerry Network Operations Center.<br /><br />Created a scalable Model-View-Controller architecture for a PHP RESTful API. The architecture simplified various DevOps tool integrations for services across the BlackBerry Network Operations Center.<br /><br />Developed an extension to an existing service alert visualization web application in AngularJS with ElasticSearch integrations. The extension allowed users to create, read, update, and delete actions that could be associated to service alerts and define resolutions.',
                image: 'blackberry.png',
                date: 'Sept. 2015 - Dec. 2015',
                location: 'Waterloo ON, Canada',
                site: 'http://ca.blackberry.com/'
            }, {
                extra: false,
                badgeClass: 'badge-black',
                badgeIconClass: 'fa-code',
                title: 'Systems Software Development Student',
                small: 'Blackberry',
                content: 'Created a data orchestration system in Python using automated StackStorm workflows with various DevOps micro-services integrations. The system centralized service alert data and improved incident visibility and response time.<br /><br />Built an administration tool web application in AngularJS supported by a PHP RESTful API. The tool improved management of the BlackBerry Network Operations Centre’s service monitoring wall.<br /><br />Integrated JavaScript task management and automation into web applications using GruntJS. The integration helped improve productivity by automating code validation, end-to-end testing, and automatic deployment.',
                image: 'blackberry.png',
                date: 'Jan. 2015 - April 2015 ',
                location: 'Waterloo ON, Canada',
                site: 'http://ca.blackberry.com/'
            }, {
                extra: false,
                badgeClass: 'badge-orange',
                badgeIconClass: 'fa-code',
                title: 'Front-End Developer',
                small: '2020 Technologies',
                content: "Built a dashboard web application using the JavaScript MEAN development stack. The dashboard improved the testing visibility for many aspects of industry leading interior design software.",
                image: '2020.png',
                date: 'May 2014 - July 2014',
                location: 'Montreal QC, Canada',
                site: 'https://www.2020spaces.com/'
            }, {
                extra: false,
                badgeClass: 'badge-eng-purple',
                badgeIconClass: 'fa-graduation-cap',
                title: 'Computer Engineering',
                small: 'University of Waterloo',
                content: 'Bachelor of Applied Science (BASc) in Computer Engineering at the University of Waterloo. Computer Engineering combines the all the strengths of Electrical Engineering with those of Computer Science. The courses focus on everything from electrical systems and chip design through to software development, networks, and communications.',
                image: 'uofw.png',
                date: 'Sept. 2013 - April 2018',
                location: 'Waterloo ON, Canada',
                site: 'https://uwaterloo.ca/'
            }, {
                extra: true,
                badgeClass: 'badge-blue',
                badgeIconClass: 'fa-graduation-cap',
                title: 'High School Diploma',
                small: 'Superior Heights C&VS',
                content: 'I graduated from the French Immersion program at Superior Heights C&VS in Sault Ste. Marie Ontario. I was on the Ontario Scholar Honour Role each year with a cumulative average above 90%. I was awarded a Certificate of Excellence in Computer Science for achieving the highest mark in 12th grade University Computer Science (ICS4U) as well as the Computer & Business Award for achieving the top mark in business and computer science throughout all four years of high school.  ',
                image: 'superiorheights.gif',
                date: 'June 2013',
                location: 'Sault Ste. Marie ON, Canada',
                site: 'http://www.superiorheights.com/'
            }, {
                extra: true,
                badgeClass: 'badge-other-blue',
                badgeIconClass: 'fa-paint-brush',
                title: 'Flash Developer',
                small: 'SooToday.com',
                content: "SooToday.com is the leading online news company in Sault Ste. Marie, Ontario with over 60,000 average daily visits. During this employment I worked in the advertising department using the Adobe Creative Suite 5 to design and develop animated internet advertisements for various local companies.",
                image: 'sootoday.svg',
                date: 'June 2012 - Sept. 2013',
                location: 'Sault Ste. Marie ON, Canada',
                site: 'https://www.sootoday.com/'
            }, {
                extra: true,
                badgeClass: 'badge-red',
                badgeIconClass: 'fa-video-camera',
                title: 'Camera Operator',
                small: 'Soo Greyhounds',
                content: "The Soo Greyhounds are Sault Ste. Marie's local OHL hockey team. During this employment I worked on the media team as a camera operator. I filmed various hockey games live at Sault Ste. Marie’s Essar Center. The film for each game was streamed live on the Jumbotron and on SooGreyhounds.com. Parts were also often re-mastered for highlight reels and intro videos.",
                image: 'soogreyhounds.png',
                date: 'Oct. 2012 - April 2013',
                location: 'Sault Ste. Marie ON, Canada',
                site: 'http://www.soogreyhounds.com/'
            }, {
                extra: true,
                badgeClass: 'badge-black',
                badgeIconClass: 'fa-gavel',
                title: 'Court Runner',
                small: 'Willson, Carter',
                content: "Willson, Carter Barristers & Solicitors is a long established litigation law firm in Sault Ste. Marie, Ontario with special emphasis on criminal and family matters. During this employment I worked as a court runner. I delivered, filed, certified, and issued court documents. Also delivered mail, opened and closed files, did banking and other errands. In addition I created their website and provided technical support.",
                image: 'willsoncarter.png',
                date: 'Sept. 2009 - Aug. 2013',
                location: 'Sault Ste. Marie ON, Canada',
                site: 'http://murdochcarter.com/'
            }]
        };
    });
