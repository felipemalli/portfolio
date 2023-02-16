import { useState } from 'react';
import { TechAreaButton } from './TechAreaButton';

interface CardProps {
  label: 'hours' | 'online';
  inProgress: boolean,
}

export const Card: React.FC<{type: string, name: string}> = ({ type, name }: {type: string, name: string}) => {

  const [screen, setScreen] = useState<'photoFrame' | 'singleSkillTable' | 'doubleSkillTable'>('photoFrame');

  return (
    <div className={`flex flex-col justify-evenly	${type === 'project' ? 'h-[14.3rem] bg-[#f9f9f9]' : 'h-[14.75rem] bg-[#f7f7f7]'} w-[14rem] p- content-between items-center shadow-sm hover:shadow-xl border rounded-2xl border-gray-300`}>
      <h3 className={`pointer-events-auto flex items-center h-10 ${type === 'project' ? 'text-lg' : 'text-sm'}  pt-0 text-gray-900 font-medium text-center`}>
        {name}
      </h3>
      <hr className="w-52 h-0.5 bg-[#d9d9d9] border-0 rounded m-0 p-0"></hr>
      <button onClick={ () => console.log('') } className="flex items-center justify-center w-52 h-32 bg-[#d9d9d9] rounded-md">
        <img src="src/assets/courseimage.jpg" alt="Course image" className="flex h-32 w-52 border rounded-lg"></img>
      </button>
      <div className="flex space-x-2">
        <TechAreaButton techArea='Front' enable={true}></TechAreaButton>
        <TechAreaButton techArea='Back' enable={true}></TechAreaButton>
        <TechAreaButton techArea='Devops' enable={false}></TechAreaButton>
      </div>
    </div>
  )
}
