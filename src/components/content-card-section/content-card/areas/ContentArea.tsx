import { useEffect } from 'react';
import { useChangeAreaContext } from '../../../../contexts';
import { ICard } from '../../../../interfaces';
import { AnimatedDiv } from '../../../../utils';
import { Card } from '../cards/Card';

interface IContentaArea {
  data: ICard[]
  filteredData: ICard[] | [],
  setFiltered: (arg: ICard[]) => void,
  setAll: (arg: ICard[]) => void,
  notFoundTranslation: string,
}

export const ContentArea: React.FC<IContentaArea> = ({data, filteredData, setFiltered, setAll, notFoundTranslation}: IContentaArea) => {
  const { areaName } = useChangeAreaContext();

  useEffect(() => {
    setFiltered(data);
    setAll(data);
  }, [data]);

  return (
    <AnimatedDiv animationState={areaName === 'knowledge' ? 'start' : 'stop'} initialAnimation='opacity-50' finalAnimation='opacity-100' duration='duration-400'
      className={`${areaName !== 'knowledge' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {filteredData.map((course: ICard) => (
        <Card key={course.name} card={course}/>
      ))}
      {filteredData.length === 0 && <h3 className='flex justify-center items-center text-center break-normal absolute left-1/2 -translate-x-1/2 font-semibold md:text-2xl opacity-50'>{notFoundTranslation}</h3>}
    </AnimatedDiv>
  );
};
