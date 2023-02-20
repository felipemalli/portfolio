import { TechAreaButton } from './TechAreaButton';

export interface CardProps {
  cardKey?: string,
  type: 'project' | 'course';
  name: string,
  image: string,
}

const CARD_WIDTH = 'w-[224px]'
const CARD_MARGIN_X = 'mx-[8px]'
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));

export const Card: React.FC<CardProps> = ({ cardKey, type, name, image }: CardProps) => {
  // const [screen, setScreen] = useState<'photoFrame' | 'singleSkillTable' | 'doubleSkillTable'>('photoFrame');

  return (
    <div key={cardKey} className={`${CARD_MARGIN_X} hover:scale-105 flex flex-col justify-evenly ${CARD_WIDTH} p- content-between items-center border rounded-2xl border-gray-300 shadow-md ${type === 'project' ? 'h-[14.3rem] bg-[#f9f9f9]' : 'h-[14.75rem] bg-[#f7f7f7]'}`}>
      <h3 className={`pointer-events-auto cursor-pointer flex items-center justify-center h-10 ${CARD_WIDTH} pt-1 text-gray-900 font-medium text-center
      ${type === 'project' ? 'text-lg' : 'text-sm'}`}
        onClick={ () => console.log('teste')}
      >
        {name}
      </h3>
      <hr className='w-52 h-0.5 bg-[#d9d9d9] border-0 rounded m-0 p-0'></hr>
      <button onClick={ () => console.log('') } className='flex items-center justify-center w-52 h-32 bg-[#d9d9d9] rounded-md'>
        <img src={image} alt='Course image' className='bg-cover flex h-32 w-52 border rounded-lg'/>
      </button>
      <div className='flex space-x-2'>
        <TechAreaButton techArea='Front' enable={true}></TechAreaButton>
        <TechAreaButton techArea='Back' enable={true}></TechAreaButton>
        <TechAreaButton techArea='Devops' enable={true}></TechAreaButton>
      </div>
    </div>
  )
}
