INSERT INTO Members (firstName, lastName, email, password) VALUES
("Fatima", "Ahmed", "a@a.com", "a"),
("Hermione", "Granger", "b@b.com", "b"),
("John", "Walks", "c@c.com", "c"),
("Jasmine", "McFee", "d@d.com", "d"),
("Happy", "Gilmore", "e@e.com", "e"),
("Paris", "Hilton", "f@f.com", "f"),
("Your", "Mom", "g@g.com", "g"),
("Chad", "Matthews", "h@h.com", "h"),
("Jenine", "Lalo", "i@i.com", "i"),
("Vin", "Simms", "j@j.com", "j"),
("Jane", "Smith", "k@k.com", "k");

INSERT INTO TOPICS (id, name, description) VALUES
(8000, "Classes and Tutorials", ""),
(12000, "Databases and Platforms", ""),
(16000, "Frameworks and Libraries", ""),
(18000, "Job Hunting and Career Resources", ""),
(20000, "NPM Packages", ""),
(24000, "Project Management and Communication", ""),
(50000, "Other/Misc", "");

INSERT INTO LINKS (id, topicId, isOnline, linkName, url, description) VALUES
(1,8000,TRUE,"CSS Flexbox, Grid, Sass Udemy Course",	"https://www.udemy.com/css-the-complete-guide-incl-flexbox-grid-sass/learn/v4/overview",	"Learn how to make your websites responsive, another necessity for modern day programming. Flexbox, Grid, and Sass are included in this course."),
(2,8000,TRUE,"Derek Banas",	"https://www.youtube.com/user/derekbanas",	"His tutorials reach sometimes beyond the web, but he's known for cramming A LOT in one video. If you want someone to walk you through the syntax and fast, look here."),
(3,8000,TRUE,"Google Codelabs",	"https://codelabs.developers.google.com/",	"Provides guided tutroials with a hands-on coding approach. The best was to learn code is through practice. You'll find plenty of exercises here."),
(4,8000,TRUE,"HTML5/CSS3 Udemy Course",	"https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/overview",	"Build a responsive website with HTML5 and CSS3. Learn the basic tools here."),
(5,8000,TRUE,"JavaScript Udemy Course",	"https://www.udemy.com/the-complete-javascript-course/learn/v4/overview",	"JavaScript is a necessity in modern day web development. It is utilized in many front-end and back-end scenarios. This will take you through many of the available tools in JavaScript."),
(6,8000,TRUE,"Learn to Code HTML & CSS","https://learn.shayhowe.com/",	"If you're asking yourself 'Do I want to learn web development?'' then this is a great place to start. You'll get a head-start on any program you decide to pursue and you'll be able to see if you're crazy enough to actually enjoy it."),
(7,8000,TRUE,"Node.js Udemy Course",	"https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/overview",	"Learn the fundamentals of Node, or reinforce your syntax vocabulary with this course."),
(8,8000,TRUE,"React Udemy Course",	"https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview",	"Learn React from scratch or supplement your learning. React is important in modern web development. Make sure you really get it."),
(9,8000,TRUE,"SQL Tutorial",	"http://sqlzoo.net/wiki/SQL_Tutorial",	"Learn SQL using: SQL Server, Oracle, MySQL, DB2, and PostgreSQL."),
(10,8000,TRUE,"The Coding Intervew Udemy Course",	"https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/learn/v4/overview",	"The coding interview is an intimidating experience for first timers. This course has a whole slew of exercises to help you get ready."),
(11,8000,TRUE,"The Complete Web Developer in 2018 Udemy Course",	"https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/overview",	"Includes HTML5, CSS, Javascript, React, Node.js, Machine Learning, APIs, SQL, and more."),
(12,8000,TRUE,"The Net Ninja",	"https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",	"A wide collection of web development tutorials."),

