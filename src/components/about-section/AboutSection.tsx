import { useLanguageContext } from '../../contexts';
import { InViewDiv } from '../../utils/InViewDiv';

export const AboutSection: React.FC = () => {

  const { translations } = useLanguageContext();
  
  return (
    <section className='flex-col mt-[10rem] mx-auto md:mx-0 overflow-hidden'>
      <aside id='about' className='flex relative justify-center md:flex-none md:justify-start md:px-6 lg:px-16 3xl:px-[200px]'>
        <InViewDiv translation='translateX(-200px)'>
          <div className='flex-col relative w-[85vw] md-w-auto'>
            <div className='relative
            
            md:w-[544px] md:-mr-20 min-h-[416px]
            
            md:rounded-tl-[200px] bg-secondary-500 border border-primary-300 -z-10'>
              <h2 className='absolute top-14 font-semibold text-3xl md:text-4xl right-1/2 translate-x-1/2 md:translate-x-0 md:right-28 text-customBlue-700'>
                {translations.about_first_card_title}
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center z-10 
            
            md:w-[628px] min-h-[290px] md:h-[320px] -mt-72 md:ml-20
            
            bg-secondary-500 border-2 border-primary-300 md:rounded-[50px] text-base text-customBlue-700 p-10 md:p-14'>
              <p>
                {translations.about_first_card_first_paragraph}
              </p>
              <p className='mt-2'>
                {translations.about_first_card_second_paragraph}
              </p>
            </div>
          </div>
        </InViewDiv>
        <div className="absolute h-2/3 -bottom-[45%] right-0 w-screen bg-primary-300 -z-20" />
      </aside>
      <aside className='flex relative justify-center md:justify-end items-end mt-36 md:mt-52 2xl:mt-6 md:px-6 lg:px-16 3xl:px-[200px]'>
        <InViewDiv translation = 'translateX(200px)'>
          <div className='flex-col w-[85vw] md:w-auto'>
            <div className='relative
            
              md:w-[544px] md:-ml-20 min-h-[416px]
              
              md:rounded-tr-[200px] bg-secondary-500 border border-primary-300 -z-10'>
              <h2 className='absolute top-14 font-semibold text-3xl md:text-4xl left-1/2 -translate-x-1/2 md:translate-x-0 md:left-28 text-customBlue-700'>
                {translations.about_second_card_title}
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center z-10 
            
            md:w-[628px] md:h-[320px] -mt-72 md:-ml-60
            
            bg-secondary-500 border-2 border-primary-300 md:rounded-[50px] text-base text-customBlue-700 p-10 md:p-14'>
              <p> 
                {translations.about_second_card_first_paragraph} 
              </p>
              <p className='mt-2'>
                {translations.about_second_card_second_paragraph}
              </p>
            </div>
          </div>
        </InViewDiv>
        <div className=" md:hidden absolute h-3/5 top-[25%] right-0 w-screen bg-primary-300 -z-20" />
      </aside>
    </section>
  );
};