import { ICard } from '../../interfaces';

export const ptBrCourses: ICard[] = [
  {
    name: 'Microservices com NodeJS and React',
    type: 'course',
    creator: 'Stephen Grinder',
    description: 'Aprendi Kubernetes e toda lógica de microserviços, com seus vários problemas e alternativas. O curso ensinou como funciona um message broker e sua integração com os diversos Microsserviços. Em geral, aprendi como construir, implantar e dimensionar um aplicativo de e-commerce usando microsserviços.',
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
    name: 'Amazon Web Services (AWS): Essencial',
    type: 'course',
    creator: 'Geek University',
    description: 'Eu aprendi todas as ferramentas essenciais da AWS. IAM, serviços de rede e conectividade, EC2, S3, serviço SQL (RDS), serviço NoSQL (DynamoDB), Cloud Trail e CloudWatch, Balanceamento de carga elástico, Route 53, CloudFront e uma rápida visão da computação sem servidor (funções Lambda).',
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
    name: 'Desenvolvimento web Full Stack',
    type: 'course',
    creator: 'Trybe',
    description: 'Onde eu comecei a programar. Além das milhares de horas investidas em aprendizado, fiz uma quantidade enorme de projetos neste curso. A maioria não está no GitHub.',
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
    description: 'Eu aprendi Java para o backend do zero ao deploy. Hibernate, Spring, Quarkus, JUnit, Docker, mais sobre injeções de dependência e muitos outros conhecimentos. Eu fiz muitos projetos neste curso e a maioria não está no GitHub.',
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
    description: 'Estou aprendendo a usar o Figma para projetar minhas páginas móveis / web e muitas dicas sobre UI/UX.',
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
    description: 'Estou aprendendo Tailwind e como fazer excelentes projetos com esta tecnologia. Já usei os conhecimentos deste curso nesta página do meu portfólio.',
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
    description: 'Estou aprendendo muito com TDD e Arquitetura Limpa. E está sendo uma ótima oportunidade para consolidar os conceitos de SOLID.',
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

