import { useState } from 'react';

interface CardProps {
  
}

export const CardArrow: React.FC<{type: string, name: string}> = ({ type, name }: {type: string, name: string}) => {

  const [isAllowed, setIsAllowed] = useState<boolean>(false);

  return (
    <div className={`${isAllowed ? '' : 'cursor-not-allowed'}`}>

    </div>
  )
}
