import React from 'react';
import { IAreaName, useChangeAreaContext } from '../../contexts';
import { IChildrenProps } from '../../interfaces';
import { moveScreenToCenterOfId } from '../../utils/moveScreenToCenterOfId';

interface NavOptionProps extends IChildrenProps {
  componentId: string;
  areaNameNav?: IAreaName;
  className?: string;
}

export const NavOption: React.FC<NavOptionProps> = ({ children, componentId, areaNameNav, className }: NavOptionProps) => {
  const { areaName, toggleChangeArea } = useChangeAreaContext();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    moveScreenToCenterOfId(e, componentId);
    if (areaNameNav && areaNameNav !== areaName) {
      toggleChangeArea();
    }
  };

  return (
    <a href={`#${componentId}`} className={`${className}`} onClick={(e) => handleClick(e)}>
      {children}
    </a>
  );
};