(13,12000,TRUE,"Firebase",	"https://firebase.google.com/",	"A mobile and web application development platform."),
(63,12000,TRUE,"GitHub","	https://github.com/	","	A web-based hosting service that is widely used by web developers for version control and collaboration.	"),
(14,12000,TRUE,"Heroku",	"https://www.heroku.com",	"Heroku is a cloud platform that lets companies build, run, and operate applications directly in the cloud. If you need to deploy a project with back-end code, you can do it here."),
(15,12000,TRUE,"MongoDB",	"https://www.mongodb.com",	"MongoDB is an open source, NoSQL, document oriented database that uses a document-oriented data model. Uses BSON (Binary JSON) , a JSON like documents and schemas."),
(16,12000,TRUE,"MySql",	"https://www.mysql.com/",	"A popular and highly-utilized open source SQL databse "),
(17,12000,TRUE,"Oracle",	"http://www.oracle.com/technetwork/tutorials/index.html",	"Popular enterprise Relational Database Management System" ),
(64,12000,TRUE,"PostMan","https://www.getpostman.com/","A complete API development environment."),

(18,16000,TRUE,"AngularJS",	"https://angularjs.org/",	"A structural framework for dynamic web apps that lets you use HTML as your template language and extend HTML syntax to create your application's components."),
(19,16000,TRUE,"Bootstrap",	"http://getbootstrap.com/",	"An open-source front-end library for designing websites and web applications."),
(20,16000,TRUE,"Chart.js",	"https://github.com/chartjs/Chart.js",	"A JavaScript library that allows you to create different types of charts with the HTML5 <canvas> element."),
(21,16000,TRUE,"Express.js",	"https://expressjs.com/",	"A Node.js framework that makes your web applications routing and templating simpler."),
(22,16000,TRUE,"Freestyler.js",	"https://www.npmjs.com/package/freestyler",	"A 5th generation React CSS in JS library." ),
(23,16000,TRUE,"Handlebars",	"http://handlebarsjs.com/","A popular templating engine that lets you build semantic templates effectively."),
(24,16000,TRUE,"jQuery",	"https://jquery.com/",	"A JavaScript library which makes things like event handling, animations, AJAX, and DOM manipulation simpler to write. Write less, do more."),
(25,16000,TRUE,"Materialize",	"http://materializecss.com/",	"A responsive front-end framework for modern web design."),
(26,16000,TRUE,"Moment.js",	"https://momentjs.com/",	"An open source JavaScript library which simplifies handling the date or time much like jQuery does with JavaScript." ),
(27,16000,TRUE,"Mozilla Developer Network (MDN) Web Docs",	"https://developer.mozilla.org/", ""),
(28,16000,TRUE,"Node.js",	"https://nodejs.org/api/", ""),
(29,16000,TRUE,"Node Package Manager (NPM)",	"https://www.npmjs.com/",	"A package manager for Node.js packages, or modules. Hosts thousands of free packages to download and use."),
(30,16000,TRUE,"React",	"https://reactjs.org/",	"A JavaScript library for building user interfaces. It is designed so that you can write easily reusable and manageable code, which is helpful when creating large applications."),
(31,16000,TRUE,"Reshader",	"https://www.reshader.com/", "A customizable JavaScript library to manage consitent color gradients in your css-in-js code. jQuery plugins available"),


