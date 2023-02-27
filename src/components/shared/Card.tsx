import { useState } from 'react';
import { ICard, ITechAreaNames } from '../../interfaces';
import { ButtonCardManager } from './ButtonCardManager';
import { SkillFrame } from './SkillFrame';
import { SkillInfo } from './SkillInfo';

const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[9px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));

export interface ICardProps {
  card: ICard,
}

export interface IFrameState {
  screen: 'photoFrame' | 'infoFrame' | 'skillFrame',
  techArea?: ITechAreaNames
}

export const Card: React.FC<ICardProps> = ({ card }: ICardProps) => {
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
    <div className={`touch-none md:touch-auto select-none ${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300  ${card.type === 'project' ? 'h-[14.3rem] bg-[#f9f9f9]' : 'h-[14.75rem] bg-[#f7f7f7]'}`}>
      <h3 className={`pointer-events-auto cursor-pointer flex items-center justify-center h-10 ${CARD_WIDTH} px-[6px] pt-1 text-gray-900 font-medium text-center hover:text-gray-600
      ${card.type === 'project' ? 'text-lg' : 'text-sm'}`}
      onClick={clickOnTitle}
      >
        {card.name}
      </h3>
      <hr className='w-52 h-0.5 bg-[#d9d9d9] m-0 p-0'></hr>
      <div onClick={clickOnFrame} className='relative flex items-center justify-center w-52 h-32 rounded-lg'>
        {frame.screen === 'photoFrame' && 
          <img src={card.image} alt='Course image' className='cursor-pointer bg-[#d9d9d9] flex h-full w-full border rounded-lg'/>
        }
        {frame.screen === 'photoFrame' && card.inProgress && <div className='absolute bg-[#FC6363] w-full text-center font-medium text-[#2E3E4B] text-sm py-1.5 opacity-95 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>In progress</div>}
        {frame.screen === 'skillFrame' &&
          <SkillFrame techArea={frame.techArea ?? 'frontend'} skills={card.techAreas[frame.techArea ?? 'frontend']?.skills ?? ['']} inProgress={card.techAreas[frame.techArea ?? 'frontend']?.inProgress ?? false}/>
        }
        {frame.screen === 'infoFrame' && 
          <SkillInfo creator={card.creator} description={card.description}/>
        }
      </div>
      <ButtonCardManager enableTechArea={{hasFrontend, hasBackend, hasDevops}} links={card.links} frame={frame} setFrame={setFrame}/>
    </div>
  );
};
