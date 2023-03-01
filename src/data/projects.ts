import { ICard } from '../interfaces';

export const projects: ICard[] = [
  {
    name: 'Portfolio',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Project developed to expose my knowledge. I started by designing the design in figma, and then applied it to the front-end. While developing, I decided to change some details. OBS: I will develop a backend for this application soon! And it will be easy, because I developed this frontend project already receiving structured and scalable data. So, I\'ll take the advantage of this to train something new on the backend/devops.',
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
  }
];
