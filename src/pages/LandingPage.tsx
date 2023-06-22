import { useRef, useState } from 'react';
import { AboutSection } from '../components/about-section/AboutSection';
import { ContentCardSection } from '../components/content-card-section/ContentCardSection';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';
import { useOnScreen } from '../hooks';
import { AnimatedDiv } from '../utils';

export const LandingPage: React.FC = () => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <main ref={ref}>
      {!isImageLoaded && <img src='/assets/background/felipeEmpty.webp' className='hidden' onLoad={() => setIsImageLoaded(true)} alt='Felipe image'/>}
      {isOnScreen && isImageLoaded && (
        <>
          <article>
            <AnimatedDiv initialAnimation='-translate-y-24' finalAnimation='translate-y-0' duration='duration-1800' position='relative' zindex={10}>
              <Header />
            </AnimatedDiv><AnimatedDiv className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto' initialAnimation='translate-y-170 opacity-50' finalAnimation='translate-y-0 opacity-100' duration='duration-1900' position='relative' zindex={0}>
              <IntroductionSection />
              <ContentCardSection />
            </AnimatedDiv>
          </article>
          <article className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:mx-auto mt-44'>
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
                  <div className='flex gap-6 mt-4 flex-col sm:flex-row'>
                    <label htmlFor="underline_select" className="sr-only">Technology select</label>
                    <select id="underline_select" className="w-36 py-2 text-2xl font-light text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none">
                      <option value="backend" selected className='text-2xl font-light bg-secondary-500 border-none'>Introdução</option>
                      <option value="backend" className='text-2xl font-light bg-secondary-500 border-none'>Backend</option>
                      <option value="frontend" className='text-2xl font-light bg-secondary-500'>Frontend</option>
                    </select>
                  </div>
                  <div className='mt-10 h-[30rem] text-xl text-customBlue-500 flex'>
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
                        Além disso, será possível configurar diferentes variações para o mesmo exercício e cada série poderá escolher a variação desejada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
          <div className='absolute bg-primary-300 mt-[15rem] w-screen h-[50rem] sm-[h-60rem] md:h-[59rem] 2xl:h-[47.5rem] -z-10'/>
          <article className='mx-auto 3xl:w-[114.938rem]'>
            <AboutSection />
          </article>
          <Footer />
        </>
      )}
      <div className='absolute -top-1 w-10 -z-10 invisible xl:visible'>
        <div className="relative overflow-hidden -z-10 w-screen h-[100vw]">
          <img src='/assets/background/circle.svg' className='absolute top-0 left-1/2 -z-10 w-[50vw] h-[60vw]' alt='Background circle'></img>
        </div>
      </div>
    </main>
  );
};