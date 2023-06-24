import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLanguageContext } from '../../contexts';
import { ptBrMainProjects } from '../../data/pt-br/main-project';
import { IMainProject, ITextContent } from '../../interfaces/IMainCard';

export const MainProjectSection: React.FC = () => {
  const { translations, language } = useLanguageContext();
  const [selectedProjectName] = useState<string>('Fit Home');
  const [selectedThemeName, setSelectedThemeName] = useState<string>('');
  const [selectedSubThemeName, setSelectedSubThemeName] = useState<string>('');
  const [contentPage, setContentPage] = useState<number>(0);

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
    selectedSubTheme && setContentPage(selectedSubTheme?.contentPage);
  }, [selectedSubTheme]);
  // const selectedContentPage = selectedSubTheme?.content.find(content => content. === subTheme);
  // console.log(selectedSubTheme);

  const formatText = () => {
    const firstContent = (selectedSubTheme?.content[contentPage] || selectedSubTheme?.content[0]) as ITextContent;
    const firstText = firstContent.text;
    const formattedText = firstText.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
    return formattedText;
  };

  return (
    <section>
      <h2 className='flex text-center items-center justify-center bg-primary-500 text-secondary-700 select-none h-16 md:h-20 w-screen md:w-fit font-medium text-2xl md:text-3xl px-6 md:rounded-t-3xl border border-customBlue-300'>
        PRINCIPAL PROJETO
      </h2>
      <div className='border-t-4 md:border-0 md:border-l-4 border-primary-500 h-fit -mt-1 px-8 md:pl-12 pt-8 md:pt-14 pb-5'>
        <div className='2xl:h-[559px]'>
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
          {selectedThemeName && (
            <div className='mt-10 text-customBlue-500 flex gap-10'>
              <div className='hidden 2xl:block'>
                <img src={'/assets/projects/fithomeOriginal.webp'} alt='Card image' className='bg-customGray-400 rounded-3xl border-2 border-customGray-500 h-96 w-[26rem]'/> 
              </div>
              <div className='max-w-4xl md:text-[18px] 2xl:py-5'>
                <p>
                  {mainProjects.length && formatText()}
                </p>
              </div>
            </div>
          )}
        </div>
        {selectedSubTheme?.content && selectedSubTheme?.content.length > 1 && (
          <div className='flex justify-center gap-10 mt-8'>
            {selectedSubTheme?.content.map((_, index) => (
              <button key={index} className={`w-6 h-6 rounded-full ${index === contentPage ? 'bg-customGray-300' : 'bg-customGray-600'}`}
                onClick={() => setContentPage(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};