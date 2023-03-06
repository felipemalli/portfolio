import { ICard } from '../../interfaces';

export const enCourses: ICard[] = [
  {
    name: 'Microservices with NodeJS and React',
    type: 'course',
    creator: 'Stephen Grinder',
    description: 'I learned Kubernetes and all the logic of microservices, their various problems and alternatives. The course taught how a message broker works and its integration with the various Microservices. In general, I learned how to build, deploy, and scale an E-Commerce app using Microservices.',
    inProgress: false,
    image: '/assets/courses/microservices_stephengrinder.webp',
    techAreas: {
      frontend:{
        skills: ['Typescript', 'React', 'Next', 'Tailwind'],
      },
      backend: {
        skills: ['Typescript', 'Microservices', 'Node', 'Express', 'Jest', 'JWT', 'Cookies'],
      },
      devops: {
        skills: ['Docker', 'Kubernetes', 'Scaffolding', 'Github Actions', 'CI/CD'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: 'https://www.udemy.com/certificate/UC-09cd33eb-0627-427f-bf86-f36e299f469f/'
      },
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 54.5,
    },
  },
  {
    name: 'Amazon Web Services (AWS): Essential',
    type: 'course',
    creator: 'Geek University',
    description: 'I learned all essential AWS tools including IAM, network and connectivity services, EC2, S3, SQL service (RDS), NoSQL service (DynamoDB), Cloud Trail and CloudWatch, Elastic Load Balancing, Route 53, CloudFront and a brief overview of serverless computing (Lambda functions).',
    inProgress: false,
    image: '/assets/courses/aws_geekuniversity.webp',
    techAreas: {
      devops: {
        skills: ['AWS'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: 'https://www.udemy.com/certificate/UC-889787a5-7efc-41f7-9ad8-8f336c7fe421/'
      },
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 12.5,
    },
  },
  {
    name: 'Full Stack web development',
    type: 'course',
    creator: 'Trybe',
    description: 'Where I started to code. In addition to the thousands of hours invested in learning, I\'ve done a huge amount of projects in this course. Most aren\'t on GitHub.',
    inProgress: false,
    image: '/assets/courses/webdevelopment_trybe.webp',
    techAreas: {
      frontend:{
        skills: ['Javascript', 'Typescript', 'HTML', 'CSS', 'React', 'Redux', 'React Testing Library', 'Jest', 'Mocha/Chai/Sinon'],
      },
      backend: {
        skills: ['Javascript', 'Typescript', 'Python', 'Node', 'Express', 'Sequelize', 'MySQL', 'MongoDB', 'Mongoose', 'Jest', 'SOLID', 'OOP', 'Design Patterns', 'Web Scraping', 'JWT']
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: 'https://www.credential.net/7d7e23ae-d632-4c41-8d44-abbf3a4f00d7',
      },
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 1500,
    },
  },
  {
    name: 'Java Bootcamp',
    type: 'course',
    creator: 'Wipro and Trybe',
    description: 'I learned Java for backend development including Hibernate, Spring, Quarkus, JUnit, Docker, and more about dependency injection and other concepts. I completed many projects in this course, most of which are not on GitHub.',
    inProgress: false,
    image: '/assets/courses/javabootcamp_trybeandwipro.webp',
    techAreas: {
      backend: {
        skills: ['Java', 'Spring', 'Quarkus', 'Hibernate', 'H2', 'JUnit', 'OOP', 'SOLID'],
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: 'https://smartcerts.co/certificate/pymdvkkj',
      }
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 500,
    },
  },
  {
    name: 'PRO FIGMA | User interface design from beginner to expert',
    type: 'course',
    creator: 'Lucas Marte',
    description: 'I am learning how to use Figma to design my mobile/web pages and many tips about UI/UX.',
    inProgress: true,
    image: '/assets/courses/profigma_lucasmarte.webp',
    techAreas: {
      frontend:{
        skills: ['Figma'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: '',
      }
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 14.5,
    }
  },
  {
    name: 'Tailwind CSS from scratch | Learn by building projects',
    type: 'course',
    creator: 'Brad Traversy',
    description: 'I am learning Tailwind and how to create excellent projects using this technology. I have already utilized the knowledge gained from this course on my portfolio page.',
    inProgress: true,
    image: '/assets/courses/tailwind_bradtraversy.webp',
    techAreas: {
      frontend:{
        skills: ['Tailwind', 'CSS', 'HTML'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: '',
      }
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 12.5,
    }
  },
  {
    name: 'NodeJs, Typescript, TDD, DDD, Clean Architecture and SOLID',
    type: 'course',
    creator: 'Rodrigo Manguinho',
    description: 'I am learning a lot about TDD and Clean Architecture, which has been a great opportunity to solidify my understanding of SOLID principles. I believe these are very important skills to know for evolve as a professional',
    inProgress: true,
    image: '/assets/courses/cleanarchitecture_rodrigomanguinho.webp',
    techAreas: {
      backend: {
        skills: ['Typescript', 'Node', 'Clean Architecture', 'TDD', 'DDD', 'Design Patterns', 'Jest', 'GraphQL', 'MongoDB', 'Mongoose', 'Swagger', 'SOLID', 'OOP', 'Husky', 'CI/CD']
      },
      devops: {
        skills: ['Docker', 'CI/CD'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: '',
      }
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 47.5,
    }
  },
];

