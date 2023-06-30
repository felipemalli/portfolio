import { IMainProject } from '../../interfaces/IMainCard';

export const enMainProjects: IMainProject[] = [{
  name: 'Fit Home',
  description: 'Full-stack solution to organize and time physical exercises.',
  theme: [
    {
      name: 'Introduction',
      subtheme: [
        {
          name: '',
          selectedPage: 0,
          pages: [
            [
              {
                image: '/assets/projects/fithomeOriginal.webp',
                subtitle: '',
                className: ''
              },
              {
                text: 'When exercising at home, it\'s common to lose track of time, and that\'s the main problem that this project solves, in addition to creating an organized workout schedule. The application will have a precise timer that tracks the time for each exercise repetition and rest period (configurable by the user) until completing all the sets of the workout. \n\n The client also has the freedom to create and configure exercises, which can become a template and be used in as many sets as desired. Therefore, when changing the configuration of an exercise, all the sets that include it will be updated. This way, it avoids the need to modify multiple places to make a configuration change (such as increasing the weight, for example). \n\n Additionally, it will be possible to assign different variations to the same exercise and select the desired variation for each set. The client will also be able to define a personalized link that redirects to a video or blog explaining how to perform the variation, along with a description.',
                className: ''
              }
            ]
          ]
        }
      ]
    },
    {
      name: 'Backend',
      subtheme: [
        {
          name: 'Architecture',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'The project\'s architecture follows the principles of **Domain-Driven Design (DDD)** and **Clean Architecture**, with well-defined and decoupled layers applying dependency inversion. \n\n The goal was to create software that is more flexible, scalable, and easy to test. This approach allows for modifications and evolution of everything (business rules, dependencies, logic, etc.) with minimal impact on other parts of the system (and with confidence, thanks to testing). \n\n To apply this model, several design patterns and concepts from **OOP**, **SOLID**, **DRY** (Don\'t Repeat Yourself), **YAGNI** (You Aren\'t Gonna Need It), and **KISS** (Keep It Simple, Stupid) were followed. \n\n In addition to the complete decoupling, another example of flexibility and scalability is the absence of a generic model (entity) for the account. I chose this approach to avoid unnecessary optional properties as the project grows. Therefore, in this case, each use case has its own model.',
                className: ''
              }
            ],
            [
              {
                image: '/assets/main-projects/fit-home/architectureEntities.png',
                subtitle: 'Entity Structure of Workout and Exercise in the application',
                className: 'sm:max-w-[34rem]'
              },


              {
                text: 'The core layer of this architecture is the **domain**, where entities, concepts, and business rules (with their use cases) are represented, as well as the interactions and behaviors among them. \n\n In the domain layer, most of the decisions and business logic are implemented. This helps maintain the separation of responsibilities and facilitates the evolution and maintenance of the system over time.',
                className: '2xl:max-w-[20rem]'
              },
              {
                image: '/assets/main-projects/fit-home/architectureDomainUsecase.png',
                subtitle: 'Example of a domain use case.',
                className: 'w-[22rem]'
              },
            ],
            [
              {
                text: 'The **data** layer implements business rules so that responsibilities can be segregated into specific use cases that can be implemented by dependencies (such as a database, for example) in the infrastructure layer. \n\n The **infrastructure** layer directly connects to dependencies (frameworks, libraries, and databases). In this way, it can implement the data and validation use cases. \n\n The **presentation** layer utilizes the business rules (domain protocols implemented by the data layer) and utility protocols (in this project, implemented only by the validation layer). It is responsible for composing the result of each route and handling errors through controllers and middlewares. \n\n The **validation** layer is responsible for implementing a utility protocol proposed by the presentation layer regarding validation of user-provided parameters. If necessary, it also proposes use cases to be implemented by a framework in the infrastructure layer.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/architectureCleanArchDiagram.png',
                subtitle: 'Diagram of a version of the clean architecture similar to the project, with the exception of the "Application" layer. It can be considered as the "Data" layer, which removes the connection from the Infrastructure to the Domain.',
                className: 'sm:max-w-[30rem]'
              },
            ],
            [
              {
                image: '/assets/main-projects/fit-home/architectureLayers.png',
                subtitle: 'Demonstration of the project\'s architecture in practice, using the SignUpController following the path of the Authentication use case. The main layer is hidden for better visualization. The dotted lines represent protocols (interfaces). Further explanations can be found on previous pages.',
                className: 'xl:max-w-[70rem]'
              },
            ],
            [
              {
                image: '/assets/main-projects/fit-home/architectureMainLayer.png',
                subtitle: 'Demonstration of the architecture of the Main layer for the SignUpController and how it interacts with the other layers.',
                className: 'md:max-w-[48rem]'
              },
              {
                text: 'Finally, all classes are instantiated, and the project as a whole is composed in the **main** layer. \n\n Additionally, the main layer is responsible for general configurations, routing, adapting Express to fit the presentation layer, and documentation using Swagger.',
                className: ''
              },
            ]
          ]
        },
        {
          name: 'Design Patterns',
          selectedPage: 0,
          pages: [
            [
  
              {
                text: 'The **Composite** pattern was used for the initial validation of the parameters sent in the request. \n\n The **Bridge** pattern was used to ensure decoupling between the layers of the architecture. For example, the data use case DbAddAccount receives an object of type AddAccountRepository, which can be any database. Note: In this application, it is the AccountMongoRepository related to MongoDB in the infrastructure layer. \n\n There is an **Adapter** to decouple each dependency of the project. \n\n A **Decorator** for logging was applied to each controller to record 500 errors in a separate collection in the database.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/designPatternsComposite.png',
                subtitle: 'Demonstration of how the composite was structured in the project, along with one of the used adapters. The dotted lines represent protocols (interfaces).',
                className: 'md:max-w-[43rem]'
              },
            ],
            [
              {
                text: 'The **Abstract Factory** pattern was used in conjunction with the Adapter to handle routes and middlewares, and the **Factory** pattern was used to assist in composition in the main layer and in the System Under Test (SUT) of each class in the project. \n\n The created MongoHelper object functions as a **Singleton** for connecting to and accessing database collections (JS/TS modules specifically work as Singletons, so it\'s sufficient to export the object). \n\n The **Strategy** pattern was used for composition in the main layer of all classes in the project, ensuring greater decoupling and flexibility to switch between different class variations. \n\n One can consider that the **Chain of Responsibility** pattern was used in the express middlewares (with the use of next()), as each middleware is responsible for executing a specific task and passing control to the next one in the chain.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/designPatternsAdapter.png',
                subtitle: 'Usage of the Adapter with the Abstract Factory in the practical redirection of routes. The auth is a middleware for the routes, which can be considered an application of the Chain of Responsibility.',
                className: 'sm:max-w-[32rem]'
              }
            ]
          ],
        },
        {
          name: 'Tests',
          selectedPage: 0,
          pages: [
            [
              
              {
                image: '/assets/main-projects/fit-home/testsUnit.png',
                subtitle: 'Unit tests for DbUpdateExercise, which is a use case in the data layer.',
                className: 'xl:max-w-[50rem]'
              },
              {
                text: 'The project has **100% test coverage** with both unit and integration tests. For each functional class, there is a corresponding unit test file, developed following the **Test-Driven Development (TDD)** methodology, where tests are written before implementing the functionality. \n\n The tests were developed using **Jest** and the **supertest** library for integration testing. They are divided into files with the .spec.ts extension for unit tests and .test.ts for integration tests. This separation allows running the commands "npm run test:unit" and "npm run test:integration" easily.',
                className: ''
              }
            ],
            [
              {
                image: '/assets/main-projects/fit-home/testsIntegration.png',
                subtitle: 'Simple integration test for the POST /signup route using supertest.',
                className: 'xl:max-w-[35rem]'
              },
              {
                image: '/assets/main-projects/fit-home/testsComposite.png',
                subtitle: 'Unit test for LoginValidation, which utilizes the Composite design pattern and is used for composition in the main layer.',
                className: 'xl:max-w-[48rem]'
              },
            ]
          ]
        },
        {
          name: 'Deploy',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'The deployment was performed on Amazon **AWS** using the **EC2** service. I chose to use EC2 instead of other services that configure automatically to demonstrate my knowledge. \n\n Since AWS does not have its own MongoDB service (there is DocumentDB, but it is a different variation), and I had already used EC2, I decided to implement my database on **MongoDB Atlas**, which is an official MongoDB service. \n\n To connect EC2 with MongoDB Atlas, I used a connection string (I didn\'t establish Network Peering with my AWS VPC or use PrivateLink since it incurs additional costs, but in a real scenario, it would be ideal for increased security and speed).',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/deployAWS.png',
                subtitle: 'Backend instance of the project running on AWS.',
                className: 'md:max-w-[28rem]'
              }
            ]
          ]
        }
      ]
    },
    {
      name: 'Frontend',
      subtheme: [
        {
          name: 'Design',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'Initially, I planned to work on the frontend only after deciding which technologies would be used and completing the backend. \n\n However, I needed to define how the project interface would look in order to build the backend architecture. This included the relationship between model and non-model exercises, their variations, sets, entity properties, and use cases. \n\n Therefore, I created a prototype of the mobile version using Figma to visualize how the project will look. This prototype will serve as a foundation when I develop the frontend.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/figma.png',
                subtitle: 'Prototype of the mobile version of the project.',
                className: 'xl:max-w-[55rem]'
              }
            ]
          ]
        }
      ]
    }
  ]
}];