import React from 'react';
import { IChildrenProps } from '../../interfaces';
import { openUrl } from '../../utils/openUrl';

interface NavOptionLinkProps extends IChildrenProps {
  url: string;
  className?: string;
}

export const NavOptionLink: React.FC<NavOptionLinkProps> = ({ children, url, className }: NavOptionLinkProps) => {
  return (
    <a className={`${className} cursor-pointer`} onClick={() => openUrl(url)}>
      {children}
    </a>
  );
};