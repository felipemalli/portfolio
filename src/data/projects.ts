import { ICard } from '../interfaces';

export const projects: ICard[] = [
  {
    name: 'Portfolio',
    type: 'project',
    creator: 'Felipe Vahia Malliagros',
    description: 'Project developed to expose my knowledge. Projects, courses taken, skills already trained, my future steps and goals. OBS: I will develop a backend for this application soon!',
    inProgress: true,
    image: 'src/assets/projects/portfolio.webp',
    techAreas: {
      frontend: {
        skills: ['Typescript', 'React', 'Vite', 'Tailwind', 'Figma'],
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
