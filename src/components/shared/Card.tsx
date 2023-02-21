import { useState } from 'react';
import { TechAreaButton } from './TechAreaButton';
const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[8px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));

export interface CardProps {
  key?: string,
  type: 'project' | 'course';
  name: string,
  image: string,
}
export type TechArea = 'frontend' | 'backend' | 'devops'
export interface FrameState {
  screen: 'photoFrame' | 'skillFrame' | 'infoFrame';
  page?: number,
  techArea?: TechArea
}


export const Card: React.FC<CardProps> = ({ key: cardKey, type, name, image }: CardProps) => {
  const [frame, setFrame] = useState<FrameState>({ screen: 'photoFrame' });

  const clickOnFrame = () => {
    if (frame.screen === 'photoFrame') setFrame({ screen: 'infoFrame' });
    if (frame.screen === 'infoFrame') setFrame({ screen: 'photoFrame' });
  };

  return (
    <div key={cardKey} className={`${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300  ${type === 'project' ? 'h-[14.3rem] bg-[#f9f9f9]' : 'h-[14.75rem] bg-[#f7f7f7]'}`}>
      <h3 className={`pointer-events-auto cursor-pointer flex items-center justify-center h-10 ${CARD_WIDTH} pt-1 text-gray-900 font-medium text-center hover:text-gray-600
      ${type === 'project' ? 'text-lg' : 'text-sm'}`}
      onClick={ () => setFrame({ screen: 'photoFrame' }) }
      >
        {name}
      </h3>
      <hr className='w-52 h-0.5 bg-[#d9d9d9] border-0 rounded m-0 p-0'></hr>
      <div onClick={clickOnFrame} className='flex items-center justify-center w-52 h-32 bg-[#d9d9d9] rounded-md cursor-pointer'>
        {frame.screen === 'photoFrame' && <img src={image} alt='Course image' className='bg-cover flex h-32 w-52 border rounded-lg'/>}
        {frame.screen === 'skillFrame' && <div>Skill Frame of {frame?.techArea}</div>}
        {frame.screen === 'infoFrame' && <div>Info Frame</div>}
      </div>
      <div className='flex space-x-2'>
        <TechAreaButton techAreaAbreviation='Front' techArea='frontend' enable={true} setFrame={setFrame}></TechAreaButton>
        <TechAreaButton techAreaAbreviation='Back' techArea='backend' enable={true} setFrame={setFrame}></TechAreaButton>
        <TechAreaButton techAreaAbreviation='Devops' techArea='devops' enable={true} setFrame={setFrame}></TechAreaButton>
      </div>
    </div>
  );
};
