import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { useLanguageContext } from '../../contexts';
import { ptBrMainProjects } from '../../data/pt-br/main-project';
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
      setMainProjects(ptBrMainProjects);
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
  // const selectedContentPage = selectedSubTheme?.content.find(content => content. === subTheme);
  // console.log(selectedSubTheme);

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
      <div className={`hidden 2xl:flex flex-col justify-center ${className}`}>
        <img src={image} className={'bg-customGray-400 rounded-3xl border-2 border-customGray-500'}/>
        {subtitle && (
          <p className='text-sm px-5 pt-3'>
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

  return (
    <section>
      <h2 className='flex text-center items-center justify-center bg-primary-500 text-secondary-700 select-none h-16 md:h-20 w-screen md:w-fit font-medium text-2xl md:text-3xl px-6 md:rounded-t-3xl border border-customBlue-300'>
        PRINCIPAL PROJETO
      </h2>
      <div className='border-t-4 md:border-0 md:border-l-4 border-primary-500 h-fit -mt-1 px-8 md:pl-12 pt-8 md:pt-14 pb-5'>
        <div className='flex gap-5 2xl:gap-14 flex-col 2xl:flex-row'>
          <h3 className='text-customBlue-900 text-4xl md:text-5xl font-medium whitespace-nowrap self-start'>{selectedProject && selectedProject.name}</h3>
          <p className='text-xl md:text-3xl text-customBlue-500 2xl:self-end'>{selectedProject && selectedProject.description}</p>
        </div>
        <div className='flex gap-10 mt-8 flex-col md:flex-row md:items-center'>
          <select className="w-fit pr-1 py-2 md:text-2xl font-light text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none" 
            defaultValue={'Introduction'}
            onChange={(e) => {
              setSelectedThemeName(e.target.value);
            }}
          >
            {selectedProject?.theme.map((theme) => (
              <option key={theme.name} value={theme.name} className='md:text-2xl font-light bg-secondary-500'>{theme.name}</option>
            ))}
          </select>
          <div className='flex gap-6 text-lg font-light w-fit text-customBlue-700'>
            {selectedSubTheme?.name && selectedTheme && selectedTheme?.subtheme.map((subTheme) => (
              <button key={subTheme.name} className={`${subTheme.name === selectedSubTheme.name && 'font-medium'} whitespace-nowrap uppercase`}
                onClick={() => setSelectedSubThemeName(subTheme.name)}
              >
                {subTheme.name}
              </button>
            ))}
          </div>
        </div>
        {selectedSubTheme?.pages && selectedSubTheme?.pages.length > 1 && (
          <div className='flex justify-center gap-10 mt-1 mb-3 2xl:mt-2 2xl:-mb-1'>
            {selectedSubTheme?.pages.map((_, index) => (
              <button key={index} className={'w-10 h-10 rounded-full hover:bg-customGray-200 flex justify-center items-center'}
                onClick={() => setSelectedPage(index)}>
                <div className={`w-4 h-4 rounded-full ${index === selectedPage ? 'bg-customGray-300' : 'bg-customGray-600'}`}/>
              </button>
            ))}
          </div>
        )}
        {selectedThemeName && (
          <div className='text-customBlue-500 gap-10'>
            <div className='md:text-[18px] 2xl:py-5 flex gap-10'>
              {mainProjects.length && renderContent()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};