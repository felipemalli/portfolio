import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { useLanguageContext, useMediaQueryContext } from '../../contexts';
import { ptBrMainProjects, enMainProjects } from '../../data';
import { IImageContent, IMainProject, ITextContent } from '../../interfaces/IMainCard';

export const MainProjectSection: React.FC = () => {
  const { translations, language } = useLanguageContext();
  const [selectedProjectName] = useState<string>('Fit Home');
  const [selectedThemeName, setSelectedThemeName] = useState<string>('');
  const [selectedSubThemeName, setSelectedSubThemeName] = useState<string>('');
  const [selectedPage, setSelectedPage] = useState<number>(0);

  const [mainProjects, setMainProjects] = useState<IMainProject[]>([]);

  const handleData = () => {
    if (language === 'pt-br') {
      setMainProjects(ptBrMainProjects);
    } else {
      setMainProjects(enMainProjects);
    }
  };
  
  useEffect(() => {
    handleData();
  }, [translations, language]);

  const selectedProject = mainProjects.find((project) => project.name === selectedProjectName);
  const selectedTheme = selectedProject?.theme.find((theme) => theme.name === selectedThemeName) || selectedProject?.theme[0];
  const selectedSubTheme = selectedTheme?.subtheme.find((subTheme) => subTheme.name === selectedSubThemeName) || selectedTheme?.subtheme[0];

  useEffect(() => {
    selectedTheme && setSelectedThemeName(selectedTheme?.name);
  }, [selectedTheme]);

  useEffect(() => {
    selectedSubTheme && setSelectedSubThemeName(selectedSubTheme?.name);
    selectedSubTheme && setSelectedPage(selectedSubTheme?.selectedPage);
  }, [selectedSubTheme]);

  const handleBold = (sentence: string): (string | JSX.Element)[] => {
    return sentence.split(/\*\*(.*?)\*\*/g).map((word, index) => (
      index % 2 === 1 ? (
        <strong key={index}>{word}</strong>
      ) : (
        word
      )
    ));
  };

  const handleBreakLine = (sentence: string, paragraphClassName: string): JSX.Element[] => {
    return sentence.split('\n').map((line, index) => (
      <>
        {line.length === 0 ? (
          <br/> 
        ) : (
          <p className={`max-w-4xl ${paragraphClassName}`} key={index}>
            {handleBold(line)}
          </p>
        )}
      </>
    ));
  };

  const renderTextContent = (content: ITextContent): ReactNode => {
    const textContent = content as ITextContent;
    const { text, className } = textContent;
    const formattedTextArray = handleBreakLine(text, className + ' max-w-4xl');
    const formattedTextGroup = (
      <div className='flex flex-col justify-center'>
        {formattedTextArray.map((fText) => fText)}
      </div>
    );
    return formattedTextGroup;
  };

  const renderImageContent = (content: IImageContent): ReactNode => {
    const imageContent = content as IImageContent;
    const { image, subtitle, className } = imageContent;
    const formattedImage = (
      <div className={`${!subtitle && 'hidden'} 2xl:flex flex-col align-middle justify-center `}>
        <img src={image} className={`flex g-customGray-400 rounded-3xl border-2 border-customGray-500 ${className}`}/>
        {subtitle && (
          <p className={`block text-sm px-5 pt-3 ${className}`}>
            {subtitle}
          </p>
        )}
      </div>
    );
    return formattedImage;
  };

  const renderContent = (): ReactNode => {
    const actualPage = (selectedSubTheme?.pages[selectedPage] || selectedSubTheme?.pages[0]) || [];
    return actualPage.map((content) =>
      ('text' in content && renderTextContent(content)) ||
      ('image' in content && renderImageContent(content))
    );
  };

  const { isXl } = useMediaQueryContext();

  return (
    <section>
      <h2 className='flex text-center items-center justify-center bg-primary-500 text-secondary-700 select-none h-16 md:h-20 w-screen md:w-fit font-medium text-xl md:text-3xl px-6 md:rounded-t-3xl border border-customBlue-300 uppercase'>
        {translations.main_project_title}
      </h2>
      <div className='border-t-4 md:border-0 md:border-l-4 border-primary-500 h-fit -mt-1 px-4 md:pl-12 pt-8 md:pt-14'>
        <div className='flex gap-5 2xl:gap-14 flex-col 2xl:flex-row'>
          <h3 className='text-customBlue-900 text-3xl md:text-[44px] font-medium whitespace-nowrap self-start'>{selectedProject && selectedProject.name}</h3>
          <p className='text-xl md:text-[26px] text-customBlue-500 2xl:self-end'>{selectedProject && selectedProject.description}</p>
        </div>
        <div className='flex gap-5 md:gap-10 mt-4 md:mt-8 flex-row'>
          <select className="w-fit pr-2 py-2 text-lg md:text-2xl font-light text-customBlue-700 md:text-gray-600 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none" 
            defaultValue={'Introduction'}
            onChange={(e) => {
              setSelectedThemeName(e.target.value);
            }}
          >
            {selectedProject?.theme.map((theme) => (
              <option key={theme.name} value={theme.name} className='text-lg md:text-2xl font-light bg-secondary-600 text-customBlue-700 md:text-gray-600'>{theme.name}</option>
            ))}
          </select>
          <label htmlFor="underline_select" className="sr-only">Underline select</label>
          {
            selectedTheme && selectedSubTheme?.name && (
              isXl ? (
                <div className='flex gap-6 text-lg font-light w-fit text-customBlue-700'>
                  {selectedTheme?.subtheme.map((subTheme) => (
                    <button key={subTheme.name} className={`${subTheme.name === selectedSubTheme.name && 'font-medium'} whitespace-nowrap uppercase hover:opacity-75`}
                      onClick={() => setSelectedSubThemeName(subTheme.name)}
                    >
                      {subTheme.name}
                    </button>
                  ))}
                </div>
              ) : (
                <select className="bg-transparent border-b-2 py-2 pr-2 text-sm md:text-lg font-light w-fit text-customBlue-700 md:text-gray-600 uppercase whitespace-nowrap self-end" 
                  onChange={(e) => {
                    setSelectedSubThemeName(e.target.value);
                  }}
                >
                  {selectedTheme?.subtheme.map((subTheme) => (
                    <option key={subTheme.name} value={subTheme.name} className='font-light text-customBlue-700 md:text-gray-600'>{subTheme.name}</option>
                  ))}
                </select>
              )
            )
          }
        </div>
        {selectedSubTheme?.pages && selectedSubTheme?.pages.length > 1 && (
          <div className='flex lg:-ml-40 xl:-ml-96 2xl:ml-0 justify-center gap-10 mt-4 xl:mt-2 -mb-4 md:-mb-6'>
            {selectedSubTheme?.pages.map((_, index) => (
              <button key={index} className={'w-10 h-10 rounded-full hover:bg-customGray-200 flex justify-center items-center transition-all duration-200 '}
                onClick={() => setSelectedPage(index)}>
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${index === selectedPage ? 'bg-customGray-300' : 'bg-customGray-600'}`}/>
              </button>
            ))}
          </div>
        )}
        {selectedThemeName && (
          <div className='text-customBlue-500 gap-10 mt-2 md:mt-5'>
            <div className='md:text-[18px] py-5 flex flex-col 2xl:flex-row gap-10'>
              {mainProjects.length && renderContent()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};