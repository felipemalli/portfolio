import { useEffect, useRef, useState } from 'react';
import { useLanguageContext, useSearchContext } from '../../../contexts';
import { AnimatedDiv } from '../../../utils';

export interface IFilterBoxProps {
  applyFilters: () => void;
  giveCheckboxAreas: () => string[];
}

export const FilterBox: React.FC<IFilterBoxProps> = ({ applyFilters, giveCheckboxAreas }: IFilterBoxProps) => {
  const [filterBox, setFilterBox] = useState<boolean>(false);
  const filterBoxRef = useRef<HTMLDivElement | null>(null);
  const filterBoxButton = useRef<HTMLButtonElement | null>(null);

  const { checkboxes, handleCheckboxChange } = useSearchContext();
  const { translations } = useLanguageContext();

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
        <AnimatedDiv initialAnimation='opacity-0' finalAnimation='opacity-100' reference={filterBoxRef} className='absolute flex flex-col justify-between w-32 h-44 p-2.5 right-0 bottom-10 rounded-xl bg-customGray-400 border-4 border-customGray-600'>
          <div>
            <p className='text-sm text-center uppercase'>{translations.filterbox_info}</p>
            <hr className='bg-customGray-600 h-[0.5px] w-full border-none  mt-1 -mb-1'></hr>
          </div>
          {checkboxes.map(({id, value, label, isChecked}) => (

            <label key={id} htmlFor={`checkbox-${id}`} className='flex h-8 items-center text-sm ml-1 gap-2 -mb-1 w-full tracking-wide'>
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
        </AnimatedDiv>
      )}
      <button ref={filterBoxButton} className={`rounded-r-full border-y-2 border-r-2 h-8 pr-2.5 pl-2 border-customGray-600  hover:bg-customGray-200 active:bg-customGray-400 ${filterBox ? 'bg-customGray-200' : 'bg-customGray-400'} transition-colors duration-200`}
        onClick={() => setFilterBox(!filterBox)}>
        <svg className={`${giveCheckboxAreas().length < 3 ? 'stroke-primary-500' : 'stroke-icon'} `} xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">
          <g strokeLinecap="round" strokeWidth="2">
            <path d="M15.079 12.742H10.35M7.65 12.742H2.92M15.079 8H9M6.298 8H2.921M15.08 3.258h-3.378M9 3.258H2.921M10.35 14.52v-3.556M6.298 9.778V6.222M11.702 5.036V1.48"/>
          </g>
        </svg>
      </button>
    </div>
  );
};
