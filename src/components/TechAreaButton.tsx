import { useState } from 'react';

export const TechAreaButton: React.FC<{techArea: string, enable: boolean}> = ({ techArea, enable }: {techArea: string, enable: boolean}) => {

  const [screen, setScreen] = useState<'photoFrame' | 'singleSkillTable' | 'doubleSkillTable'>('photoFrame');

  return (
    <>
      {
        enable ? (
          <button className="w-24 h-8 bg-[#d9d9d9] hover:bg-[#e4e4e4] rounded-md text-sm transition-color duration-200 ">
            {techArea}
          </button>
        ) : (
          <></>
          // <button className="w-16 h-8 bg-[#d9d9d9] hover:bg-[#dedede] rounded-md text-sm opacity-40">
          //   {techArea}
          // </button>
        )
      }
    </>
  )
}
