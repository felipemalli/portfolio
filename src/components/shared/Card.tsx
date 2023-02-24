import { useState } from 'react';
import { ICard } from '../../data/courses';
import { ButtonCardManager } from './ButtonCardManager';
import { SkillFrame } from './SkillFrame';
const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[9px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));


export interface ICardProps {
  key: string,
  card: ICard,
  type: 'project' | 'course',
}

export type ITechAreaNames = 'frontend' | 'backend' | 'devops'
export interface IFrameState {
  screen: 'photoFrame' | 'infoFrame' | 'skillFrame',
  techArea?: ITechAreaNames
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
 
  const hasFrontend = !!(card.techAreas.frontend && card.techAreas.frontend.skills.length > 0);
  const hasBackend = !!(card.techAreas.backend && card.techAreas.backend.skills.length > 0);
  const hasDevops = !!(card.techAreas.devops && card.techAreas.devops.skills.length > 0);

  return (
    <div key={cardKey} className={`${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300  ${type === 'project' ? 'h-[14.3rem] bg-[#f9f9f9]' : 'h-[14.75rem] bg-[#f7f7f7]'}`}>
      <h3 className={`pointer-events-auto cursor-pointer flex items-center justify-center h-10 ${CARD_WIDTH} px-1.5 pt-1 text-gray-900 font-medium text-center hover:text-gray-600
      ${type === 'project' ? 'text-lg' : 'text-sm'}`}
      onClick={clickOnTitle}
      >
        {card.name}
      </h3>
      <hr className='w-52 h-0.5 bg-[#d9d9d9] m-0 p-0'></hr>
      <div onClick={clickOnFrame} className='flex items-center justify-center w-52 h-32 bg-[#d9d9d9] rounded-lg cursor-pointer'>
        {frame.screen === 'photoFrame' && <img src={card.image} alt='Course image' className='bg-cover flex h-full w-full border rounded-lg'/>}
        {frame.screen === 'skillFrame' &&
          <SkillFrame techArea={frame.techArea ?? 'frontend'} skills={card.techAreas[frame.techArea ?? 'frontend']?.skills ?? ['']} />}
        {frame.screen === 'infoFrame' && <div>Info Frame</div>}
      </div>
      <ButtonCardManager enableTechArea={{hasFrontend, hasBackend, hasDevops}} links={card.links} frame={frame} setFrame={setFrame}/>
    </div>
  );
};
