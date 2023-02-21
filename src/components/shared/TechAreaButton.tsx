import { FrameState, TechArea } from './Card';

interface TechAreaProps {
  techAreaAbreviation: string,
  techArea: TechArea,
  enable: boolean,
  setFrame: (arg0: FrameState) => void,
}

export const TechAreaButton: React.FC<TechAreaProps> = ({ techAreaAbreviation, techArea, enable, setFrame }: TechAreaProps) => {
  return (
    <>
      {
        enable && (
          <button className='w-16 h-8 bg-[#d9d9d9] hover:bg-[#e4e4e4] active:bg-green-400 rounded-md text-sm transition-color duration-200'
            onClick={()=> setFrame({ screen: 'skillFrame', page: 1, techArea: `${techArea}` })}
          >
            {techAreaAbreviation}
          </button>
        )
      }
    </>
  );
};
