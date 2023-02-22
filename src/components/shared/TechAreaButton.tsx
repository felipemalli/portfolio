import { IFrameState, ITechArea } from './Card';

interface ITechAreaButtonProps {
  techAreaAbreviation: string,
  techArea: ITechArea,
  enable: boolean,
  frame: IFrameState,
  setFrame: (arg0: IFrameState) => void,
}

export const TechAreaButton: React.FC<ITechAreaButtonProps> = ({ techAreaAbreviation, techArea, enable, frame, setFrame }: ITechAreaButtonProps) => {
  const handleClick = () => {
    if (frame.screen === 'skillFrame' && frame.techArea === techArea) {
      setFrame({ screen: 'photoFrame' });
    }
    if (frame.techArea !== techArea) {
      setFrame({ screen: 'skillFrame', page: 1, techArea: `${techArea}` });
    }
  };

  return (
    <button className={`transition-all ${enable ? 'active:bg-green-400' : 'opacity-50 cursor-default'} w-full h-8 ${frame.techArea === techArea ? 'bg-green-400' : 'bg-[#d9d9d9] hover:bg-[#e4e4e4]'} rounded-md text-sm duration-200`}
      onClick={() => enable && handleClick()}
    >
      {techAreaAbreviation}
    </button>

  );
};
