import { useState } from 'react';
import { ICourse } from '../../data/courses';
import { IProject } from '../../data/projects';
import { TechAreaButtonGroup } from './TechAreaButtonGroup';
const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[8px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));


export interface ICardProps {
  key: string,
  card: IProject | ICourse,
  type: 'project' | 'course',
}

export type ITechArea = 'frontend' | 'backend' | 'devops'
export interface IFrameState {
  screen: 'photoFrame' | 'infoFrame' | 'skillFrame',
  page?: number,
  techArea?: ITechArea
}

export const Card: React.FC<ICardProps> = ({ key: cardKey, card, type }: ICardProps) => {
  const [frame, setFrame] = useState<IFrameState>({ screen: 'photoFrame' });

  const clickOnFrame = () => {
    if (frame.screen === 'photoFrame') setFrame({ screen: 'infoFrame' });
  };

  const clickOnTitle = () => {
    if (frame.screen === 'photoFrame') setFrame({ screen: 'infoFrame' });
    else setFrame({ screen: 'photoFrame' });
  };

  const hasFrontend = !!card.techAreas.frontend;
  const hasBackend = !!card.techAreas.backend;
  const hasDevops = !!card.techAreas.devops;

  return (
    <div key={cardKey} className={`${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300  ${type === 'project' ? 'h-[14.3rem] bg-[#f9f9f9]' : 'h-[14.75rem] bg-[#f7f7f7]'}`}>
      <h3 className={`pointer-events-auto cursor-pointer flex items-center justify-center h-10 ${CARD_WIDTH} px-1.5 pt-1 text-gray-900 font-medium text-center hover:text-gray-600
      ${type === 'project' ? 'text-lg' : 'text-sm'}`}
      onClick={clickOnTitle}
      >
        {card.name}
      </h3>
      <hr className='w-52 h-0.5 bg-[#d9d9d9] border-0 rounded m-0 p-0'></hr>
      <div onClick={clickOnFrame} className='flex items-center justify-center w-52 h-32 bg-[#d9d9d9] rounded-lg cursor-pointer'>
        {frame.screen === 'photoFrame' && <img src={card.image} alt='Course image' className='bg-cover flex h-32 w-52 border rounded-lg'/>}
        {frame.screen === 'skillFrame' && <div>Skill Frame of {frame?.techArea}</div>}
        {frame.screen === 'infoFrame' && <div>Info Frame</div>}
      </div>
      <TechAreaButtonGroup enableTechArea={{hasFrontend, hasBackend, hasDevops}} frame={frame} setFrame={setFrame}/>
    </div>
  );
};
