import { createContext, useCallback, useContext, useState } from 'react';
import { IChildrenProps } from '../interfaces';

type AreaName = 'knowledge' | 'skills'

interface IChangeAreaContextData {
  areaName: AreaName;
  toggleChangeArea: () => void;
}

const ChangeAreaContext = createContext({} as IChangeAreaContextData);

export const useChangeAreaContext = () => {
  return useContext(ChangeAreaContext);
};

export const ChangeAreaProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [areaName, setChangeAreaName] = useState<AreaName>('knowledge');

  const toggleChangeArea = useCallback(() => {
    setChangeAreaName((oldAreaName) => oldAreaName === 'knowledge' ? 'skills' : 'knowledge');
  }, []);

  return (
    <ChangeAreaContext.Provider 
      value={ 
        {
          areaName,
          toggleChangeArea, 
        } 
      }
    >
      { children } 
    </ChangeAreaContext.Provider>
  );
};