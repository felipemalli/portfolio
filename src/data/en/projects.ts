import { ICard } from '../../interfaces';

export const enProjects: ICard[] = [
  {
    name: 'Fit Home',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Organization and timer project for home workouts. The most professional Back-end I\'ve ever developed, completely uncoupled. I deployed the backend on Amazon EC2, which is connected to MongoDB Atlas. I created with TDD, DDD and Clean Architecture. I followed principles of SOLID, DRY, YAGNI and KISS and used various design patterns. It also has 100% of test coverage. Although much of Back-end is already done, I\'m still finishing some routes. After, I plan to create a Front-end. I\'ve already created a sketch in Figma (not the final version) that I used to help create the project\'s architecture, which can be viewed in "Code".',
    inProgress: false,
    image: '/assets/projects/fithome.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'Express', 'Clean Architecture', 'TDD', 'DDD', 'Design Patterns', 'Jest', 'MongoDB', 'Swagger', 'SOLID', 'OOP', 'JWT']
      },
      frontend: {
        skills: ['Figma'],
        inProgress: true,
      },
      devops: {
        skills: ['AWS', 'Docker', 'Github Actions', 'CI/CD'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/fit-home'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: 'http://54.233.146.212:5050/api-docs/'
      },
    ],
  },
  {
    name: 'Portfolio',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'This is my main project at the moment to showcases my Front-end and UI/UX skills. I intentionally avoided use of auxiliary libraries and frameworks (except one for the subtitle). The carousel, animations, filter and language system, responsiveness and everything were all created using only React, Tailwind, and CSS. Prior to development, I spent several days crafting the design in Figma, which the draft can be viewed in the "Code" link. The code is structured, scalable, flexible and ready for API integration, with I plans to add soon.',
    inProgress: false,
    image: '/assets/projects/portfolio.webp',
    techAreas: {
      frontend: {
        skills: ['Typescript', 'React', 'Tailwind', 'Figma', 'CSS', 'CI/CD'],
      },
      backend: {
        skills: [''],
        inProgress: true,
      },
      devops: {
        skills: ['Github Actions', 'CI/CD'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/portfolio'
      },
      {
        name: 'Browser',
        link: 'https://felipemalli.com'
      },
      {
        name: 'API',
        link: ''
      },
    ],
    bottonRightTag: {
      name: 'Browser',
    }
  },
  {
    name: 'Drone Feeder',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Complete back-end project of a drone delivery made in team from scratch. Besides the CRUD routes, there are some routes to handle videos. Tests were made with H2, JUnit and JaCoCo for code coverage.',
    inProgress: false,
    image: '/assets/projects/dronefeeder.webp',
    techAreas: {
      backend: {
        skills: ['Java', 'Spring', 'MySQL', 'JUnit', 'H2', 'OOP'],
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/drone-feeder'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: 'https://github.com/felipemalli/drone-feeder#documenta%C3%A7%C3%A3o-da-api'
      },
    ],
  },
  {
    name: 'Trybe Futebol Club',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'I developed a complete RESTful API with some tests for an already implemented Front-End to handle football match data. I documented the API with Postman. This project consolidated my knowledge about OOP and integration between Front-end and Back-end. I deployed this project with Docker and Heroku, but it\'s not online anymore due to the end of the free use of Heroku.',
    inProgress: false,
    image: '/assets/projects/trybefutebolclub.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'Express', 'Sequelize', 'MySQL', 'Mocha/Chai/Sinon', 'JWT', 'OOP'],
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/trybe-futebol-club'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: 'https://documenter.getpostman.com/view/20084845/UzBjsnsX'
      },
    ],
  },
  {
    name: 'My Series',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'RESTful API with a couple of routes to handle series and their episodes. It was made with Spring, and the exception handling with ControllerAdvice and ExceptionHandler. I also added a circuit breaker to one route.',
    inProgress: false,
    image: '/assets/projects/myseries.webp',
    techAreas: {
      backend: {
        skills: ['Java', 'Spring', 'OOP'],
      },
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/my-series'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: 'https://github.com/felipemalli/my-series#operations'
      },
    ],
  },
  {
    name: 'Car Shop',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'RESTful API with a CRUD to handle cars. I followed the SOLID concepts, OOP, and the use of generics for reusability.',
    inProgress: false,
    image: '/assets/projects/carshop.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'MongoDB', 'Mongoose', 'Jest', 'Mocha/Chai/Sinon', 'OOP', 'SOLID'],
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/car-shop'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: ''
      },
    ],
  },
  {
    name: 'Recipes App',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Front-End project of a recipes app made in a team. I was responsible for developing the main pages and filters. I was not responsible for the design. For the project\'s development, two databases from two different APIs were used, one for food and the other for drinks. We divided the tasks to avoid overloading anyone on the team, and we were able to deliver the project ahead of schedule.',
    inProgress: false,
    image: '/assets/projects/recipesapp.webp',
    techAreas: {
      frontend: {
        skills: ['Javascript', 'React', 'Styled Components'],
      },
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/project-recipes-app'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: ''
      },
    ],
  },
  {
    name: 'Miles Program',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'RESTful API to handle miles using Quarkus. This was an interesting challenge from the Java bootcamp I did, because in a project in the intermediate stage of development, I had to implement several functionalities for the project to work.',
    inProgress: false,
    image: '/assets/projects/milesprogram.webp',
    techAreas: {
      backend: {
        skills: ['Java', 'Quarkus', 'Hibernate', 'OOP'],
      },
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/miles-program'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: ''
      },
    ],
  },
  {
    name: 'Register Specialties',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'RESTful API with CRUD operations for managing professionals and their specialties. The project was developed using Spring and implements the JAX-RS specification with the Jersey library.',
    inProgress: false,
    image: '/assets/projects/registerspecialties.webp',
    techAreas: {
      backend: {
        skills: ['Java', 'Spring', 'Jersey', 'OOP'],
      },
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/register-specialties'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: 'https://github.com/felipemalli/register-specialties#operations'
      },
    ],
  },
  {
    name: 'Blogs App',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'REST API with several CRUD endpoints for managing blog posts, developed using JavaScript. Note that the Joi framework was used for middleware validations and authentications.',
    inProgress: false,
    image: '/assets/projects/blogsapp.webp',
    techAreas: {
      backend: {
        skills: ['Javascript', 'Node', 'Express', 'Sequelize', 'MySQL', 'JWT'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/blogs-app'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: 'https://github.com/felipemalli/blogs-app#endpoints'
      },
    ],
  },
  {
    name: 'Wallet App',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Front-end wallet app that I developed to strengthen my skills with Redux. Unfortunately, I did not develop the website design, but it is fully functional.',
    inProgress: false,
    image: '/assets/projects/walletapp.webp',
    techAreas: {
      frontend: {
        skills: ['Javascript', 'React', 'Redux'],
      },
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/wallet-app'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: ''
      },
    ],
  },
  {
    name: 'To do list',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'To-do list full-stack app to train Material UI. I\'m still developing the front-end and UI, but it\'s already deployed! The backend was initially made with Node, Express, Sequelize, and MySQL, but I\'m going to create another one with different technologies. However, you can access the old one on my GitHub.',
    inProgress: true,
    image: '/assets/projects/todolist.webp',
    techAreas: {
      frontend: {
        skills: ['Typescript', 'React', 'Material-UI'],
      },
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/to-do-list-ui'
      },
      {
        name: 'Browser',
        link: 'https://sunny-frangollo-bd1940.netlify.app'
      },
      {
        name: 'API',
        link: ''
      },
    ],
    bottonRightTag: {
      name: 'Browser',
    }
  },
  {
    name: 'Musicall',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'A full-stack project of a a web music page. I\'m learning a lot with Nest, Prisma and Next doing this project. Although development is currently paused, I intend to return. Because despite already knowing the technologies, I want to train them in a personal project.',
    inProgress: true,
    image: '/assets/projects/musicall.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'Nest', 'Prisma', 'OOP'],
      },
      frontend: {
        skills: ['Typescript', 'Next']
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/musicall'
      },
      {
        name: 'Browser',
        link: ''
      },
      {
        name: 'API',
        link: ''
      },
    ],
  },
  {
    name: 'Shipinsane',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'I developed a game for a Fluminense Federal University (UFF) course, which helped me practice complex logic and work with OOP and Python. You can actually play the game by following the link in the "Code"!',
    inProgress: false,
    image: '/assets/projects/shipinsane.webp',
    techAreas: {
      other: {
        name: 'Game',
        skills: ['Python', 'OOP', 'Pygame', 'PPlay'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/game-shipinsane'
      },
    ],
  },
];
