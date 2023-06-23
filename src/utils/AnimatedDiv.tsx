import { useEffect, useState } from 'react';
import { IChildrenProps } from '../interfaces';

interface IAnimatedDivProps extends IChildrenProps {
  className?: string
  reference?: React.MutableRefObject<HTMLDivElement | null>
  animationState?: string
  propertyChanged?: undefined
  initialAnimation?: string
  finalAnimation?: string
  duration?: string
  delay?: string
  zindex?: number
  position?: 'relative' | 'absolute'
}

export const AnimatedDiv: React.FC<IAnimatedDivProps> = ({ children, className, reference, animationState, initialAnimation, finalAnimation, duration, delay, position, zindex }: IAnimatedDivProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!animationState) {
      setIsMounted(true);
    }
    if (animationState === 'start') {
      setIsMounted(true);
    } 
    if (animationState === 'stop') {
      setIsMounted(false);
    }
  }, [animationState]);

  return (
    <div 
      ref={reference} 
      className={`transition-all ${delay || ''} ${duration || 'duration-150'} transform ${isMounted ? `${finalAnimation}` : `${initialAnimation}`} ${className} ease-in-out`}
      style={{ position: position, zIndex: zindex }}>
      {children}
    </div>
  );
};