interface IProject {
  name: string,
  description: string,
  inProgress: boolean,
  imagePath?: string,
  techAreas: {
    frontendSkills?: string[],
    backendSkills?: string[],
    devopsSkills?: string[],
  }
  hasDeploy: boolean,
  codeLink: string,
  deployLink?: string,
  apiLink?: string,
}

const projects: IProject[] = [
  {
    name: 'Portfolio',
    description: 'Page developed to expose my projects, courses taken and skills already trained. I will develop a backend for this application soon!',
    hasDeploy: false,
    inProgress: true,
    techAreas: {
      frontendSkills: ['Typescript', 'React', 'Vite', 'Tailwind', 'Figma'],
    },
    codeLink: 'https://github.com/felipemalli/portfolio',
  }
]

export { projects }
