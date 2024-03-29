import { useEffect, useState } from 'react';
import { ICard, ITechAreaNames } from '../../../../interfaces';
import { ButtonCardManager } from './ButtonCardManager';
import { InfoFrame } from '../frames/InfoFrame';
import { PhotoFrame } from '../frames/PhotoFrame';
import { SkillFrame } from '../frames/SkillFrame';

const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[9px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));

export interface ICardProps {
  card: ICard
}

export interface IFrameState {
  screen: 'photoFrame' | 'infoFrame' | 'skillFrame'
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

  useEffect(() => {
    setFrame({ screen: 'photoFrame' });
  }, [card.description]);
  

  return (
    <div className={`touch-none md:touch-auto select-none ${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300  ${card.type === 'project' ? 'h-[14.3rem] bg-secondary-700' : 'h-[14.75rem] bg-secondary-900'}`}>
      <h3 className={`pointer-events-auto cursor-pointer flex items-center justify-center h-10 ${CARD_WIDTH} px-[6px] pt-1 text-gray-900 font-medium text-center hover:text-gray-600
      ${card.type === 'project' ? 'text-lg' : 'text-sm'}`}
      onClick={clickOnTitle}
      >
        {card.name}
      </h3>
      <hr className='w-52 h-[1px] bg-customGray-500 m-0 p-0 border-none'></hr>
      <div onClick={clickOnFrame} className='relative flex items-center justify-center w-52 h-32 rounded-lg'>
        {frame.screen === 'photoFrame' && 
          <PhotoFrame image={card.image} inProgress={card.inProgress} bottonRightTag={card.bottonRightTag} backgroundColor={card.type === 'project' ? 'secondary-700' : 'secondary-900'}/>
        }
        {frame.screen === 'skillFrame' &&
          <SkillFrame techArea={frame.techArea ?? 'frontend'} skills={card.techAreas[frame.techArea ?? 'frontend']?.skills ?? ['']} inProgress={card.techAreas[frame.techArea ?? 'frontend']?.inProgress ?? false}/>
        }
        {frame.screen === 'infoFrame' && 
          <InfoFrame creator={card.creator} description={card.description}/>
        }
      </div>
      <ButtonCardManager enableTechArea={{hasFrontend, hasBackend, hasDevops }} links={card.links} frame={frame} setFrame={setFrame} otherTechAreaName={card.techAreas?.other?.name}/>
    </div>
  );
};
