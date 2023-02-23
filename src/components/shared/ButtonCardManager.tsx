import { ILinkName } from '../../data/courses';
import { IFrameState } from './Card';
import { LinkButton } from './LinkCardButton';
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
}

export const ButtonCardManager: React.FC<IButtonCardManagerProps> = ({ enableTechArea: {hasFrontend, hasBackend, hasDevops}, links, frame, setFrame }: IButtonCardManagerProps) => {

  console.log(links);

  return (
    <div className='flex w-[204px] gap-x-2'>
      {frame.screen === 'infoFrame' ? (
        <>
          {links.map(({name, link}) => (
            <LinkButton key={name + String(Date.now())} enable={!!link} name={name} link={link}/>
          ))}
        </>
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
