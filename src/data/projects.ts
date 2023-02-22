export interface IProject {
  name: string,
  description: string,
  inProgress: boolean,
  image?: string,
  techAreas: {
    frontend?: {
      inProgress?: boolean,
      skills?: string[],
    }
    backend?: {
      inProgress?: boolean,
      skills?: string[],
    }
    devops?: {
      inProgress?: boolean,
      skills?: string[],
    }
  },
  browserLink?: string,
  codeLink: string,
  apiLink?: string,
}

export const projects: IProject[] = [
  {
    name: 'Portfolio',
    description: 'Project developed to expose my knowledge. Projects, courses taken, skills already trained, my future steps and goals. OBS: I will develop a backend for this application soon!',
    inProgress: true,
    techAreas: {
      frontend: {
        skills: ['Typescript', 'React', 'Vite', 'Tailwind', 'Figma'],
      }
    },
    codeLink: 'https://github.com/felipemalli/portfolio',
  }
];
