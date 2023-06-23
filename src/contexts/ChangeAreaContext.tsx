import { createContext, useCallback, useContext, useState } from 'react';
import { IChildrenProps } from '../interfaces';

export type IAreaName = 'knowledge' | 'skills'

interface IChangeAreaContextData {
  areaName: IAreaName
  toggleChangeArea: () => void
}

const ChangeAreaContext = createContext({} as IChangeAreaContextData);

export const useChangeAreaContext = () => {
  return useContext(ChangeAreaContext);
};

export const ChangeAreaProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [areaName, setChangeAreaName] = useState<IAreaName>('knowledge');

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