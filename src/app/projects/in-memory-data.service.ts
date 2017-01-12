import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects =
            [
                {
                    "id": "1",
                    "genre": "front end",
                    "title": "Tour of Projects",
                    "dates": "2016-2016",
                    "description": "Showcased my projects and web develop skills",
                    "tools": ["Angular2", "TypeScript", "Angular2 CLI", "Selenium", "WebDriverIO", "Node.js", 'JasmineJS'],
                    "image": "http://i.imgur.com/yyR3ZmX.png",
                    "url": "https://zhangtreefish.github.io/treefishportfolio",
                    "code": "https://github.com/zhangtreefish/treefishportfolio.git"
                },
                {
                    "id": "2",
                    "genre": "full stack",
                    "title": "Therapeutic Foods",
                    "dates": "2016-2016",
                    "description": "Developed a Flask web app, hosted it in Amazon Web Service using Apache HTTP Server and PostgreSQL on Ubuntu system",
                    "tools": ["Amazon Web Service", "Apache2", "PostgreSQL", "Ubuntu", "Linux", "Flask", "Jinja2", "Python", "json", "sqlalchemy", "oauth2", "imgur"],
                    "image": "http://i.imgur.com/dd4d0fr.png",
                    "url": "http://ec2-52-38-199-253.us-west-2.compute.amazonaws.com/",
                    "code": "https://github.com/zhangtreefish/Project-3-for-Full-Stack-Nanodegree-at-Udacity"
                },
                {
                    "id": "3",
                    "genre": "front end",
                    "title": "A Frogger Game",
                    "dates": "2015-2015",
                    "description": "Implemented a Frogger game with an immunology twist using Object-Oriented javaScript and HTML5 Canvas",
                    "tools": ["javascript", "object-oriented programming", "canvas", "requestAnimationFrame"],
                    "image": "http://i.imgur.com/TMw9w29.png",
                    "url": "https://zhangtreefish.github.io/Project-3-for-Front-End-Web-Developer-Nanodegree",
                    "code": "https://github.com/zhangtreefish/Project-3-for-Front-End-Web-Developer-Nanodegree"
                },
                {
                    "id": "4",
                    "genre": "full stack",
                    "title": "Tictactoe Game API",
                    "dates": "2015-2015",
                    "description": "Created a platform-agnostic, RESTful API on Google App Engine Endpoints to serve a game app",
                    "tools": ["Google App Engine Endpoints", "Python",],
                    "image": "http://i.imgur.com/Hwd5fSb.jpg",
                    "url": "https://tictactoe-2016.appspot.com/_ah/api/explorer",
                    "code": "https://github.com/zhangtreefish/Project-4-for-Full-Stack-Nanodegree-at-Udacity.git"
                },
                {
                    "id": "5",
                    "genre": "full stack",
                    "title": "A Tournament Database",
                    "dates": "2015-2015",
                    "description": "Developed a PostgreSQL database to track the players and matches of a tournament",
                    "tools": ["psql", "vagrant", "Python", "PostgreSQL", "psycopg2"],
                    "image": "",
                    "url": "",
                    "code": "https://github.com/psycopg/psycopg2.git"
                },
                {
                    "id": "6",
                    "genre": "full stack",
                    "title": "A Movie Site",
                    "dates": "2015-2015",
                    "description": "Created a movie site with clickable trailers using Python and a web server for HTML",
                    "tools": ["Python", "Python modules of webbrowser, re, os"],
                    "image": "http://i.imgur.com/YO1cjJr.png",
                    "url": "http://zhangtreefish.github.io/Project-1-for-Full-Stack-Web-Developer-Nanodegree/",
                    "code": "https://github.com/zhangtreefish/Project-1-for-Full-Stack-Web-Developer-Nanodegree.git"
                },
                {
                    "id": "7",
                    "genre": "front end",
                    "title": "Unit Test with Jasmine",
                    "dates": "2015-2015",
                    "description": "Performed unit-testing with JasmineJS",
                    "tools": ["JasmineJS"],
                    "image": "http://i.imgur.com/11ovdoO.jpg",
                    "url": "http://zhangtreefish.github.io/Project-6-for-Front-End-Web-Developer-Nanodegree/",
                    "code": "https://github.com/zhangtreefish/Project-6-for-Front-End-Web-Developer-Nanodegree"
                },
                {
                    "id": "8",
                    "genre": "front end",
                    "title": "Web Performance Optimization",
                    "dates": "2015-2015",
                    "description": "Optimized a webpage through refactoring, page speed analysis and 60 FPS methods",
                    "tools": ["Chrome DevTools", "javascript"],
                    "image": "http://i.imgur.com/XaqjwTe.jpg",
                    "url": "http://zhangtreefish.github.io/Project-4-for-Front-End-Web-Developer-Nanodegree/",
                    "code": "https://github.com/zhangtreefish/Project-4-for-Front-End-Web-Developer-Nanodegree"
                },
                {
                    "id": "9",
                    "genre": "front end",
                    "title": "Resume Page",
                    "dates": "2015-2015",
                    "description": "Built JSONs and dynamically add information to a resume template through jQuery",
                    "tools": ["JSON", "jQuery"],
                    "image": "https://i.imgur.com/78mvBFX.jpg",
                    "url": "http://zhangtreefish.github.io/Project-2-for-Front-End-Web-Developer-Nanodegree",
                    "code": "https://github.com/zhangtreefish/Project-2-for-Front-End-Web-Developer-Nanodegree"
                },
                {
                    "id": "10",
                    "genre": "front end",
                    "title": "Mockup",
                    "dates": "2015-2015",
                    "description": "Turned a designer’s mockup into the semantic HTML and CSS with a 2.4% mismatch",
                    "tools": ["html5", "css3"],
                    "image": "http://i.imgur.com/coxWkyU.png",
                    "url": "http://zhangtreefish.github.io/Project-1-for-Udacity-Front-End-Web-Developer-Nanodegree/",
                    "code": "https://github.com/zhangtreefish/Project-1-for-Udacity-Front-End-Web-Developer-Nanodegree"
                },
                {
                    "id": "11",
                    "genre": "front end",
                    "title": "Ajax",
                    "dates": "2015-2015",
                    "description": "Called Google Street View Image API, Wikipedia API and NY Times API in this move planner",
                    "tools": ["Ajax", "jQuery", "Google Street View Image API", "Wikipedia API", "NY Times API"],
                    "image": "http://i.imgur.com/Hj8sHVm.jpg",
                    "url": "http://zhangtreefish.github.io/minicourse-ajax-project/",
                    "code": "https://github.com/zhangtreefish/minicourse-ajax-project"
                },
                    {
                    "id": "12",
                    "genre": "front end",
                    "title": "Udacity Alumni App",
                    "dates": "2016-present",
                    "description": "Contribute towards the front end development of the open source project for and by Udacity Alumni",
                    "tools": ["React", "Redux", "Scalable React Boilerplate", "Grommet", "Node"],
                    "image": "http://i.imgur.com/N5oMeud.jpg",
                    "url": "https://udacity-alumni-client.herokuapp.com",
                    "code": "https://github.com/udacityalumni/alumni-client"
                },
                    {
                    "id": "13",
                    "genre": "front end",
                    "title": "Neighborhood Search",
                    "dates": "2015-2016",
                    "description": "Built a neighborhood application with interactive map and search list with KnockoutJS and jQuery",
                    "tools": ["KnockoutJS", "jQuery"],
                    "image": "http://i.imgur.com/ztDG76q.jpg",
                    "url": "http://zhangtreefish.github.io/Project-5-for-Front-End-Web-Developer-Nanodegree/",
                    "code": "https://github.com/zhangtreefish/Project-5-for-Front-End-Web-Developer-Nanodegree"
                    },
                    {
                    "id": "14",
                    "genre": "full stack",
                    "title": "Multi User Blog",
                    "dates": "2016-2017",
                    "description": "Built a blog with Python ndb client library and webapp2 framework",
                    "tools": ["webapp2", "google app engine", "ndb client library", "Python"],
                    "image": "http://i.imgur.com/Mb5nYZw.png",
                    "url": "https://3-dot-default-dot-gaejinjablog.appspot.com",
                    "code": "https://github.com/zhangtreefish/blog"
                    }
            ];

        return {projects};
    }
}
