interface ICourse {
  name: string,
  description: string,
  inProgress: boolean,
  imagePath?: string,
  techAreas: {
    frontendSkills?: string[],
    backendSkills?: string[],
    devopsSkills?: string[],
  }
  hours: number,
  instructor: string,
  certificateLink?: string,
}

const courses: ICourse[] = [
  {
    name: 'Microservices with Node JS and React',
    description: 'I learned Kubernetes and all the logic of microservices, their various problems and alternatives. The course taught how a message broker works and its integration with the various Microservices. In general, I learned how to build, deploy, and scale an E-Commerce app using Microservices.',
    inProgress: false,
    techAreas: {
      frontendSkills: ['Typescript', 'React', 'Next', 'Tailwind'],
      backendSkills: ['Node', 'Express', 'Jest', 'JWT', 'Cookies' ],
      devopsSkills: ['Docker', 'Kubernetes', 'Scaffolding'],
    },
    hours: 55,
    instructor: 'Stephen Grinder',
    certificateLink: 'https://www.udemy.com/certificate/UC-09cd33eb-0627-427f-bf86-f36e299f469f/',
  }
]

export { projects }
