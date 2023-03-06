import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { IChildrenProps } from '../interfaces';

export type ILanguageOptions = 'pt-br' | 'en';
type ILanguageNameOptions = 'Português' | 'English';
type ILanguageNames = {
  [key in ILanguageOptions]: ILanguageNameOptions;
};

interface ITranslation {
  [key: string]: string;
}

interface ILanguageContextData {
  language: string;
  changeLanguage: (lang: ILanguageOptions) => void;
  languageNames: ILanguageNames;
  translations: ITranslation;
}

const LanguageContext = createContext<ILanguageContextData>({} as ILanguageContextData);

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

const languageNames: ILanguageNames = {
  'pt-br': 'Português',
  'en': 'English'
};

export const LanguageProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [language, setLanguage] = useState<ILanguageOptions>('pt-br');
  const [translations, setTranslations] = useState<ITranslation>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/languages/${language}.json`);
      const json = await res.json();
      setTranslations(json);
    };
    loadTranslations();
  }, [language]);

  const changeLanguage = useCallback((language: ILanguageOptions) => {
    setLanguage(language);

  }, [setLanguage]);

  return (
    <LanguageContext.Provider 
      value={
        { 
          language,
          changeLanguage,
          languageNames,
          translations,  
        }
      }
    >
      { children }
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;