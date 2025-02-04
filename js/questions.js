const questions = [
    // Existing questions (1-5)
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },

    // Additional questions (6-60)
    {
        numb: 6,
        question: "Which language is used for styling web pages?",
        answer: "CSS",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ]
    },
    {
        numb: 7,
        question: "Which tag is used to define a hyperlink in HTML?",
        answer: "<a>",
        options: [
            "<p>",
            "<div>",
            "<a>",
            "<span>"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is a server-side scripting language?",
        answer: "PHP",
        options: [
            "HTML",
            "CSS",
            "PHP",
            "JavaScript"
        ]
    },
    {
        numb: 9,
        question: "Which JavaScript method is used to display an alert box?",
        answer: "alert()",
        options: [
            "prompt()",
            "confirm()",
            "alert()",
            "console.log()"
        ]
    },
    {
        numb: 10,
        question: "Which SQL statement is used to delete data from a table?",
        answer: "DELETE",
        options: [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ]
    },
    {
        numb: 11,
        question: "Which HTML attribute specifies an alternative text for an image?",
        answer: "alt",
        options: [
            "src",
            "title",
            "alt",
            "width"
        ]
    },
    {
        numb: 12,
        question: "Which CSS property is used to change the background color of an element?",
        answer: "background-color",
        options: [
            "color",
            "font-size",
            "background-color",
            "text-align"
        ]
    },
    {
        numb: 13,
        question: "Which JavaScript event occurs when the user clicks on an element?",
        answer: "onclick",
        options: [
            "onmouseover",
            "onmouseout",
            "onclick",
            "onkeydown"
        ]
    },
    {
        numb: 14,
        question: "Which HTTP status code indicates a successful request?",
        answer: "200 OK",
        options: [
            "404 Not Found",
            "500 Internal Server Error",
            "301 Moved Permanently",
            "200 OK"
        ]
    },
    {
        numb: 15,
        question: "Which of the following is not a primitive data type in JavaScript?",
        answer: "Array",
        options: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ]
    },
    {
        numb: 16,
        question: "Which of the following is a valid Python data structure?",
        answer: "List",
        options: [
            "Tuple",
            "Dictionary",
            "Set",
            "List"
        ]
    },
    {
        numb: 17,
        question: "Which of the following is used to define a function in JavaScript?",
        answer: "function",
        options: [
            "var",
            "let",
            "function",
            "const"
        ]
    },
    {
        numb: 18,
        question: "Which of the following is a framework for building user interfaces?",
        answer: "React",
        options: [
            "Node.js",
            "Express.js",
            "React",
            "Django"
        ]
    },
    {
        numb: 19,
        question: "Which of the following is a NoSQL database?",
        answer: "MongoDB",
        options: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Oracle"
        ]
    },
    {
        numb: 20,
        question: "Which of the following is a front-end JavaScript library?",
        answer: "jQuery",
        options: [
            "Node.js",
            "Express.js",
            "jQuery",
            "Django"
        ]
    },
    {
        numb: 21,
        question: "Which of the following is a back-end JavaScript runtime environment?",
        answer: "Node.js",
        options: [
            "Angular",
            "Vue.js",
            "Node.js",
            "React"
        ]
    },
    {
        numb: 22,
        question: "Which of the following is a popular version control system?",
        answer: "Git",
        options: [
            "SVN",
            "Mercurial",
            "Git",
            "Perforce"
        ]
    },
    {
        numb: 23,
        question: "Which of the following is a template engine for Node.js?",
        answer: "EJS",
        options: [
            "Handlebars",
            "Pug",
            "EJS",
            "Twig"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is a package manager for Node.js?",
        answer: "npm",
        options: [
            "pip",
            "composer",
            "npm",
            "gem"
        ]
    },
    {
        numb: 25,
        question: "Which of the following is a cloud computing platform?",
        answer: "AWS",
        options: [
            "Azure",
            "Google Cloud",
            "AWS",
            "Heroku"
        ]
    },
    {
        numb: 26,
        question: "Which of the following is a JavaScript framework for building mobile applications?",
        answer: "React Native",
        options: [
            "Flutter",
            "Ionic",
            "React Native",
            "Xamarin"
        ]
    },
    {
        numb: 27,
        question: "Which of the following is a CSS preprocessor?",
        answer: "Sass",
        options: [
            "Less",
            "Stylus",
            "Sass",
            "Tailwind"
        ]
    },
    {
        numb: 28,
        question: "Which of the following is a state management library for React?",
        answer: "Redux",
        options: [
            "MobX",
            "Context API",
            "Redux",
            "Vuex"
        ]
    },
    {
        numb: 29,
        question: "Which of the following is a JavaScript testing framework?",
        answer: "Jest",
        options: [
            "Mocha",
            "Jasmine",
            "Jest",
            "Enzyme"
        ]
    },
    {
        numb: 30,
        question: "Which of the following is a Python web framework?",
        answer: "Flask",
        options: [
            "Django",
            "Flask",
            "Ruby on Rails",
            "Laravel"
        ]
    },
    {
        numb: 31,
        question: "Which of the following is a task runner for JavaScript?",
        answer: "Gulp",
        options: [
            "Webpack",
            "Grunt",
            "Gulp",
            "Parcel"
        ]
    },
    {
        numb: 32,
        question: "Which of the following is a JavaScript library for data visualization?",
        answer: "D3.js",
        options: [
            "Chart.js",
            "Three.js",
            "D3.js",
            "Leaflet"
        ]
    },
    {
        numb: 33,
        question: "Which of the following is a JavaScript framework for building single-page applications?",
        answer: "Vue.js",
        options: [
            "Angular",
            "Vue.js",
            "Ember.js",
            "Backbone.js"
        ]
    },
    {
        numb: 34,
        question: "Which of the following is a CSS framework?",
        answer: "Bootstrap",
        options: [
            "Materialize",
            "Foundation",
            "Bootstrap",
            "Bulma"
        ]
    },
    {
        numb: 35,
        question: "Which of the following is a containerization platform?",
        answer: "Docker",
        options: [
            "Kubernetes",
            "Docker",
            "Vagrant",
            "Ansible"
        ]
    },
    {
        numb: 36,
        question: "Which of the following is a JavaScript framework for building desktop applications?",
        answer: "Electron",
        options: [
            "Tauri",
            "Electron",
            "NW.js",
            "Proton"
        ]
    },
    {
        numb: 37,
        question: "Which of the following is a popular JavaScript library for handling HTTP requests?",
        answer: "Axios",
        options: [
            "Fetch",
            "Request",
            "Axios",
            "SuperAgent"
        ]
    },
    {
        numb: 38,
        question: "Which of the following is a build automation tool for JavaScript projects?",
        answer: "Webpack",
        options: [
            "Rollup",
            "Parcel",
            "Webpack",
            "Browserify"
        ]
    },
    {
        numb: 39,
        question: "Which of the following is a JavaScript framework for building real-time applications?",
        answer: "Socket.IO",
        options: [
            "SignalR",
            "Pusher",
            "Socket.IO",
            "Action Cable"
        ]
    },
    {
        numb: 40,
        question: "Which of the following is a popular JavaScript library for handling state in React?",
        answer: "Redux",
        options: [
            "MobX",
            "Recoil",
            "Redux",
            "Zustand"
        ]
    },
    {
        numb: 41,
        question: "Which of the following is a JavaScript framework for building command-line tools?",
        answer: "Commander",
        options: [
            "Yargs",
            "Inquirer",
            "Commander",
            "Oclif"
        ]
    },
    {
        numb: 42,
        question: "Which of the following is a JavaScript library for handling animations?",
        answer: "GSAP",
        options: [
            "Anime.js",
            "Velocity.js",
            "GSAP",
            "Popmotion"
        ]
    },
    {
        numb: 43,
        question: "Which of the following is a JavaScript library for handling forms?",
        answer: "Formik",
        options: [
            "React Hook Form",
            "Final Form",
            "Formik",
            "Redux Form"
        ]
    },
    {
        numb: 44,
        question: "Which of the following is a JavaScript library for handling routing in React?",
        answer: "React Router",
        options: [
            "Next.js",
            "Nuxt.js",
            "React Router",
            "Vue Router"
        ]
    },
    {
        numb: 45,
        question: "Which of the following is a JavaScript library for handling internationalization?",
        answer: "i18next",
        options: [
            "react-i18next",
            "i18next",
            "formatjs",
            "lingui"
        ]
    },
    {
        numb: 46,
        question: "Which of the following is a JavaScript library for handling validation?",
        answer: "Yup",
        options: [
            "Joi",
            "Validator.js",
            "Yup",
            "ajv"
        ]
    },
    {
        numb: 47,
        question: "Which of the following is a JavaScript library for handling drag-and-drop interactions?",
        answer: "React DnD",
        options: [
            "SortableJS",
            "Draggable",
            "React DnD",
            "Interact.js"
        ]
    },
    {
        numb: 48,
        question: "Which of the following is a JavaScript library for handling file uploads?",
        answer: "Dropzone",
        options: [
            "Uppy",
            "Tus",
            "Dropzone",
            "Fine Uploader"
        ]
    },
    {
        numb: 49,
        question: "Which of the following is a JavaScript library for handling infinite scrolling?",
        answer: "Intersection Observer",
        options: [
            "Infinite Scroll",
            "ScrollMagic",
            "Intersection Observer",
            "Waypoints"
        ]
    },
    {
        numb: 50,
        question: "Which of the following is a JavaScript library for handling lazy loading?",
        answer: "Lozad.js",
        options: [
            "LazyLoad",
            "Lozad.js",
            "Blazy",
            "lazysizes"
        ]
    },
    {
        numb: 51,
        question: "Which of the following is a JavaScript library for handling pagination?",
        answer: "React Paginate",
        options: [
            "react-paginate",
            "paginate",
            "pagination-js",
            "React Paginate"
        ]
    },
    {
        numb: 52,
        question: "Which of the following is a JavaScript library for handling modals?",
        answer: "React Modal",
        options: [
            "Modal.js",
            "SweetAlert2",
            "React Modal",
            "Fancybox"
        ]
    },
    {
        numb: 53,
        question: "Which of the following is a JavaScript library for handling tooltips?",
        answer: "Tippy.js",
        options: [
            "Tooltip.js",
            "Popper.js",
            "Tippy.js",
            "qTip2"
        ]
    },
    {
        numb: 54,
        question: "Which of the following is a JavaScript library for handling carousels?",
        answer: "Swiper",
        options: [
            "Owl Carousel",
            "Slick Carousel",
            "Swiper",
            "Flickity"
        ]
    },
    {
        numb: 55,
        question: "Which of the following is a JavaScript library for handling date and time?",
        answer: "Moment.js",
        options: [
            "date-fns",
            "Day.js",
            "Moment.js",
            "Luxon"
        ]
    },
    {
        numb: 56,
        question: "Which of the following is a JavaScript library for handling charts?",
        answer: "Chart.js",
        options: [
            "Highcharts",
            "ECharts",
            "Chart.js",
            "D3.js"
        ]
    },
    {
        numb: 57,
        question: "Which of the following is a JavaScript library for handling maps?",
        answer: "Leaflet",
        options: [
            "Mapbox GL JS",
            "Google Maps JavaScript API",
            "Leaflet",
            "OpenLayers"
        ]
    },
    {
        numb: 58,
        question: "Which of the following is a JavaScript library for handling geolocation?",
        answer: "Geolocator",
        options: [
            "Geolib",
            "Geocoder",
            "Geolocator",
            "GeoJSON"
        ]
    },
    {
        numb: 59,
        question: "Which of the following is a JavaScript library for handling notifications?",
        answer: "Notyf",
        options: [
            "Toastr",
            "PNotify",
            "Notyf",
            "iziToast"
        ]
    },
    {
        numb: 60,
        question: "Which of the following is a JavaScript library for handling transitions?",
        answer: "React Transition Group",
        options: [
            "React Spring",
            "Framer Motion",
            "React Transition Group",
            "Animate.css"
        ]
    }
];