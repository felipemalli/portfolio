interface ICourse {
  name: string,
  description: string,
  inProgress: boolean,
  image: string,
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
    name: 'Full Stack web development',
    description: "Where I learned to code. In addition to the thousands of hours invested in learning, I've done a huge amount of projects in this course. Most aren't on github.",
    inProgress: false,
    image: 'courses/webdevelopment-trybe.png',
    techAreas: {
      frontendSkills: ['HTML', 'CSS', 'React', 'Redux', 'React Testing Library', 'Jest', 'Mocha/Chai/Sinon'],
      backendSkills: ['Node', 'Express', 'Sequelize', 'MySQL', 'MongoDB', 'Jest', 'JWT', 'BCrypt', 'SOLID', 'OOP']
    },
    hours: 1500,
    instructor: 'Brad Traversy',
  },
  {
    name: 'Java Bootcamp',
    description: "I learn Java for backend. Hibernate, Spring, Quarkus, JUnit, Docker, more about dependecy injections and a lot of other knowledges. I've done a lot of projects in this course and most aren't on github. ",
    inProgress: false,
    image: 'courses/webdevelopment-trybe.png',
    techAreas: {
      backendSkills: ['Java', 'Hibernate', 'Spring', 'Quarkus', 'JUnit', 'OOP'],
      devopsSkills: ['Docker'],
    },
    hours: 500,
    instructor: 'Wipro and Trybe',
  },
  {
    name: 'Microservices with NodeJS and React',
    description: 'I learned Kubernetes and all the logic of microservices, their various problems and alternatives. The course taught how a message broker works and its integration with the various Microservices. In general, I learned how to build, deploy, and scale an E-Commerce app using Microservices.',
    inProgress: false,
    image: 'courses/microservices-stephengrinder.jpg',
    techAreas: {
      frontendSkills: ['Typescript', 'React', 'Next', 'Tailwind'],
      backendSkills: ['Node', 'Express', 'Jest', 'JWT', 'Cookies' ],
      devopsSkills: ['Docker', 'Kubernetes', 'Scaffolding'],
    },
    hours: 54.5,
    instructor: 'Stephen Grinder',
    certificateLink: 'https://www.udemy.com/certificate/UC-09cd33eb-0627-427f-bf86-f36e299f469f/',
  },
  {
    name: 'Amazon Web Services (AWS): Essential',
    description: 'I learned all essential tools of AWS. IAM, network and connectivity services, EC2, S3, SQL service (RDS), NoSQL service (DynamoDB), Cloud Trail and CloudWatch, Elastic Load Balancing, Route 53, CloudFront and a quick look at serverless computing (Lambda functions).',
    inProgress: false,
    image: 'courses/aws-geekuniversity.jpg',
    techAreas: {
      devopsSkills: ['AWS'],
    },
    hours: 12.5,
    instructor: 'Geek University',
    certificateLink: 'https://www.udemy.com/certificate/UC-889787a5-7efc-41f7-9ad8-8f336c7fe421/',
  },
  {
    name: 'PRO FIGMA | User interface design from beginner to expert',
    description: 'I learned how to use Figma to design my mobile/web pages and a lot of tips about UI/UX.',
    inProgress: true,
    image: 'courses/profigma-lucasmarte.jpg',
    techAreas: {
      frontendSkills: ['Figma'],
    },
    hours: 14.5,
    instructor: 'Lucas Marte',
  },
  {
    name: 'Tailwind CSS from scratch | Learn by building projects',
    description: 'I learned Tailwind and how to make excellent projects with this technologies',
    inProgress: true,
    image: 'courses/tailwind-bradtraversy.jpg',
    techAreas: {
      frontendSkills: ['HTML', 'Tailwind'],
    },
    hours: 12.5,
    instructor: 'Brad Traversy',
  },
]

export { courses }
