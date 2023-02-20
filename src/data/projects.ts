interface IProject {
  name: string,
  description: string,
  inProgress: boolean,
  image?: string,
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
    description: 'Project developed to expose my knowledge. Projects, courses taken, skills already trained, my future steps and goals. OBS: I will develop a backend for this application soon!',
    hasDeploy: false,
    inProgress: true,
    techAreas: {
      frontendSkills: ['Typescript', 'React', 'Vite', 'Tailwind', 'Figma'],
    },
    codeLink: 'https://github.com/felipemalli/portfolio',
  }
]

export { projects }
