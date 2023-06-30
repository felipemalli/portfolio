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
                text: 'Ao fazer exercícios físicos em casa é comum se perder com o tempo, e esse é o problema principal que o projeto soluciona, além de montar uma agenda organizada dos seus treinos. O aplicativo terá um timer preciso que percorre o tempo de cada repetição e descanso de um exercício (configuráveis pelo cliente) até concluir todas as séries do treino. \n\n O cliente também tem liberdade de criar e configurar os exercícios, que podem virar um modelo e ser utilizados em quantas séries quiser. Logo, ao alterar uma configuração de um exercício, todas as séries em que ele estiver serão alteradas. Dessa forma, evita-se modificar em vários lugares para mudar alguma configuração (aumentar o peso, por exemplo). \n\n Além disso, será possível atribuir diferentes variações para o mesmo exercício e selecionar em cada série a variação desejada. O cliente ainda poderá definir um link personalizado que redireciona para um video/blog ensinando como realizar a variação, além da descrição.',
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
                text: 'A arquitetura do projeto segue os princípios do **DDD** e **Clean Architecture**, com camadas bem definidas e desacopladas aplicando inversão de dependências.  \n\n O objetivo foi criar um software mais flexível, escalável, fácil de testar. Dessa forma permite-se que tudo (regras de negócio, dependências, lógicas...) seja modificado e evoluído com menor impacto em outras partes do sistema (e com confiança, devido aos testes). \n\n Para aplicar esse modelo, diversos design patterns e conceitos de **POO**, **SOLID**, **DRY** (não repetir códigos), **YAGNI** (sem código desnecessário) e **KISS** (manter simplicidade) foram seguidos. \n\n Além do total desacoplamento, outro exemplo de flexibilidade e escalabilidade é a ausência de um model (entidade) genérico para o account. Realizei dessa forma para evitar propriedades opcionais desnecessárias com o crescimento do projeto. Logo, nesse caso, cada caso de uso possui seu próprio model.',
                className: ''
              }
            ],
            [
              {
                image: '/assets/main-projects/fit-home/architectureEntities.png',
                subtitle: 'Estrutura da entidade Workout e Exercise na aplicação.',
                className: 'sm:max-w-[34rem]'
              },


              {
                text: 'A camada do centro dessa arquitetura é a **domain**, onde as entidades, conceitos e regras de negócio (com seus casos de uso) são representadas, bem como as interações e comportamentos entre eles. \n\n Nela, a maioria das decisões e lógica de negócio é implementada. Isso ajuda a manter a separação de responsabilidades e facilita a evolução e manutenção do sistema ao longo do tempo.',
                className: '2xl:max-w-[20rem]'
              },
              {
                image: '/assets/main-projects/fit-home/architectureDomainUsecase.png',
                subtitle: 'Exemplo de um caso de uso do domínio.',
                className: 'w-[22rem]'
              },
            ],
            [
              {
                text: 'A camada **data** implementa as regras de negócio. Para que seja possível, segregar as responsabilidades em casos de uso específicos que podem ser implementados por dependências (como um banco de dados, por exemplo) na camada infra. \n\n A camada **infra** se conecta diretamente às dependências (frameworks, bibliotecas e bancos de dados). Dessa forma, consegue implementar os casos de uso da data e validation. \n\n A camada **presentation** utiliza as regras de negócio (protocolos do domínio, implementados pela data) e protocolos utilitários (nesse projeto, apenas implementados pela validation). Tem o papel de compor o resultado de cada rota e lidar com os erros por meio dos controladores e middlewares. \n\n A camada **validation** possui o papel de implementar um protocolo utilitário proposto pelo presentation à respeito de validações dos parâmetros passados pelo usuário. Em caso de necessidade, também propõe casos de uso a serem implementados por um framework na camada infra. ',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/architectureCleanArchDiagram.png',
                subtitle: 'Diagrama de uma versão do clean architecture similar a do projeto, com excessão da camada "Application". Ela pode ser considerada a camada "Data", que remove conexão da Infra ao Domain".',
                className: 'sm:max-w-[30rem]'
              },
            ],
            [
              {
                image: '/assets/main-projects/fit-home/architectureLayers.png',
                subtitle: 'Demonstração da arquitetura do projeto na prática, através do SignUpController seguindo o caminho do caso de uso Authentication. A camada main está oculta para melhor visualização. Os pontilhados são protocolos (interfaces). Mais explicações nas páginas anteriores.',
                className: 'xl:max-w-[70rem]'
              },
            ],
            [
              {
                image: '/assets/main-projects/fit-home/architectureMainLayer.png',
                subtitle: 'Demonstração da arquitetura da camada Main para o SignUpController e também como se dá sua interação com as demais camadas.',
                className: 'md:max-w-[48rem]'
              },
              {
                text: 'Por fim, todas as classes são instânciadas e há a composição do projeto como um todo na camada **main**. \n\n Além disso, ela é responsável pelas configurações gerais, rotas, adaptar o express para se adequar à camada presentation e a documentação com o Swagger.',
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
                text: 'O **Composite** foi utilizado para a validação inicial dos parâmetros enviados à requisição. \n\n O **Bridge** foi utilizado para garantir o desacoplamento entre as camadas da arquitetura. Por exemplo, o data usecase DbAddAccount recebe um objeto do tipo AddAccountRepository, que pode ser qualquer banco de dados. OBS: No caso dessa aplicação é o AccountMongoRepository referente ao MongoDB, no infra. \n\n Existe um **Adapter** para cada desacoplar cada dependência do projeto. \n\n Um **Decorator** de logs foi aplicado sobre cada controller para registrar os erros 500 em uma coleção separada no banco de dados.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/designPatternsComposite.png',
                subtitle: 'Demonstração de como foi estruturado o composite no projeto, além de um dos adapters utilizado. Os pontilhados são protocolos (interfaces).',
                className: 'md:max-w-[43rem]'
              },
            ],
            [
              {
                text: 'O **Abstract Factory** foi utilizado com o Adapter para lidar com as rotas e middlewares e o **Factory** para auxilixar a composição na camada principal e nos SUT (System Under Test) de cada classe do projeto. \n\n O objeto MongoHelper criado funciona como um **Singleton** para conexão e acesso às coleções do banco de dados (os módulos do JS/TS especificamente funcionam como Singleton, então basta exporta o objeto). \n\n O **Strategy** foi utilizado para a composição na camada principal de todas as classes do projeto, garantindo maior desacoplamento e flexibilidade para trocar cada variação de classe do projeto. \n\n Pode-se considerar que o **Chain of Responsability** foi utilizado nos middlewares do express (com o uso do next()), já que cada um é responsável por executar uma tarefa específica e passar o controle para o próximo na cadeia.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/designPatternsAdapter.png',
                subtitle: 'Uso do Adapter com o Abstract Factory no redirecionamento das rotas na prática. O auth é um middleware das rotas, que pode ser considerado como uma aplicação do Chain of Responsability.',
                className: 'sm:max-w-[32rem]'
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
                image: '/assets/main-projects/fit-home/testsUnit.png',
                subtitle: 'Testes unitários do DbUpdateExercise, que é um caso de uso da camada data.',
                className: 'xl:max-w-[50rem]'
              },
              {
                text: 'O projeto possui **100%** de **cobertura de testes** com testes unitários e de integração. Logo, para cada classe funcional existe um arquivo de teste unitário, que foi desenvolvido seguindo o **Desenvolvimento Orientado a Testes (TDD)**, onde testes foram criados antes das funcionalidades. \n\n  Os testes foram desenvolvidos com o **Jest** e a biblioteca **supertest** para os de integração. Eles foram divididos em arquivos com final .spec.ts para unitários e .test.ts de integração. Dessa forma, foi possível separar os comandos ”npm run test:unit” e ”npm run test:integration” facilmente.',
                className: ''
              }
            ],
            [
              {
                image: '/assets/main-projects/fit-home/testsIntegration.png',
                subtitle: 'Teste de integração simples da rota POST /signup com supertest.',
                className: 'xl:max-w-[35rem]'
              },
              {
                image: '/assets/main-projects/fit-home/testsComposite.png',
                subtitle: 'Teste unitário do LoginValidation, que utiliza o design pattern Composite e é utilizado para composição na camada principal.',
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
                text: 'O deploy foi realizado na Amazon **AWS** com o uso do serviço **EC2**. Utilizei ele ao invés de outros serviços que já fazem as configurações automaticamente para demonstrar meu conhecimento. \n\n Como a AWS não tem um serviço próprio para MongoDB (existe o DocumentDB, mas é uma variação diferente), e eu já tinha utilizado o EC2, resolvi implementar meu banco de dados no **MongoDB Atlas**, que é oficial. \n\n Assim, conectei o EC2 com o MongoDB Atlas através de uma connection string (não fiz Network Peering com minha VPC da AWS ou o uso do PrivateLink pois é pago, mas acredito que seria o ideal em um cenário real para maior segurança e velocidade).',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/deployAWS.png',
                subtitle: 'Instância do backend do projeto rodando na AWS.',
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
                text: 'De início, só planejava trabalhar no frontend após decidir quais seriam as tecnologias utilizadas e também concluir o backend. \n\n No entando, precisei definir como seria a interface do projeto para conseguir construir a arquitetura no backend. A relação entre os exercícios modelos e não modelos, suas variações, séries, propriedades de cada entidade e casos de uso. \n\n Logo, criei um protótipo da versão mobile no **Figma** de como ficará o projeto, que servirá como base para quando eu desenvolver o frontend.',
                className: ''
              },
              {
                image: '/assets/main-projects/fit-home/figma.png',
                subtitle: 'Protótipo da versão mobile do projeto.',
                className: 'xl:max-w-[55rem]'
              }
            ]
          ]
        }
      ]
    }
  ]
}];