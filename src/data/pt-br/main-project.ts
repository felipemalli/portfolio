import { IMainProject } from '../../interfaces/IMainCard';

export const ptBrMainProjects: IMainProject[] = [{
  name: 'Fit Home',
  description: 'Solução fullstack para organizar e cronometrar exercícios físicos.',
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
                text: 'Ao fazer exercícios físicos em casa é comum se perder com o tempo, e esse é o problema principal que o projeto soluciona, além de montar uma agenda organizada dos seus treinos. O aplicativo terá um timer preciso que percorre o tempo de cada repetição e descanso de um exercício (configuráveis pelo cliente) até concluir todas as séries do treino. \n\n O cliente também tem liberdade de criar e configurar os exercícios, que viram um modelo e podem ser utilizados em quantas séries quiser. Logo, ao alterar uma configuração de um exercício, todas as séries em que ele estiver serão alteradas. Dessa forma, evita-se modificar em vários lugares para mudar alguma configuração (aumentar o peso, por exemplo). \n\n Além disso, será possível atribuir diferentes variações para o mesmo exercício e selecionar em cada série a variação desejada. O cliente ainda poderá definir um link personalizado que redireciona para um video/blog ensinando como realizar a variação, além da descrição.',
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
                text: 'Architecture page 1 first text',
                className: ''
              },
              {
                text: 'Architecture page 1 second text',
                className: ''
              },
              {
                text: 'Architecture page 1 third text',
                className: ''
              }
            ],
            [
              {
                text: 'Architecture page 2 first text',
                className: ''
              },
              {
                text: 'Architecture page 2 second text',
                className: ''
              },
              {
                text: 'Architecture page 2 third text',
                className: ''
              }
            ],
          ]
        },
        {
          name: 'Design Patterns',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'O **Composite** foi utilizado para a validação inicial dos parâmetros enviados à requisição. \n\n O **Bridge** foi utilizado para garantir o desacoplamento entre as camadas da arquitetura. Por exemplo, o data usecase DbAddAccount recebe um objeto do tipo AddAccountRepository, que pode ser qualquer banco de dados. OBS: No caso dessa aplicação, apenas tenho o AccountMongoRepository no infra (referente ao MongoDB). \n\n Existe um **Adapter** para cada desacoplar cada dependência do projeto. \n\n Um **Decorator** de logs foi aplicado sobre cada controller para registrar os erros 500 em uma coleção separada no banco de dados.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/architectureComposite.png',
                subtitle: 'Demonstração de como foi estruturado o composite no projeto, além de um dos adapters utilizado. Os pontilhados são interfaces.',
                className: 'w-[60rem]'
              }
            ],
            [
              {
                text: 'O **Abstract Factory** foi utilizado com o Adapter para lidar com as rotas e middlewares e o **Factory** para auxilixar a composição na camada principal e nos SUT (System Under Test) de cada classe do projeto. \n\n O objeto MongoHelper criado funciona como um **Singleton** para conexão e acesso às coleções do banco de dados (os módulos do JS/TS especificamente funcionam como Singleton, então basta exporta o objeto). \n\n O **Strategy** foi utilizado para a composição na camada principal de todas as classes do projeto, garantindo maior desacoplamento e flexibilidade para trocar cada variação de classe do projeto. \n\n Pode-se considerar que o **Chain of Responsability** foi utilizado nos middlewares do express (com o uso do next()), já que cada um é responsável por executar uma tarefa específica e passar o controle para o próximo na cadeia.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/architectureAdapter.png',
                subtitle: 'Demonstração de como foi estruturado o composite no projeto, além de um dos adapters utilizado. Os pontilhados são interfaces.',
                className: 'w-[60rem]'
              }
            ]
          ],
        },
        {
          name: 'Testes',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'Testes text',
                className: ''
              }
            ]
          ]
        },
        {
          name: 'Deploy',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'Deploy text',
                className: ''
              }
            ]
          ]
        },
      ]
    },
    {
      name: 'Frontend',
      subtheme: [
        {
          name: 'In Progress',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'In Progress text',
                className: ''
              }
            ]
          ]
        },
        {
          name: 'Figma',
          selectedPage: 0,
          pages: [
            [
              {
                text: 'Figma text',
                className: ''
              }
            ]
          ]
        }
      ]
    }
  ]
}];