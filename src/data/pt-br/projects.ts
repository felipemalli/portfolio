import { ICard } from '../../interfaces';

export const ptBrProjects: ICard[] = [
  {
    name: 'Portfolio',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Project developed to expose my knowledge. I started by designing the design in figma (you can check the figma sketch on code link), and then applied it to the front-end and decided to change some details. I avoid to use dependencies, so it has only react and tailwind (to be fair, I used a reacttype animation for this little animation on subtitle). OBS: I will develop a backend for this application soon! Since I developed this frontend project already receiving structured and scalable data (you can check at src/data), it would be easy to implement the backend. So, I\'m going take this opportunity to train something new with the backend/devops.',
    inProgress: false,
    image: '/assets/projects/portfolio.webp',
    techAreas: {
      frontend: {
        skills: ['Typescript', 'React', 'Tailwind', 'Figma', 'CSS', 'CI/CD'],
      },
      backend: {
        skills: [''],
        inProgress: true,
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/portfolio'
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
    bottonRightTag: {
      name: 'Browser',
    }
  },
  {
    name: 'Trybe Futebol Club',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'I developed a RESTful Back-end for a already implemented Front-End. This project consolidated my knowledge about OOP and integration between Front-end and Back-end. I deployed this project with Docker and Heroku, but it\'s not online anymore due to the end of free use of Heroku.',
    inProgress: false,
    image: '/assets/projects/trybefutebolclub.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'Express', 'Sequelize', 'MySQL', 'Jest', 'Mocha/Chai/Sinon', 'JWT', 'OOP'],
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
    name: 'Drone Feeder',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Back-end project of a drone delivery made in team. Besides the basic routes, there are some routes to handle videos. Tests were made with H2, JUnit and JaCoCo for code coverage.',
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
    name: 'My Series',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'API REST with a couple routes for handling series and your episodes. It was made with Spring and handling exceptions with ControllerAdvice and ExceptionHandler. I also add a circuit breaker in one route.',
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
    description: 'API with a simple CRUD for handling cars. I follow the concepts of SOLID, OOP and using generics for reuse.',
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
    name: 'Miles Program',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'API REST for handling miles with Quarkus. This was a challenge of Java bootcamp that I did. In a project in the middle stage of development, I had to implement several functionalities for the project work.',
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
    name: 'Recipes App',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Front-End project of a recipes app made in team. It was used in the development of the project, two databases of 2 different APIs, one for food and the other for drinks. We divided the tasks so as not to overload anyone on the team, and we were able to deliver the project in advance.',
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
    name: 'Register Specialties',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'API REST with simple CRUD for handling professionals and their specialties. It was made with Spring and implementing JAX-RS specification with jersey library.',
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
    description: 'API REST with various CRUD endpoints for handling blogs posts. One observation is that Joi was used for middleware validations.',
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
    description: 'Front-end wallet app that I developed to improve my skills with Redux',
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
    name: 'Clean Schedule',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'I\'m doing this API to train Clean Arquitecture, TDD, DDD and for consolidate more SOLID concepts.',
    inProgress: true,
    image: '/assets/projects/cleanschedule.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'Clean Architecture', 'TDD', 'DDD', 'Design Patterns', 'Jest', 'GraphQL', 'MongoDB', 'Mongoose', 'Swagger', 'SOLID', 'OOP', 'Husky', 'CI/CD']
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Code',
        link: 'https://github.com/felipemalli/clean_schedule_api'
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
    description: 'To do list for train material UI. The backend was made with Node, Express, Sequelize and MySQL, but I\'m going to create another one with other technologies. But you can access the old one in my github.',
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
    description: 'A full-stack project of a a web music page. I\'m learning a lot with Nest, Prisma and Next doing this project. Its development is paused, but I will return.',
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
    description: 'Game developed for a Fluminense Federal University (UFF) discipline. It was excellent to train logic a lot and work with OOP and python. It\'s possible to play the game, just follow the steps of code link.',
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
