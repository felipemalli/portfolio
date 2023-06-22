import { useLanguageContext } from '../../contexts';

export const PrincipalCardSection: React.FC = () => {

  const { translations } = useLanguageContext();
  
  return (
    <section>
      <h2 className='flex text-center items-center justify-center bg-primary-500 text-secondary-700 select-none h-16 md:h-20 w-screen md:w-fit font-medium text-2xl md:text-4xl px-6 md:rounded-t-3xl border border-customBlue-300'>
        PRINCIPAL PROJETO
      </h2>
      <div className='border-t-4 md:border-0 md:border-l-4 border-primary-500 h-fit -mt-1 px-4 md:pl-12 pt-14 pb-5'>
        <div className='h-full'>
          <div className='flex gap-5 lg:gap-14 flex-col lg:flex-row'>
            <h3 className='text-customBlue-900 text-5xl font-medium whitespace-nowrap self-start'>Fit Home</h3>
            <p className='text-3xl text-customBlue-500 self-end'>Solução fullstack para organizar e cronometrar exercícios físicos.</p>
          </div>
          <div className='flex gap-10 mt-8 flex-col md:flex-row md:items-center'>
            <select className="w-36 py-2 text-2xl font-light text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none">
              <option value="backend" selected className='text-2xl font-light bg-secondary-500 border-none'>Introdução</option>
              <option value="backend" className='text-2xl font-light bg-secondary-500 border-none'>Backend</option>
              <option value="frontend" className='text-2xl font-light bg-secondary-500'>Frontend</option>
            </select>
            {/* <div className='flex gap-6 text-lg font-light w-fit'>
              <button className='font-normal'>
                ARQUITETURA
              </button>
              <button className=''>
                TESTES
              </button>
              <button className='whitespace-nowrap'>
                DESIGN PATTERNS
              </button>
              <button className=''>
                DEPLOY
              </button>
            </div> */}
          </div>
          <div className='mt-10 text-xl text-customBlue-500 flex'>
            <div className='max-w-5xl'>
              <p>
                É comum ao fazer exercícios físicos em casa se perder no tempo, e esse projeto visa solucionar o problema e ainda organizar seu treino. A grande motivação para finalizá-lo é que eu sou o mais interessado em utilizá-lo.
                <br/>
                <br></br>
              O aplicativo terá um timer preciso que percorre cada repetição e os devidos tempos de descanso até concluir todas as séries do treino, tudo configurável pelo cliente.
                <br></br>
                <br></br>
              Após criar um exercício, ele vira um modelo, que poderá ser utilizado em quantas séries quiser. Logo, ao alterar a configuração, todas as séries que utilizam o mesmo modelo serão alteradas. Isso foi planejado para evitar desgaste do cliente ao precisar modificar em vários lugares caso deseje mudar alguma configuração (como aumento de dificuldade do exercício, por exemplo).
                <br></br>
                <br></br>
              Além disso, será possível configurar diferentes variações para o mesmo exercício e escolher a desejada em cada série. Cada uma delas, além da descrição, o cliente poderá definir um link personalizado que redireciona para um vídeo/blog ensinando como realizar tal variação.
                <br></br>
                <br></br>
              Após o término do projeto, ainda planejo adicionar exercícios já configurados que serão sugeridos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};