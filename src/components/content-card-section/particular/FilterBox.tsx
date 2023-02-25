import { useEffect, useRef, useState } from 'react';
import { ICheckboxProps } from '../../../hooks';

export interface IFilterBoxProps {
  checkboxes: ICheckboxProps[];
  handleCheckboxChange: (id: number) => void;
  applyFilters: () => void;
  giveCheckboxAreas: () => ICheckboxProps[];
}

export const FilterBox: React.FC<IFilterBoxProps> = ({ checkboxes, handleCheckboxChange, applyFilters, giveCheckboxAreas }: IFilterBoxProps) => {
  const [filterBox, setFilterBox] = useState<boolean>(false);
  const filterBoxRef = useRef<HTMLDivElement | null>(null);
  const filterBoxButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (filterBoxButton.current && filterBoxButton.current !== event.target && !filterBoxButton.current.contains(event.target as Node) && filterBoxRef.current && !filterBoxRef.current.contains(event.target as Node)) {
      setFilterBox(false);
    }
  };

  return (
    <div className='absolute right-[2px]'>
      {filterBox && (
        <div ref={filterBoxRef} className='absolute flex flex-col justify-between w-32 h-44 p-2.5 right-0 bottom-10 rounded-xl bg-[#d9d9d9] border-4 border-[#c3b8b8]'>
          <div>
            <p className='text-sm text-center'>CARDS WITH</p>
            <hr className='bg-[#c3b8b8] h-[0.5px] w-full border-none  mt-1 -mb-1'></hr>
          </div>
          {checkboxes.map(({id, value, label, isChecked}) => (

            <label key={id} htmlFor={`checkbox-${id}`} className='flex h-8 items-center text-sm ml-1 gap-2 -mb-1 w-full'>
              <input
                type="checkbox"
                value={value}
                id={`checkbox-${id}`}
                checked={isChecked}
                onChange={() => {
                  handleCheckboxChange(id);
                  applyFilters();
                }}
              />
              {label}
            </label>
          ))}
        </div>
      )}
      <button ref={filterBoxButton} className={`rounded-r-full border-y-2 border-r-2 h-8 pr-2 pl-2 border-[#b8bbc3]  hover:bg-[#eaeced] active:bg-[#d9d9d9] ${filterBox ? 'bg-[#eaeced]' : 'bg-[#d9d9d9]'} `}
        onClick={() => setFilterBox(!filterBox)}>
        <img src="src/assets/icons/filterIcon.svg" className={`w-4.5 rounded-r-full mr-1.5' alt='Filter technology
        ${giveCheckboxAreas().length < 3 && ''}`}></img>
      </button>
    </div>
  );
};
