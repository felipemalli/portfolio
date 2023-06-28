import { ITechAreaNames } from '../../../../interfaces';
import { IFrameState } from './Card';

interface ITechAreaButtonProps {
  enable: boolean
  techAreaAbreviation: string
  techArea: ITechAreaNames
  frame: IFrameState
  setFrame: (arg0: IFrameState) => void
}

export const TechAreaButton: React.FC<ITechAreaButtonProps> = ({ enable, techAreaAbreviation, techArea, frame, setFrame }: ITechAreaButtonProps) => {
  const handleClick = () => {
    if (frame.screen === 'skillFrame' && frame.techArea === techArea) {
      setFrame({ screen: 'photoFrame' });
    }
    if (frame.techArea !== techArea) {
      setFrame({ screen: 'skillFrame', techArea: `${techArea}` });
    }
  };

  return (
    <button className={`transition-all duration-200 ${enable ? 'active:bg-green-400' : 'opacity-50 cursor-default'} w-full h-8 ${frame.techArea === techArea ? 'bg-customGreen-200' : 'bg-customGray-400 hover:bg-customGray-300'} rounded-md text-sm`}
      onClick={() => enable && handleClick()}
    >
      {techAreaAbreviation}
    </button>

  );
};
