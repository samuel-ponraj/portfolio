import kings from './assets/projects/kings.png'
import kingz from './assets/projects/kingz.png'
import checklist from './assets/projects/checklist.jpg'
import vote from './assets/projects/vote.jpg'
import weather from './assets/projects/weather.jpg'
import usercard from './assets/projects/usercard.jpg'
import calc from './assets/projects/calc.jpg'
import password from './assets/projects/password.jpg'
import medicmode from './assets/projects/medicmode.png'
import ecommerce from './assets/projects/ecommerce.png'


const projects = [
    {   
        id: 1,
        img: medicmode, 
        name: "Medic Mode",
        description: "A responsive paramedic website built with Next Js and Firebase, featuring blogs and an online course marketplace for paramedics and first responders in India.",
        link: "https://medicmode.com/"
    },
    {   
        id: 2,
        img: kings, 
        name: "Kings Publications",
        description: "A responsive publisher website developed with Next Js, offering a user-friendly interface for browsing publications, accessing detailed content, and purchasing books online seamlessly.",
        link: "https://kingspublications.com/"
    },
    {   
        id: 3,
        img: kingz, 
        name: "Kingz Digital Solutions",
        description: "A responsive static website built with React.js, showcasing the company's web development services.",
        link: "https://kingzdigitalsolutions.vercel.app/"
    },
    {   
        id: 4,
        img: ecommerce,
        name: "Ecommerce List Page",
        description: "Built with React, this responsive ecommerce list page features search, sort, and filter functionalities.",
        link: "https://ecommerce-list-page.vercel.app/"
    },
    {   
        id: 5,
        img: checklist,
        name: "Checklist App",
        description: "A responsive checklist app built with React, featuring real-time task management, full CRUD operations, and a search option for efficient organization.",
        link: "https://samuel-ponraj.github.io/checklist"
    },
    {   
        id: 6,
        img: vote,
        name: "E-Voting System",
        description: "An efficient e-voting system using Java, Spring Boot, and SQL, allowing users to securely cast their votes online. The application provides a seamless, accessible voting experience with robust backend support.",
        link: "https://github.com/samuel-ponraj/e-voting-system"
    },
    {   
        id: 7,
        img: weather,
        name: "Weather App",
        description: "A responsive weather app website using React and the OpenWeather API, delivering real-time weather updates and forecasts.",
        link: "https://samuel-ponraj.github.io/weather"
    },
    {
        id: 8,
        img: usercard,
        name: "User Profiles and Blog Posts",
        description: "A dynamic user cards website developed with React, offering secure user authentication. Users can add posts, while admins have the ability to remove users and manage posts.",
        link: "https://github.com/samuel-ponraj/usercards"
    },
    {
        id: 9,
        img: calc,
        name: "Calculator",
        description: "A calculator app using React, featuring an intuitive interface for performing basic calculations. The app ensures smooth and responsive user interactions for efficient operations.",
        link: "https://samuel-ponraj.github.io/calculator"
    },
    {
        id: 10,
        img: password,
        name: "Password Generator",
        description: "A Password Generator App in React.js enables users to create secure passwords with customizable options for numbers, uppercase letters, lowercase letters, and symbols.",
        link: "https://samuel-ponraj.github.io/password_generator"
    }
];

export default projects