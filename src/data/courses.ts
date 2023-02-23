export type ILinkName = 'Certificate' | 'Code' | 'Browser' | 'API'
export type IBottonRightTag = 'Hours' | 'Browser'

export interface ICard {
  name: string,
  creator: string,
  description: string,
  inProgress: boolean,
  image?: string,
  techAreas: {
    frontend?: {
      inProgress?: boolean,
      skills?: string[],
    },
    backend?: {
      inProgress?: boolean,
      skills?: string[],
    },
    devops?: {
      inProgress?: boolean,
      skills?: string[],
    },
  },
  links: {
    name: ILinkName,
    link: string,
  }[],
  bottonRightTag: {
    name: IBottonRightTag,
    value?: number
  },
}

export const courses: ICard[] = [
  {
    name: 'Microservices with NodeJS and React',
    creator: 'Stephen Grinder',
    description: 'I learned Kubernetes and all the logic of microservices, their various problems and alternatives. The course taught how a message broker works and its integration with the various Microservices. In general, I learned how to build, deploy, and scale an E-Commerce app using Microservices.',
    inProgress: false,
    image: 'src/assets/courses/microservices-stephengrinder.jpg',
    techAreas: {
      frontend:{
        skills: ['Typescript', 'React', 'Next', 'Tailwind'],
      },
      backend: {
        skills: ['Node', 'Express', 'Jest', 'JWT', 'Cookies' ],
      },
      devops: {
        skills: ['Docker', 'Kubernetes', 'Scaffolding'],
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
    creator: 'Geek University',
    description: 'I learned all essential tools of AWS. IAM, network and connectivity services, EC2, S3, SQL service (RDS), NoSQL service (DynamoDB), Cloud Trail and CloudWatch, Elastic Load Balancing, Route 53, CloudFront and a quick look at serverless computing (Lambda functions).',
    inProgress: false,
    image: 'src/assets/courses/aws-geekuniversity.jpg',
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
    creator: 'Trybe',
    description: 'Where I learned to code. In addition to the thousands of hours invested in learning, I\'ve done a huge amount of projects in this course. Most aren\'t on github.',
    inProgress: false,
    image: 'src/assets/courses/webdevelopment-trybe.jpg',
    techAreas: {
      frontend:{
        skills: ['HTML', 'CSS', 'React', 'Redux', 'React Testing Library', 'Jest', 'Mocha/Chai/Sinon'],
      },
      backend: {
        skills: ['Node', 'Express', 'Sequelize', 'MySQL', 'MongoDB', 'Jest', 'JWT', 'BCrypt', 'SOLID', 'OOP']
      },
      devops: {
        skills: ['Docker'],
      }
    },
    links: [
      {
        name: 'Certificate',
        link: '',
      },
    ],
    bottonRightTag: {
      name: 'Hours',
      value: 1500,
    },
  },
  {
    name: 'Java Bootcamp',
    creator: 'Wipro and Trybe',
    description: 'I learned Java for backend. Hibernate, Spring, Quarkus, JUnit, Docker, more about dependecy injections and a lot of other knowledges. I\'ve done a lot of projects in this course and most aren\'t on github. ',
    inProgress: false,
    image: 'src/assets/courses/javabootcamp-trybe-and-wipro.jpg',
    techAreas: {
      backend: {
        skills: ['Java', 'Hibernate', 'Spring', 'Quarkus', 'JUnit', 'OOP'],
      },
      devops: {
        skills: ['Docker'],
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
      value: 500,
    },
  },
  {
    name: 'PRO FIGMA | User interface design from beginner to expert',
    creator: 'Lucas Marte',
    description: 'I am learning how to use Figma to design my mobile/web pages and a lot of tips about UI/UX.',
    inProgress: true,
    image: 'src/assets/courses/profigma-lucasmarte.jpg',
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
    creator: 'Brad Traversy',
    description: 'I am learning Tailwind and how to make excellent projects with this technologies',
    inProgress: true,
    image: 'src/assets/courses/tailwind-bradtraversy.jpg',
    techAreas: {
      frontend:{
        skills: ['HTML', 'Tailwind'],
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
    name: 'NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID',
    creator: 'Rodrigo Manguinho',
    description: 'I am learning ...',
    inProgress: true,
    image: 'src/assets/courses/cleanarchitecture-rodrigomanguinho.jpg',
    techAreas: {
      backend: {
        skills: [''],
      },
      devops: {
        skills: [''],
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

