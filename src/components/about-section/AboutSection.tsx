import { InViewDiv } from '../../utils/InViewDiv';

export const AboutSection: React.FC = () => {
  return (
    <section className='flex-col mt-96 mx-auto md:mx-0'>

      <aside id='about' className='flex relative justify-center md:flex-none md:justify-start'>
        <InViewDiv translation='translateX(-400px)'>
          <div className='flex-col relative w-[85vw] md-w-auto'>
            <div className='relative
            
            md:w-[544px] md:-mr-20 min-h-[416px]
            
            md:rounded-tl-[200px] bg-secondary-500 lg:border border-primary-300 -z-10'>
              <h2 className='absolute top-14 font-semibold text-3xl md:text-4xl right-1/2 translate-x-1/2 md:translate-x-0 md:right-28 text-[#2E3E4B]'>
              About
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center z-10 
            
            md:w-[628px] md:h-[320px] -mt-72 md:ml-20
            
            bg-secondary-500 border-2 border-primary-300 md:rounded-[50px] text-lg text-[#2E3E4B] p-10 md:p-14 '>
              <p>
                Me chamo Felipe Vahia Malliagros, 22 anos e moro no Rio de Janeiro, capital. Cursei metade da graduação de engenharia civil e resolvi mudar de carreira. Desde então, não parei de estudar programação. E é fácil, pois amo programar.
              </p>
              <p className='mt-2'>
                Fiz estágio por 4 meses na Trybe. Com Scrum, criei e aprimorei conteúdos, exercícios, aulas e projetos. Envolveram HTML, CSS, JavaScript (ES6), React (Context, Redux), testes com Jest e React Testing Library. 
              </p>
            </div>
          </div>
          <div className="absolute h-1/2 -bottom-1/2 right-0 w-screen bg-primary-300 -z-20" />
        </InViewDiv>
      </aside>
      <aside className='flex relative justify-center md:justify-end items-end mt-36 md:mt-52 2xl:mt-6'>
        <InViewDiv delay='1s'>
          <div className='flex-col w-[85vw] md:w-auto'>
            <div className='relative
            
              md:w-[544px] md:-ml-20 min-h-[416px]
              
              md:rounded-tr-[200px] bg-secondary-500 lg:border border-primary-300 -z-10'>
              <h2 className='absolute top-14 font-semibold text-3xl md:text-4xl left-1/2 -translate-x-1/2 md:translate-x-0 md:left-28 text-[#2E3E4B]'>
              Academics
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center z-10 
            
            md:w-[628px] md:h-[320px] -mt-72 md:-ml-60
            
            bg-secondary-500 border-2 border-primary-300 md:rounded-[50px] text-lg text-[#2E3E4B] p-10 md:p-14 '>
              <p>
                Graduando em Ciências da Computação na UFF e me aprimorando em cloud e microsserviços. Além dos meus estudos pessoais, tenho intenção de alinhar o caminho dos meus estudos com as necessidades da empresa que eu estiver.
              </p>
              <p className='mt-2'>
              Após muito tempo de estudo, me sinto confiante para começar a trabalhar com qualquer tecnologia do mercado. 
              </p>
            </div>
          </div>
        </InViewDiv>
        <div className="absolute h-3/5 top-0 right-0 w-screen bg-primary-300 -z-20" />
      </aside>
    </section>
  );
};