import React, { createContext, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IChildrenProps } from '../interfaces';
import { breakpoints } from '../utils';

type MediaQuery = {
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2xl: boolean
  is3xl: boolean
};

const MediaQueryContext = createContext<MediaQuery>({
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  is2xl: false,
  is3xl: false,
} as MediaQuery);

export const useMediaQueryContext = () => {
  return useContext(MediaQueryContext);
};

export const MediaQueryProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const isSm = useMediaQuery(breakpoints.isSm);
  const isMd = useMediaQuery(breakpoints.isMd);
  const isLg = useMediaQuery(breakpoints.isLg);
  const isXl = useMediaQuery(breakpoints.isXl);
  const is2xl = useMediaQuery(breakpoints.is2xl);
  const is3xl = useMediaQuery(breakpoints.is3xl);

  return (
    <MediaQueryContext.Provider 
      value={
        {
          isSm,
          isMd,
          isLg,
          isXl,
          is2xl,
          is3xl,
        }
      }>
      { children }
    </MediaQueryContext.Provider>
  );
};
