import { InViewDiv } from '../../utils/InViewDiv';

export const AboutSection: React.FC = () => {
  return (
    <section className='flex-col mt-96 mx-auto md:mx-0 overflow-hidden'>
      <aside id='about' className='flex relative justify-center md:flex-none md:justify-start md:px-6 lg:px-16 2xl:px-[12vw]'>
        <InViewDiv translation='translateX(-200px)'>
          <div className='flex-col relative w-[85vw] md-w-auto'>
            <div className='relative
            
            md:w-[544px] md:-mr-20 min-h-[416px]
            
            md:rounded-tl-[200px] bg-secondary-500 lg:border border-primary-300 -z-10'>
              <h2 className='absolute top-14 font-semibold text-3xl md:text-4xl right-1/2 translate-x-1/2 md:translate-x-0 md:right-28 text-customBlue-700'>
              About
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center z-10 
            
            md:w-[628px] md:h-[320px] -mt-72 md:ml-20
            
            bg-secondary-500 border-2 border-primary-300 md:rounded-[50px] text-base text-customBlue-700 p-10 md:p-14 '>
              <p>
                My name is Felipe Vahia Malliagros, 22 years old and I live in Rio de Janeiro, the capital. I attended half of the degree in civil engineering and decided to change careers. Since then, I haven{'\''}t stopped studying programming. And it{'\''}s easy, because I love programming.
              </p>
              <p className='mt-2'>
                I did an internship for 4 months at Trybe. With Scrum, I created and improved content, exercises, classes and projects. They involved HTML, CSS, JavaScript (ES6), React (Context, Redux), tests with Jest and React Testing Library. 
              </p>
            </div>
          </div>
        </InViewDiv>
        <div className="absolute h-1/2 -bottom-1/2 right-0 w-screen bg-primary-300 -z-20" />
      </aside>
      <aside className='flex relative justify-center md:justify-end items-end mt-36 md:mt-52 2xl:mt-6 md:px-6 lg:px-16 2xl:px-[12vw]'>
        <InViewDiv delay='1s'>
          <div className='flex-col w-[85vw] md:w-auto'>
            <div className='relative
            
              md:w-[544px] md:-ml-20 min-h-[416px]
              
              md:rounded-tr-[200px] bg-secondary-500 lg:border border-primary-300 -z-10'>
              <h2 className='absolute top-14 font-semibold text-3xl md:text-4xl left-1/2 -translate-x-1/2 md:translate-x-0 md:left-28 text-customBlue-700'>
              Academics
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center z-10 
            
            md:w-[628px] md:h-[320px] -mt-72 md:-ml-60
            
            bg-secondary-500 border-2 border-primary-300 md:rounded-[50px] text-base text-customBlue-700 p-10 md:p-14 '>
              <p>
                Graduating in Computer Science at UFF and improving myself in cloud and microservices. In addition to my personal studies, I intend to align the path of my studies with the needs of the company I work for.
              </p>
              <p className='mt-2'>
                After a long time of study, I feel confident to work with any technology on the market.
              </p>
            </div>
          </div>
        </InViewDiv>
      </aside>
      {/* <div className="absolute h-3/5 top-0 right-0 w-screen bg-primary-300 -z-20" /> */}
    </section>
  );
};