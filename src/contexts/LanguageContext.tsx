import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { IChildrenProps } from '../interfaces';

type ILanguageOptions = 'pt-br' | 'en';

interface ITranslation {
  [key: string]: string;
}

interface ILanguageContextData {
  language: string;
  changeLanguage: (lang: ILanguageOptions) => void;
  translations: ITranslation;
}

const LanguageContext = createContext<ILanguageContextData>({} as ILanguageContextData);

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [language, setLanguage] = useState<ILanguageOptions>('pt-br');
  const [translations, setTranslations] = useState<ITranslation>({});

  useEffect(() => {
    const moduleUrl = new URL(import.meta.url);
    const jsonUrl = new URL('../data/languages/pt-br.json', moduleUrl);
    const loadTranslations = async () => {
      const res = await fetch(jsonUrl.href);
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
          translations,  
        }
      }
    >
      { children }
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;