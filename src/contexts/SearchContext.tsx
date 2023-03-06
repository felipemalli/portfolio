import React, { useContext, useState } from 'react';
import { ICheckboxProps, useCheckbox } from '../hooks';
import { IChildrenProps } from '../interfaces';

interface ISearchContextData {
  search: string;
  setSearch: (value: string) => void;
  applyFiltersBoolean: boolean;
  setApplyFiltersBoolean: (value: boolean) => void;
  checkboxes: ICheckboxProps[];
  handleCheckboxChange: (id: number) => void;
  defineCheckBoxes: (isChecked: boolean) => void;
}

const SearchContext = React.createContext({} as ISearchContextData);

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const checkboxInitialValues = [
    { id: 1, value: 'frontend', label: 'FrontEnd', isChecked: true },
    { id: 2, value: 'backend', label: 'BackEnd', isChecked: true },
    { id: 3, value: 'devops', label: 'DevOps', isChecked: true },
  ];

  const [search, setSearch] = useState<string>('');
  const [applyFiltersBoolean, setApplyFiltersBoolean] = useState<boolean>(false);
  const { checkboxes, handleCheckboxChange, defineCheckBoxes } = useCheckbox(checkboxInitialValues);

  return (
    <SearchContext.Provider 
      value={
        {
          search,
          setSearch,
          applyFiltersBoolean,
          setApplyFiltersBoolean,
          checkboxes,
          handleCheckboxChange,
          defineCheckBoxes,
        }
      }>
      { children }
    </SearchContext.Provider>
  );
};