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
                "body": "Responsive Websites, UI/UX, Data-Driven Web Apps, Dashboards, Consoles, Admins tools, RESTful APIs, LAMP, MEAN, Productivity Automation",
                "icon": "fa-code",
                "description": "With several years of experience, I have acquired a strong understanding of web development. I have designed, developed, and maintained various websites, web apps, and web based games throughout my life. My focus lies in designing responsive and easy to use interfaces that are supported by robust backend solutions. I have worked with several development stacks and have completed various university co-op work term placements that focused primarily on web development. With experience developing everything from static webpages to data-driven single page web applications and RESTful APIs, web development is my passion and always provides new learning experiences at home and in the work place."
            }, {
                "title": "Front-End Development",
                "body": "HTML, CSS, SASS, JavaScript, jQuery, AngularJS, ReactJS, Bootstrap, Semantics UI, Yeoman, GruntJS, Bower",
                "icon": "fa-code",
                "description": "I strive to develop professional, response front-ends with special emphasis on UI/UX. My websites and web apps scale to work on various screen sizes on any device that has an internet browser. I have designed and built various websites and have had various university work terms developing data-driven web applications. My specialty lies in using JavaScript frameworks to effectively complement responsive HTML and CSS web user interfaces. Browse some of my projects below to view some of the web applications I tinkered together on my spare time."
            }, {
                "title": "Back-End Development",
                "body": "Node.js, PHP, JSP, Python, Wordpress, StackStorm, REST, JSON, XML",
                "icon": "fa-terminal",
                "description": "I focus on developing robust and secure backend solutions to websites and applications. With years of experience working with server side technologies, I have developed a strong sense of best practises and design patterns corresponding to effective web backends. I have experience designing and developing secure RESTful API solutions for large scale web applications, and creating scalable automated platforms that can manage large quantities of data effectively and efficiently."
            }, {
                "title": "Databases",
                "body": "MySQL, MariaDB, MongoDB, ElasticSearch",
                "icon": "fa-database",
                "description": "With years of developing RESTful API solutions I have obtained a firm understanding of both SQL and NoSQL databases and CRUD (Create Read Update Delete) operations. I have worked with both structured and unstructured data and have had exposure to store procedures during my university co-op work terms. Specifically I have used MySQL and Maria DB for applications that require tabular relations and stronger security, and MongoDB and ElasticSearch for data-driven applications that have more of a focus on Big Data."
            }, {
                "title": "Object-Oriented Programming",
                "body": "Java, C++, C#",
                "icon": "fa-laptop",
                "description": "Object-Oriented Programming is the heart and soul of all programs. Most of my experience working with high-level programming languages have been during academic courses. I have taken several engineering courses at the University of Waterloo that focus on such development: Fundamentals of Programming, Embedded Systems, Algorithms and Data Structures, Operating Systems, Embedded Microprocessor Systems, and Compilers. During the lab components of these courses I have built an Android application, kernel, compiler, implemented several algorithms, and programmed an FPGA Altera circuit board to become a physical audio player."
            }, {
                "title": "Quality Assurance",
                "body": "Karma, Jasmine, Selenium, jUnit, qUnit",
                "icon": "fa-bug",
                "description":"Quality Assurance is a vital part to any application. I have had first hand experience working with a QA department to help improve existing testing structures and efficiency using automation. I have experience building an automated QA pipeline that streamlines end to end testing using Karma, Jasmine, jUnit, and Selenium. Quality Assurance is definitely a skill I am constantly improving as I continue to work on projects that are starting to focus more on Test Drive Development."
            }, {
                "title": "Game Development",
                "body": "Action Script 3.0, JavaScript, jQuery, SASS",
                "icon": "fa-gamepad",
                "description": "During a high school computer science course I had the opportunity to create several Flash based games using Action Script 3.0. The games consisted of primarily basic animations supported by standard algorithmic techniques to create challenging and amusing games. See some of my projects below to play some of these high school flash based games. In addition to this experience, one of my university work terms was as a Software Developer on the Lesson Activity Builder team at SMART Technologies. During this employment I worked with modern web technologies to create interactive educational games for SMART Boards that emphasize learning while encouraging class participation. The games consisted of interactive touch and drag, physics simulation, and many fun animations supported by complex and robust code that remains adaptable to various theme customizations and updates. Game development is a very time consuming yet addicting industry and I hope to gain more experience in this area in the near future."
            }, {
                "title": "Low-Level Programming",
                "body": "ARM Assembly Language",
                "icon": "fa-keyboard-o",
                "description": "My low-level programming experience so far is limited to a single lab component of a Digital Computers course at the University of Waterloo. During this lab component we used Assembly ARM to gain experience with register and memory management, I/O interfacing, and interrupts. I hope to gain more experience in this area by tinkering with Arduinos and Raspberry Pis."
            }, {
                "title": "Mobile Development",
                "body": "Android, iOS - Objective C",
                "icon": "fa-tablet",
                "description": "I have dabbled slightly in the world of mobile development. During one of my university co-op terms I redesigned an iOS application in Objective C that leveraged an entire game engine. The app redesign focused on a new sign-in workflow that decreases the length of time required for students to join an activity from their mobile devices. I also have experience working with Android development using Java. My Android experience is limited to a single lab component of an Embedded Systems course at the University of Waterloo. During this lab component we built an Android Pedometer that counts the users steps as they navigate through a given SVG map. The app used clever path finding algorithms to determine a path from the start point to the destination defined by the user as the user walks within the map."
            }, {
                "title": "Digital Hardware",
                "body": "VHDL",
                "icon": "fa-usb",
                "description": "The only hardware descriptive language I have worked with during my studies is VHDL. Two of my engineering courses at the University of Waterloo focused on this topic. The first, Digital Circuits, was an introduction to logic gates, latches, flip flops, and state machines. During the lab component of this course we built various small VHDL programs that implemented basic systems (such as an elevator and traffic lights). The next, more advanced, engineering course was Digital Hardware Systems and it focused heavily on VHDL and hardware design. During this course I learnt about combinational versus registered circuitry, synthesis, Delta-Cycle and RTL simulation, data flow, and VHDL best practices. During the lab component of this course we designed and built a Kirsch Edge Detector system in VHDL that can process any image and output all the edges, and direction of the edges, of the image."
            }, {
                "title": "Animation",
                "body": "Adobe Flash, Action Script 2.0, Action Script 3.0",
                "icon": "fa-bullhorn",
                "description": "My knowledge of animation and Flash development is strongly based on my high school computer science courses. During these courses we worked with Adobe Flash Professional and Action Script to design and develop Flash animations and games. During this time I was also employed by an online media company SooToday.com as a Flash Developer. I worked in the advertising department using the Adobe Creative Suite 5.5 to design and develop animated internet advertisements for various local companies."
            }, {
                "title": "Graphic Design",
                "body": "Adobe Photoshop, Adobe Illustrator, Sketch, Vector Graphics, GIF",
                "icon": "fa-paint-brush",
                "description": "I have had years of experience working with image manipulation tools and vector graphics to design and develop websites and web applications as well as manipulate and enhance photos. During my final years of high school I worked for the online media company SooToday.com as a Flash Developer. During this employment I worked in the advertising department using the Adobe Creative Suite 5.5 to design and develop animated internet advertisements for various local companies. I worked extensively with Adobe Photoshop, Illustrator, and Flash Professional to design each advertisement from scratch to meet the customers needs."
            }]
        };
    });
