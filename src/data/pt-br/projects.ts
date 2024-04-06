import { ICard } from '../../interfaces';

export const ptBrProjects: ICard[] = [
  {
    name: 'Fit Home',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Projeto para organizar e cronometrar exercícios. O Back-end mais profissional que já realizei, completamente desacoplado. Fiz o deploy do backend no Amazon EC2, que está conectado ao MongoDB Atlas. Criei com TDD, DDD e Clean Architecture. Segui os princípios do SOLID, DRY, YAGNI e KISS e usei vários design patterns. Ele também possui 100% de cobertura de testes. Embora grande parte do Back-end já esteja concluído, ainda estou terminando algumas rotas. Depois, planejo criar um Front-end. Já criei um esboço no Figma (não é a versão final) que usei para auxiliar na criação da arquitetura do projeto, que pode ser visualizado em "Code".',
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
    description: 'Esse é meu principal projeto no momento para demonstrar minhas habilidades em Front-end e UI/UX. Intencionalmente evitei bibliotecas e frameworks auxiliares (exceto uma para o subtítulo). O carrossel, animações, sistema de filtro e idiomas, responsividade e tudo mais foram criados utilizando apenas React, Tailwind e CSS. Antes de iniciar o desenvolvimento, dediquei vários dias para aprimorar o design no Figma, cujo esboço pode ser visualizado em "Code". O código é estruturado, escalável, flexível e pronto para integração com uma API, que planejo adicionar em breve.',
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
        link: 'https://felipemalliagros.com'
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
    description: 'Projeto completo de back-end que lida com entregas por drones, feito em equipe do zero. Além das rotas CRUD, existem algumas rotas para lidar com vídeos. Foram feitos testes com H2, JUnit e JaCoCo para cobertura de testes.',
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
    description: 'Desenvolvi uma API RESTful completa com alguns testes para um Front-end já implementado para lidar com dados de partidas de futebol. Documentei a API com o Postman. Esse projeto consolidou meu conhecimento sobre POO e integração entre Frontend e Backend. Realizei o deploy desse projeto com Docker e Heroku, mas ele não está mais online devido ao fim do uso gratuito do Heroku.',
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
    description: 'API RESTful com alguns endpoints para lidar com séries e seus episódios. Foi feito com Spring e o tratamento de exceções com ControllerAdvice e ExceptionHandler. Adicionei também um circuit breaker em uma rota.',
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
    description: 'API RESTful com um CRUD para lidar com carros. Segui os conceitos de SOLID, OOP e utilizei genéricos para reutilização.',
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
    description: 'Projeto Front-end de um aplicativo de receitas feito em equipe. Fui responsável por desenvolver as principais páginas e filtros. Não fui responsável pelo design. Para o desenvolvimento do projeto, foram usados dois bancos de dados de duas APIs diferentes, um para comida e outro para bebidas. Dividimos as tarefas para não sobrecarregar ninguém na equipe, e conseguimos entregar o projeto adiantado.',
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
    description: 'API RESTful para lidar com milhas usando Quarkus. Esse foi um desafio interessante do bootcamp de Java que fiz, pois, em um projeto em fase intermediária de desenvolvimento, tive que implementar várias funcionalidades para que o projeto funcionasse.',
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
    description: 'API RESTful com CRUD para gerenciamento de profissionais e suas especialidades. Foi feita com Spring e implementando a especificação JAX-RS com a biblioteca Jersey.',
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
    description: 'API REST com diversos endpoints de CRUD para gerenciamento de posts de blogs com Javascript. Uma observação é que o framework Joi foi usado para validações e autenticações de middleware.',
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
    description: 'Aplicativo de carteira front-end que desenvolvi para consolidar minhas habilidades com Redux. Infelizmente, não desenvolvi o design desse site, mas ele está totalmente funcional.',
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
    description: 'Um aplicativo de lista de tarefas para treinar Material UI. Ainda estou desenvolvendo o front-end e UI, mas o deploy já está publicado! O backend foi feito inicialmente com Node, Express, Sequelize e MySQL, mas vou criar outro com outras tecnologias. No entanto, você pode acessar o antigo no meu GitHub.',
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
    description: 'Projeto full-stack de uma página de música na web. Estou aprendendo muito com Nest, Prisma e Next fazendo esse projeto. O desenvolvimento está pausado, mas pretendo retomá-lo, pois apesar de já conhecer as tecnologias, quero treiná-las em um projeto pessoal.',
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
    description: 'Desenvolvi esse jogo para uma disciplina da Universidade Federal Fluminense (UFF). Foi excelente para treinar muita lógica complexa e trabalhar com OOP e Python. É possível jogar o jogo, basta seguir os passos em "Code"!',
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
