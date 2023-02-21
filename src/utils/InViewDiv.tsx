import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface IChildrenProps {
  children: React.ReactNode;
}

interface IInviewProps extends IChildrenProps {
  translation?: string,
  duration?: string,
  delay?: string,
}

export const InViewDiv: React.FC<IInviewProps> = ({ children, translation= 'translateX(400px)', duration= '0.9s', delay= '0.5s' }: IInviewProps ) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'none' : `${translation}`,
      transition: `all ${duration} ${delay}`
    }}>
      {children}
    </div>
  );
};
