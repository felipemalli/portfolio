import { ICard } from '../interfaces';

export const projects: ICard[] = [
  {
    name: 'Portfolio',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Project developed to expose my knowledge. I started by designing the design in figma, and then applied it to the front-end. While developing, I decided to change some details. OBS: I will develop a backend for this application soon! I developed this frontend project already receiving structured and scalable data. Then, as it would be easy to implement the backend, I\'m going take this opportunity to train something new on the backend/devops.',
    inProgress: false,
    image: 'src/assets/projects/portfolio.webp',
    techAreas: {
      frontend: {
        skills: ['Typescript', 'React', 'Vite', 'Tailwind', 'Figma', 'CSS'],
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
    description: 'For an already implemented Front-end, I developed a RESTful Back-end. This project consolidated my knowledge about Object Oriented Programming (OOP) and integration between Front-end and Back-end. I deployed this project with Docker and Heroku, but it\'s not online anymore due to the end of free use of Heroku.',
    inProgress: false,
    image: 'src/assets/projects/trybefutebolclub.webp',
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
    image: 'src/assets/projects/dronefeeder.webp',
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
    name: 'Shipinsane',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Game developed for a Fluminense Federal University (UFF) discipline. It was excellent to train logic a lot and work with OOP and python. It\'s possible to play the game, just follow the steps of code link.',
    inProgress: false,
    image: 'src/assets/projects/shipinsane.webp',
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
