import { useLanguageContext } from '../../contexts';

export const PrincipalCardSection: React.FC = () => {

  const { translations } = useLanguageContext();
  
  return (
    <section>
      <h2 className='flex text-center items-center justify-center bg-primary-500 text-secondary-700 select-none h-16 md:h-20 w-screen md:w-fit font-medium text-2xl md:text-3xl px-6 md:rounded-t-3xl border border-customBlue-300'>
        PRINCIPAL PROJETO
      </h2>
      <div className='border-t-4 md:border-0 md:border-l-4 border-primary-500 h-fit -mt-1 px-8 md:pl-12 pt-8 md:pt-14 pb-5'>
        <div className='h-full'>
          <div className='flex gap-5 2xl:gap-14 flex-col 2xl:flex-row'>
            <h3 className='text-customBlue-900 text-4xl md:text-5xl font-medium whitespace-nowrap self-start'>Fit Home</h3>
            <p className='text-xl md:text-3xl text-customBlue-500 2xl:self-end'>Solução fullstack para organizar e cronometrar exercícios físicos.</p>
          </div>
          <div className='flex gap-10 mt-8 flex-col md:flex-row md:items-center'>
            <select className="w-36 py-2 md:text-2xl font-light text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none">
              <option value="backend" selected className='md:text-2xl font-light bg-secondary-500 border-none'>Introdução</option>
              <option value="backend" className='md:text-2xl font-light bg-secondary-500 border-none'>Backend</option>
              <option value="frontend" className='md:text-2xl font-light bg-secondary-500'>Frontend</option>
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
          <div className='mt-10 text-customBlue-500 flex gap-10'>
            <div className='w-full hidden 2xl:block'>
              <img src={'/assets/projects/fithomeOriginal.webp'} alt='Card image' className='bg-customGray-400 rounded-3xl border-2 border-customGray-500  h-full w-full'/> 
            </div>
            <div className='max-w-4xl md:text-[18px] 2xl:py-5'>
              <p>
                É comum ao fazer exercícios físicos em casa se perder com o tempo, e esse é o problema principal que o projeto soluciona, além de montar uma agenda organizada dos seus treinos.
          
                O aplicativo terá um timer preciso que percorre o tempo de cada repetição e descanso de um exercício (configuráveis pelo cliente) até concluir todas as séries do treino.
                <br></br>
                <br></br>
                O cliente também tem liberdade de criar e configurar os exercícios, que viram um modelo e podem ser utilizados em quantas séries quiser. Logo, ao alterar uma configuração de um exercício, todas as séries em que ele estiver serão alteradas. Dessa forma, evita-se modificar em vários lugares para mudar alguma configuração (aumentar o peso, por exemplo).
                <br></br>
                <br></br>
                Além disso, será possível atribuir diferentes variações para o mesmo exercício e selecionar em cada série a variação desejada. O cliente ainda poderá definir um link personalizado que redireciona para um video/blog ensinando como realizar a variação, além da descrição.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};