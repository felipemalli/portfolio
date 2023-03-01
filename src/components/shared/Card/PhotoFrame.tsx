import { IBottonRightTag } from '../../../interfaces';

export interface IPhotoFrameProps {
  image?: string;
  inProgress: boolean;
  bottonRightTag?: {
    name: IBottonRightTag,
    value?: number
  }
  backgroundColor: string,
}

export const PhotoFrame: React.FC<IPhotoFrameProps> = ({ image, inProgress, bottonRightTag, backgroundColor }: IPhotoFrameProps) => {

  return (
    <div className='cursor-pointer bg-[#d9d9d9] flex h-full w-full border rounded-lg border-[#cfcfcf]'>
      <img src={image} alt='Card image' className='bg-[#d9d9d9] rounded-lg h-full w-full'/>       
      {inProgress && 
        <div className='absolute bg-[#FC6363] w-full text-center font-medium text-[#2E3E4B] text-sm py-1.5 opacity-95 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          In progress
        </div>}

      {bottonRightTag && bottonRightTag.name === 'Browser' &&
        <svg className='absolute -right-[24px] -bottom-[9px] w-10 scale-70' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path fill="#CFCFCF" d="M14.194.711A11.5 11.5 0 0 0 1.293 16.196L12 12 14.194.711Z"/>
          <circle fill={backgroundColor} cx="12.5" cy="12.5" r="10"/>
          <path fill="#27BE58" d="M20.5 12.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>
        </svg>
      }
      {bottonRightTag && bottonRightTag.name === 'Hours' && bottonRightTag.value &&
        <div className={`absolute bg-[${backgroundColor}] -right-[0px] bottom-0 h-5 w-12 text-center pt-[1px] text-[13px] font-normal rounded-tl-md border-t border-l border-[#cfcfcf]`}>{bottonRightTag.value}h</div>
      }
    </div>
  );
};