(32,18000,TRUE,"Angel List","https://angel.co/","A startup job boards."),
(33,18000,TRUE,"FlexJobs","https://www.flexjobs.com/","Remote and flexible jobs."),
(34,18000,TRUE,"Guide to Public Speaking","http://www.jobinterviewtools.com/guideto-public-speaking.htm","Public speaking doesn't always mean you have a crowd. You can feel equally intimidated in a small room talking to one person. Help prepare yourself. "),
(35,18000,TRUE,"HireArt","https://www.hireart.com/","A startup focused staffing site. Search jobs, provide videos and work samples, personalized assessments, and updates during the hiring process."),
(36,18000,TRUE,"How to Ace Your Next Technical Interview","https://www.hiretechladies.com/tech-ladies-blog/2017/6/6/how-to-ace-your-next-technical-interview-with-katie-thomas-self-taught-software-engineer-at-google","An interview with Katie Thomas, a self-taught software engineer with Google."),
(37,18000,TRUE,"Interview Cake","https://www.interviewcake.com/",""),
(38,18000,TRUE,"JavaScript Interview Questions","https://www.interviewcake.com/javascript-interview-questions","Build a binary tree, compute nth fibonacci number, find duplicate files, reverse words, and more. Lots of lots of examples."),
(39,18000,TRUE,"Smashing Jobs","http://jobs.smashingmagazine.com/freelance","A freelance designer and developer job board."),
(40,18000,TRUE,"Tech Ladies","https://www.hiretechladies.com/",""),
(41,18000,TRUE,"TechMeAbroad","https://techmeabroad.com/","Job posts from tech startups and companies who will recruit from abroad."),
(42,18000,TRUE,"The Muse","https://www.themuse.com/","Browse jobs, find career advice, and career coaching services."),
(43,18000,TRUE,"TripleByte","https://triplebyte.com/","A company that offers a new way to apply and hire. They claim to help you skip the 'resume screen.'"),
(44,18000,TRUE,"UpWork","https://www.upwork.com/i/job-categories/","Freelance opportunities."),
(45,18000,TRUE,"Web Dev Interview Questions and Answers","http://faculty.washington.edu/blabob/bob/Docs/Web%20Developer%20Interview%20Questions%20And%20Answers.pdf","The more you prepare for an interview, the more confidence you will feel and portray. Prep in any way you can."),
(46,18000,TRUE,"Women in Tech","https://www.hiretechladies.com","A job board and community for women in tech."),
(47,18000,TRUE,"Working Nomads","https://www.workingnomads.co/jobs","Remote, digital work."),

(48,20000,TRUE,"async","https://www.npmjs.com/package/async","A utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript."),
(49,20000,TRUE,"handlebars-dateformat","https://www.npmjs.com/package/handlebars-dateformat","A date format helper for use with handlebars. "),
(50,20000,TRUE,"mongojs","https://www.npmjs.com/package/mongojs","A node.js module for mongodb, that emulates the official mongodb API as much as possible."),
(51,20000,TRUE,"cheerio","https://www.npmjs.com/package/cheerio","Flexible & lean implementation of core jQuery designed specifically for the server."),
(52,20000,TRUE,"express-generator","https://www.npmjs.com/package/express-generator","An application generator for express."),
(53,20000,TRUE,"browserify","https://www.npmjs.com/package/browserify","Use a node-style require() to organize your browser code and load modules installed by npm. browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag. "),
(54,20000,TRUE,"nodemon","https://www.npmjs.com/package/nodemon","nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application."),
(55,20000,TRUE,"console.table","https://www.npmjs.com/package/console.table","Can use the console.table method to pass multiple strings and arrays in a single call. Each argument will be formatted and printed separately on new line."),
(56,20000,TRUE,"express-generator","https://www.npmjs.com/package/express-generator","A node package which creates an MVC for your web application with some standard files in place."),
(57,20000,TRUE,"sequelize","https://www.npmjs.com/package/sequelize","A promise-based ORM for Node.js which makes interacting with the database easier. Supports PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL."),
(58,20000,TRUE,"mongoose","http://mongoosejs.com/","An ODM (object data modeling) library which provides a straight-forward, schema-based solution to model your application data."),

(59,24000,TRUE,"GitHub",	"https://github.com/",	"A web-based hosting service that is widely used by web developers for version control and collaboration."),
(60,24000,TRUE,"Monday.com",	"https://monday.com/",	"Monday.com is a visual project management tool, previously daPulse. All information is synched into a single, accessible hub to improve communication and collaboration amonst teams."),
(61,24000,TRUE,"Slack",	"https://slack.com/",	"Slack is a collaboration chat tool used both in and out of organizations to help teams communicate and coordinate."),
(62,24000,TRUE,"Trello",	"https://trello.com/",	"Trello is a project management tool that organizes your projects into boards. You can keep your boards private or collaborate with others. Your boards and cards are customizable, and you can assign tasks to specific members."),

