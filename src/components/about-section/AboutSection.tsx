import { InViewDiv } from '../../utils/InViewDiv';

export const AboutSection: React.FC = () => {
  return (
    <section className='relative w-full mt-96 2xl:container'>
      <aside className='flex justify-center lg:justify-start'>
        <InViewDiv translation='translateX(-400px)'>
          <div className='flex relative lg:container w-screen lg:w-[544px] h-[416px] lg:rounded-tl-[200px] bg-[#fbfbfb] lg:border border-[#E48383] text-[#2E3E4B]'>
            <h2 className='absolute top-14 font-semibold text-3xl lg:text-4xl right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-28'>
              About
            </h2>
            <div id='about' className='absolute flex flex-col items-center justify-center w-screen p-10 md:p-14 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[72px] top-36 w md:w-[628px] md:h-[320px] bg-[#fbfbfb] border-t-2 md:border-2 border-[#E48383] md:rounded-[50px] text-lg'>
              <p>
                Me chamo Felipe Vahia Malliagros, 22 anos e moro no Rio de Janeiro, capital. Cursei metade da graduação de engenharia civil e resolvi mudar de carreira. Desde então, não parei de estudar programação. E é fácil, pois amo programar.
              </p>
              <p className='mt-2'>
                Fiz estágio por 4 meses na Trybe. Com Scrum, criei e aprimorei conteúdos, exercícios, aulas e projetos. Envolveram HTML, CSS, JavaScript (ES6), React (Context, Redux), testes com Jest e React Testing Library. 
              </p>
            </div>
          </div>
        </InViewDiv>
      </aside>
      <aside className='flex justify-center lg:justify-end'>
        <InViewDiv>
          <div className='flex relative lg:container w-screen lg:w-[544px] h-[416px] lg:rounded-tr-[200px] bg-[#fbfbfb] lg:border border-[#E48383] text-[#2E3E4B] mt-72 sm:mt-56 2xl:mt-12 mb-10 sm:mb-0'>
            <h2 className='absolute top-14 font-semibold text-3xl lg:text-4xl left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-28'>
              Academics
            </h2>
            <div className='absolute flex flex-col items-center justify-center w-screen p-10 md:p-14 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-[72px] top-36 md:w-[628px] md:h-[320px] bg-[#fbfbfb] border-y-2 md:border-2 border-[#E48383] md:rounded-[50px] text-lg'>
              <p>
                Graduando em Ciências da Computação na UFF e me aprimorando em cloud e microsserviços. Além dos meus estudos pessoais, tenho intenção de alinhar o caminho dos meus estudos com as necessidades da empresa que eu estiver.
              </p>
              <p className='mt-2'>
                Após muito tempo de estudo, me sinto confiante para começar a trabalhar com qualquer tecnologia do mercado.
              </p>
            </div>
          </div>
        </InViewDiv>
      </aside>
    </section>
  );
};