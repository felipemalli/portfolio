import { useEffect, useState } from 'react';
import { useLanguageContext } from '../../../contexts';

export interface IInfoFrameProps {
  creator: string;
  description: string;
}

type IStringList = string[][]

export const InfoFrame: React.FC<IInfoFrameProps> = ({ creator, description }: IInfoFrameProps) => {
  const [page, setPage] = useState<number>(0);
  const [stringList, setStringList] = useState<IStringList>();

  const { translations } = useLanguageContext();

  function divideStringIntoLists(str: string, stringLength: number) {
    const stringList = [];
  
    let startIndex = 0;
    while (startIndex < str.length) {
      let endIndex = startIndex + stringLength;
      if (endIndex >= str.length) {
        stringList.push([str.substring(startIndex)]);
        break;
      }
      const lastSpaceIndex = str.lastIndexOf(' ', endIndex);
      if (lastSpaceIndex !== -1 && lastSpaceIndex > startIndex) {
        endIndex = lastSpaceIndex;
      }
      stringList.push([str.substring(startIndex, endIndex)]);
      startIndex = endIndex + 1;
    }
  
    return stringList;
  }

  useEffect(() => {
    let STRING_LIMIT = 160;
    if (creator !== 'Felipe Vahia Malliagros') {
      STRING_LIMIT = 111;
    }
    setStringList(divideStringIntoLists(description, STRING_LIMIT));
    setPage(0);
  }, []);

  return (
    <div className='h-full w-full flex flex-col items-center'>
      {creator != 'Felipe Vahia Malliagros' && <p className='text-sm font-light border rounded-md border-customGray-500 pt-0.5 w-full text-center  mb-1.5'>{translations.instructor} - {creator}</p>}
      <div className="h-screen w-full border border-customGray-500 rounded-lg relative">
        {stringList && stringList[page].map((string) => (
          <p className={`w-full text-[13px] ${creator != 'Felipe Vahia Malliagros' ? 'pt-[8px] pb-[5px]' : 'pt-[4px]'} px-1.5 font-light flex justify-start`} key={string + String(Date.now())}>
            {string}
          </p>
        ))}
        {stringList && page !== 0 && (
          <button className='absolute -left-[4px] top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs w-9 p-2.5' onClick={() => setPage(page - 1)}>
            <img src='/assets/icons/circularArrow.svg' alt='Previous page button'></img>
          </button>
        )}
        {stringList && stringList.length > 1 && page < stringList.length - 1 && (
          <button className='absolute -right-[22px] top-1/2 -translate-y-1/2  text-xs rotate-180 w-9 p-2.5' onClick={() => setPage(page + 1)}>
            <img src='/assets/icons/circularArrow.svg' alt='Next page button'></img>
          </button>
        )}
      </div>
    </div>
  );
};