(65,50000,TRUE,"Awesome Podcasts","https://github.com/rShetty/awesome-podcasts","A popular list of podcasts for engineers and programmers."),
(66,50000,TRUE,"Imgur","https://imgur.com/","An online image sharing community. When posting on discussion boards for help, sometimes you need a quick way to add a photo other can view via link. "),
(67,50000,TRUE,"Lorem Ipsum","https://loremipsum.io/","Dummy text of the printing and typesetting industry."),
(68,50000,TRUE,"Random User Generator","https://randomuser.me/","A free, open-source API for generating random user data. Like Lorem Ipsum, but for people."),
(69,50000,TRUE,"Stack Overflow","https://stackoverflow.com","A large online community for developers to learn, share​ ​their programming ​knowledge, and build their careers. If you are looking to add to your portfolio, be active on Stack Overflow.");




INSERT INTO Tracks (id, trackname, achievementLink, description, introVideoLink) VALUES
(1, "HTML/CSS", "./1.png", "HTML stands for Hypertext Markup Language. But that’s not why you’re here. You can find a standard definition anywhere. You’re here for the short and simple answer.
With HTML, you designate what is displayed on a screen. You create your layout, insert your content, create forms, insert images, etc.
There are a lot of handy tools for organizing websites, a lot more than available than even ten years ago. It can take a little while to learn them all, but once you dig in, it won’t be as daunting.
CSS stands for Cascading Stylesheets – it’s what you will use to style your sites. Now this doesn’t only give you tools to change the color of your font and your background image. You can add transitions to create animations and control your entire layout as well.
Keep clicking through. We’ll teach you more in a bit.", "https://www.youtube.com/watch?v=IsXEVQRaTX8"),

(2, "JavaScript And jQuery", "./2.png", "JavaScript is a programming language that makes interactivity in websites possible. One of the many things you can do with JavaScript is to add content ‘dynamically,’ which means a section may be revealed based off of another action, like clicking a button to expand a dropdown menu or pulling a set number of gifs into your website based off what the user searched.
jQuery is a JavaScript library which helps you get to the point a bit quicker. You definitely want to be able to work with JavaScript before you dive into jQuery. Like we indicated in the HTML and CSS track, skipping some steps can limit your knowledge on the tools available, but once you have a good grasp on JavaScript, you’ll love and appreciate jQuery. Their slogan is ‘Write less, do more.” This may not seem like a huge necessity now, but when you are working on real life web pages, and you’re staring down hundreds of pages of code and thousands upon thousands of lines, every shortcut you can take helps.
Keep clicking through. We’ll teach you more in a bit.", "https://www.youtube.com/watch?v=a6Oh2155QHw"),
(3, "MongoDB", "./3.png", "MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.", "https://www.youtube.com/watch?v=CvIr-2lMLsk"),
(4, "SQL", "./4.png", "SQL", "https://www.youtube.com/watch?v=FR4QIeZaPeM"),
(5, "Computer Science Fundamentals", "./5.png", "Computer Science Fundamentals", "https://www.youtube.com/watch?v=SzJ46YA_RaA");

INSERT INTO RelatedTracks (trackId, relatedTrackId) VALUES
(1,2), (2,1), (3,4), (4,3), (1,5);

INSERT INTO TrackSteps (trackId, stepNumber, link, description) VALUES
(1,1,"https://learn.shayhowe.com/html-css/", "Thorough. Not quick, but worth your time. This lesson will take you through all the basics on HTML and CSS. Take notes. You will have a great grasp on both languages when you’re done." ),
(1,2,"https://www.youtube.com/watch?v=UB1O30fR-EE","Free, HTML only, 1.1 hours" ),
(1,3,"https://learn.shayhowe.com/advanced-html-css/", "From the same resource as the first step, but it’s time to dig in deeper. Get your notepad back out. You’ll also get a small intro to JavaScript in jQuery in this lesson. Hang on tight." ),
(1,4,"https://www.youtube.com/watch?v=yfoY53QXEnI","Free, CSS only, 1.4 hours" ),
(1,5,"https://theblog.adobe.com/learn-to-code-series-html-basics-resources-and-activities/","You’ve been through a lot. This site has a variety of resources and links. Look through it, pick through it, add bookmarks to important sites, check out the tutorials linked – you’re gradually wading into the world of code. Don’t get overwhelmed. Take your time and keep plugging away." ),
(1,6,"https://www.youtube.com/watch?v=kDyJN7qQETA","Free, HTML5, 1.1 hours – Another video on HTML. Get your pause finger ready. Derek Banas talks fast, but he will take you through HTML like a great tour guide steering you down a gondola in Italy – or maybe more like you’re on a motorbike. Either way, this is a great resource. Pause when you need to and take notes. Don’t worry, we’ll provide plenty of practice links at the end of the track." ),
(1,7,"https://www.quora.com/What-are-the-bests-courses-to-learn-advanced-HTML-CSS","This isn’t an instructional link, but a community response to a question. A great way to learn code is from those who have been there. Read through the comments and find what resources help you. " ),
(1,8,"https://www.youtube.com/watch?v=CUxH_rWSI1k","Free, CSS3, 1 hour – Derek Banas is back, this time, with your all-encompassing guide to CSS3. " ),
(1, 100, "https://www.codecademy.com/en/tracks/projects", "A great place for practice. Practice is absolutely necessary if you want to learn code. We will repeat this, a lot. During practice, if you get stuck. Hop on Google. It’s what all the cool coders do. There’s a good chance you’ll end up on StackOverflow.com in your searched for a solution. Course, 77 lectures, 12 hours of video"),
(1,  100,"https://www.youtube.com/watch?v=yTHTo28hwTQ&list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F", "YouTube HTML and CSS tutorial. Playlist, 32 videos, average 10-15 minutes each"),
(1, 100, "https://www.youtube.com/watch?v=LqvFIuVlyP8&list=PL41lfR-6DnOruqMacTfff1zrEcqtmm7Fv", "Another HTML and CSS walkthrough with practice. Playlist, 52 videos, average under 10 minutes each"),
(1, 100, "https://www.youtube.com/watch?v=Wm6CUkswsNw", "Build a responsive website. Single video, 1.1 hours"),
(1, 100, "https://www.youtube.com/watch?v=gqOEoUR5RHg", "Derek Banas again, this time, he is here to show you how to use Bootstrap, a front-end framework for web-design. Single video, 1.1 hours"),
(1, 100, "https://www.youtube.com/watch?v=hnCmSXCZEpU", "Learn the latest version of Bootstrap, v4. This lesson is slightly advanced and has you work in the terminal. Give it a try. You can always come back to it after you finish your lesson on Node.js. Single video, 50 minutes"),
(1,  100,"https://100dayscss.com/", "There are a ton of code snippets on this site to show you what all is possible with some creative CSS implementation. Scroll through and examine the code, plug it into your site, experiment with it. If you click ‘edit,’ you will be taken to CodePen, where you can edit the code in the browser.");

INSERT INTO TrackSteps (trackId, stepNumber, link, description) VALUES
(2,1,"http://www.learn-js.org/", "A limited focus introduction to some of the tools available in JavaScript. Short lessons with an exercise for you at the end of each one. We highly recommend you go through the tutorials here."),
(2,2,"https://www.youtube.com/watch?v=zPHerhks2Vg", "Free, JavaScript only, 30 minutes"),
(2,3,"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types", "A thorough lesson to ALL things JavaScript. This is dry– don’t expect to be amused, but you might as well get used to reading documentation now. Reading and understanding documentation is an important skill in web development."),
(2,4,"https://www.youtube.com/watch?v=vEROU2XtPR8&t=1s", "Free, JavaScript only, 1.1 hours"),
(2,5,"https://www.codecademy.com/en/tracks/jquery", "An exercise-based course on jQuery for beginners."),
(2,6,"https://www.youtube.com/watch?v=1PKOdfj7P6Q", "Free, jQuery, .9 hours – Your first video on jQuery. This video is short and sweet. Don’t worry, we’ll throw plenty of practice at you later."),
(2,7,"https://www.youtube.com/watch?v=BWXggB-T1jQ", "Free, jQuery, 1.1 hours - We are giving you double videos for your fourth step of this track. We want to show you a quick run through of just what all is possible with jQuery, while also taking you through object-oriented programming with JavaScript in your second video. If you went through our HTML and CSS track, you met Derek Banas in a few videos. He’s back. Get your note taking hand ready."),
(2,8,"https://www.youtube.com/watch?v=O8wwnhdkPE4&t=354s", "Free, Object-Oriented JavaScript, 1 hour – Derek Banas is back, this time, with your all-encompassing guide to OO JavaScript. This is an important lesson to prepare you for some more complex coding down the line. Pay attention to this one. "),
(2, 100, "https://www.codecademy.com/en/tracks/javascript","An exercise-based course that will take you through functions, ‘for’ and ‘while’ loops, arrays and objects, and more."),
(2, 100, "https://www.youtube.com/watch?v=46Jz0QJyhN0&list=PLUoqTnNH-2Xwmr2GvOdZMJnrp6b51ndZE&index=1","YouTube jQuery tutorial.
Playlist, 12 videos, average 12 minutes each"),
(2,  100,"https://www.youtube.com/watch?v=BaIgTKj1iCQ&list=PL0eyrZgxdwhy7byLHsVkuhtRV_IpoJU7n","Another jQuery YouTube tutorial walkthrough.
Playlist, 12 videos, average under 10 minutes each"),
(2, 100, "https://www.udemy.com/the-complete-javascript-course/learn/v4/overview","How are you feeling with your JavaScript skills? If you feel like you missed some things, we recommend this course. It is a regularly updated, thorough JavaScript Udemy course.
Course, 151 lectures, 26 hours of video"),
(2, 100, "https://www.udemy.com/understand-javascript/learn/v4/content","Feeling pretty good with the JavaScript basics but want a deeper understanding? Check out this Udemy course.
Course, 85 lectures,11.5 hours of video"),
(2, 100, "https://www.udemy.com/projects-in-javascript-jquery/","A Udemy course that takes you through projects in JavaScript and jQuery. It’s time for some practice! Course, 50 lectures, 9 hours of video");

INSERT INTO TrackSteps (trackId, stepNumber, link, description) VALUES
(3,1,"https://www.mongodb.com/what-is-mongodb", "The best place to get started is the MongoDB official website!"),
(3,2,"https://www.youtube.com/watch?v=EE8ZTQxa0AM", "A quick introduction to MongoDB and its advantages."),
(3,3,"https://university.mongodb.com/courses/M001/about", "MongoDB University is the best place to learn Mongo. Get started with this introductory course."),
(3,4,"https://www.youtube.com/watch?v=pWbMrx5rVBE", "30 minute Mongo tutorial"),
(3,5,"https://www.tutorialspoint.com/mongodb/index.htm", "Dive deeper into MongoDB with this easy to follow guide"),
(3,6,"https://www.youtube.com/watch?v=CaKoJ9rFo8c&list=PL9ooVrP1hQOFGaB3V9mvxR-y5UHjsH3bK", "A good playlist for those looking into Mongo Certification. ~10hrs"),
(3,7,"https://www.mongodb.com/community-support-resources", "MongoDB Online Community and Support Resources"),
(3,8,"https://www.youtube.com/watch?v=Do_Hsb_Hs3c", "Feeling adventorous? Try this NodeJS and Mongo Tutorial, 22mins"),
(3,100,"https://www.tutorialspoint.com/mongodb/mongodb_questions_answers.htm", "Good source of common MongoDB questions");

INSERT INTO membertracks (memberId, trackId, completedSteps, markedComplete) VALUES
((Select id from members where email="a@a.com"), 1, "1,2", false),
((Select id from members where email="a@a.com"), 2, "", false),
((Select id from members where email="a@a.com"), 3, "", true);

INSERT INTO memberlinks (memberId, linkId) VALUES
((Select id from members where email="a@a.com"), 1),
((Select id from members where email="a@a.com"), 13),
((Select id from members where email="a@a.com"), 22),
((Select id from members where email="a@a.com"), 58),
((Select id from members where email="a@a.com"), 57);
