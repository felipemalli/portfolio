import { useEffect, useRef, useState } from 'react';
import { IChildrenProps } from '../interfaces';

interface IInViewProps extends IChildrenProps {
  translation?: string;
  duration?: string;
  delay?: string;
}

export const InViewDiv: React.FC<IInViewProps> = ({ children, translation = 'translateX(400px)', duration = '0.9s', delay = '0.5s'}: IInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : `${translation}`,
        transition: `all ${duration} ${delay}`,
      }}
    >
      {children}
    </div>
  );
};