const otherSkills: string[] = ['Microservices', 'Design Patterns', 'TDD', 'OOP', 'SOLID', 'DDD', 'Clean Architecture', 'Web Scraping', 'CI/CD'];

const devopsSkills: string[] = ['Docker', 'Kubernetes', 'AWS', 'Github Actions', 'Scaffolding'];

const backendSkills: string[] = ['Javascript', 'Typescript', 'Node', 'Express', 'Sequelize', 'Prisma', 'Nest', 'Jest', 'MySQL', 'MongoDB', 'Swagger', 'Java', 'Spring', 'Hibernate', 'Quarkus', 'JUnit', 'H2', 'Python', 'JWT', 'Cookies', 'Husky'];

const frontendSkills: string[] = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Redux', 'Next', 'Jest', 'React Testing Library', 'Tailwind', 'Material-UI', 'Styled Components', 'Figma'];


const topSkills = backendSkills.concat(otherSkills).concat(devopsSkills);
const bottonSkills = frontendSkills;

export { bottonSkills, topSkills };
