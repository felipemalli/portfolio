import { motion } from 'framer-motion';
import { ContentCardSection } from '../components/content-card-section/ContentCardSection';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';
import { InViewDiv } from '../utils/InViewDiv';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <main>
        <article className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
            <Header />
          </motion.div>
          <motion.div initial={{ opacity: 0.5, y: 700 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
            <IntroductionSection />
            <ContentCardSection />
          </motion.div>
          <img src="src/assets/background/circle.svg" className='absolute -top-[70%] left-[65%] 2xl:-top-[110%] -z-10 scale-125 invisible xl:visible' alt='Background circle'></img>
          {/* <img src="src/assets/background/circle.svg" className='absolute opacity-80 -top-[70%] left-[70%] 2xl:-top-[80%] -z-10 scale-125 invisible xl:visible' alt='Background circle'></img> */}
        </article>
        <div className='absolute -z-10 bg-[#E48383] mt-48 w-screen h-[60rem]'/>
        <article className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
          <section className='relative w-full mt-96 container'>
            <aside className='flex justify-start'>
              <InViewDiv translation='translateX(-400px)'>
                <div className='flex relative container w-[544px] right-0 h-[416px] rounded-tl-[200px] bg-[#fbfbfb] border border-[#E48383] text-[#2E3E4B]'>
                  <h2 className='absolute top-14 font-semibold text-4xl right-28'>
                About
                  </h2>
                  <div className='absolute flex flex-col items-center justify-center p-14 left-[72px] top-36 w-[628px] h-[320px] bg-[#fbfbfb] border-2 border-[#E48383] rounded-[50px] text-lg'>
                    <p>Me chamo Felipe Vahia Malliagros, 22 anos e moro no Rio de Janeiro, capital. Cursei metade da graduação de engenharia civil e resolvi mudar de carreira. Desde então, não parei de estudar programação. E é fácil, pois amo programar.
                    </p>
                    <p className='mt-2'>
                    Fiz estágio por 4 meses na Trybe. Com Scrum, criei e aprimorei conteúdos, exercícios, aulas e projetos. Envolveram HTML, CSS, JavaScript (ES6), React (Context, Redux), testes com Jest e React Testing Library. 
                    </p>
                  </div>
                </div>
              </InViewDiv>
            </aside>
            <aside className='flex justify-end'>
              <InViewDiv>
                <div className='flex relative container w-[544px] right-0 mt-12 h-[416px] rounded-tr-[200px] bg-[#fbfbfb] border border-[#E48383] text-[#2E3E4B]'>
                  <h2 className='absolute top-14 font-semibold text-4xl left-28'>
                Academics
                  </h2>
                  <div className='absolute flex flex-col items-center justify-center p-14 right-[72px] top-36 w-[628px] h-[320px] bg-[#fbfbfb] border-2 border-[#E48383] rounded-[50px] text-lg'>
                    <p>
                  Graduando em Ciências da Computação na UFF e me aprimorando em cloud e microsserviços. Além dos meus estudos pessoais, tenho intenção de alinhar o caminho dos meus estudos com as necessidades da empresa que eu estiver.
                    </p>
                    <p className='mt-2'>
                    Após muito tempo de estudo, já me sinto confiante para começar a trabalhar com qualquer tecnologia do mercado.
                    </p>
                  </div>
                </div>
              </InViewDiv>
            </aside>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
};