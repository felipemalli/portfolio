import React, { useContext, useState } from 'react';
import { IChildrenProps } from '../interfaces';

interface ISearchContextData {
  search: string;
  setSearch: (value: string) => void;
}

const SearchContext = React.createContext({} as ISearchContextData);

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider 
      value={
        {
          search,
          setSearch,
        }
      }>
      { children }
    </SearchContext.Provider>
  );
};