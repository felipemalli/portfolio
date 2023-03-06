import { useEffect, useRef, useState } from 'react';
import { ILanguageOptions, useLanguageContext } from '../../../contexts';

export interface ILanguageButtonProps {
  className: string;
  setIsRenderLanguage?: (arg: boolean) => void;
  hasText?: boolean;
}

export const LanguageButton: React.FC<ILanguageButtonProps> = ({ className, hasText, setIsRenderLanguage }: ILanguageButtonProps) => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (languageRef.current && languageRef.current !== event.target && !languageRef.current.contains(event.target as Node)) {
      setIsOpenLanguage(false);
      if (setIsRenderLanguage) {
        setIsRenderLanguage(false);
      }
    }
  };
  
  const { translations, changeLanguage, languageNames, language } = useLanguageContext();

  return (
    <div ref={languageRef} className={`${className} md:hover:scale-105`}>
      <button className={`flex h-10 items-center ${hasText ? 'justify-end' : 'justify-center'} space-x-[5px] xl:w-full w-10 h-10 hover:bg-customGray-200 md:hover:bg-secondary-500 rounded-full -ml-2 xl:ml-0`}
        onClick={ () => setIsOpenLanguage(!isOpenLanguage)}>
        {hasText && <p className='font-semibold text-customBlue-500 uppercase text-sm -mb-1 tracking-widest'>{translations.language}</p>}
        <img className='flex h-6 w-6' src='./assets/icons/languageGlobe.svg' alt='Language icon'/>
      </button>
      <div className='absolute top-10 left-1/2 -translate-x-1/2 flex flex-col gap-1'>
        {isOpenLanguage && Object.entries(languageNames).map(([languageShort, languageName]) => (
          <button key={languageShort} className={`${languageShort === language && 'text-customGray-600 bg-secondary-500 cursor-not-allowed'} border-b hover:bg-customGray-200 w-full px-2 pt-3 pb-2 font-medium text-customBlue-500 uppercase text-sm -mb-1`}
            onClick={() => {
              changeLanguage(languageShort as ILanguageOptions);
              setIsOpenLanguage(false);
              if (setIsRenderLanguage) {
                setIsRenderLanguage(false);
              }
            }}
          >
            {languageName}
          </button>
        ))}
      </div>
    </div>
  );
};
