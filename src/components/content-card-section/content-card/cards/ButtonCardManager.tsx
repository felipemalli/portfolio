import { ILinkName } from '../../../../interfaces';
import { IFrameState } from './Card';
import { LinkCardButton } from './LinkCardButton';
import { TechAreaButton } from './TechAreaCardButton';

interface IButtonCardManagerProps {
  enableTechArea: {
    hasFrontend: boolean, 
    hasBackend: boolean,
    hasDevops: boolean,
  },
  links: {
    name: ILinkName,
    link: string,
  }[],
  frame: IFrameState
  setFrame: (arg0: IFrameState) => void,
  otherTechAreaName?: string,
}

export const ButtonCardManager: React.FC<IButtonCardManagerProps> = ({ enableTechArea: {hasFrontend, hasBackend, hasDevops}, links, frame, setFrame, otherTechAreaName }: IButtonCardManagerProps) => {
  return (
    <div className='flex w-[204px] gap-x-2'>
      {frame.screen === 'infoFrame' ? (
        <>
          {links.map(({name, link}) => (
            <LinkCardButton key={name + String(Date.now())} enable={!!link} name={name} link={link}/>
          ))}
        </>
      ) : otherTechAreaName ? (
        <TechAreaButton enable={true} techAreaAbreviation={otherTechAreaName} techArea='other' frame={frame} setFrame={setFrame}></TechAreaButton>
      ) : (
        <>
          <TechAreaButton enable={hasFrontend} techAreaAbreviation='Front' techArea='frontend' frame={frame} setFrame={setFrame}></TechAreaButton>
          <TechAreaButton enable={hasBackend} techAreaAbreviation='Back' techArea='backend' frame={frame} setFrame={setFrame}></TechAreaButton>
          <TechAreaButton enable={hasDevops} techAreaAbreviation='DevOps' techArea='devops' frame={frame} setFrame={setFrame}></TechAreaButton>
        </>
      )}
    </div>
  );
};
