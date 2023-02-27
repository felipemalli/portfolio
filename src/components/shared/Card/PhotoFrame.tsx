import { IBottonRightTag } from '../../../interfaces';

export interface IPhotoFrameProps {
  image?: string;
  inProgress: boolean;
  bottonRightTag?: {
    name: IBottonRightTag,
    value?: number
  }
}

export const PhotoFrame: React.FC<IPhotoFrameProps> = ({ image, inProgress, bottonRightTag }: IPhotoFrameProps) => {

  return (
    <div className='cursor-pointer bg-[#d9d9d9] flex h-full w-full border rounded-lg border-[#cfcfcf]'>
      <img src={image} alt='Card image' className='bg-[#d9d9d9] rounded-lg h-full w-full'/>       
      {inProgress && 
        <div className='absolute bg-[#FC6363] w-full text-center font-medium text-[#2E3E4B] text-sm py-1.5 opacity-95 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          In progress
        </div>}

      {bottonRightTag && bottonRightTag.name === 'Browser' &&
        <img className='absolute -right-[5px] -bottom-1  w-3.5' src="src/assets/icons/browserIcon.svg" alt='Browser active'/>
      }
    </div>
  );
};
