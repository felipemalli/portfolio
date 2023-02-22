import { IFrameState } from './Card';
import { TechAreaButton } from './TechAreaButton';

interface ITechAreaProps {
  enableTechArea: {
    hasFrontend: boolean, 
    hasBackend: boolean,
    hasDevops: boolean,
  }
  frame: IFrameState
  setFrame: (arg0: IFrameState) => void,
}

export const TechAreaButtonGroup: React.FC<ITechAreaProps> = ({ enableTechArea: {hasFrontend, hasBackend, hasDevops}, frame, setFrame }: ITechAreaProps) => {

  return (
    <div className='flex w-[204px] gap-x-2'>
      <TechAreaButton techAreaAbreviation='Front' techArea='frontend' enable={hasFrontend} frame={frame} setFrame={setFrame}></TechAreaButton>
      <TechAreaButton techAreaAbreviation='Back' techArea='backend' enable={hasBackend} frame={frame} setFrame={setFrame}></TechAreaButton>
      <TechAreaButton techAreaAbreviation='DevOps' techArea='devops' enable={hasDevops} frame={frame} setFrame={setFrame}></TechAreaButton>
    </div>
  );
};
