import { useState } from 'react';

interface ICheckboxProps {
  id: number;
  value: string;
  label: string;
  isChecked: boolean;
}

export function useCheckbox(initialState: ICheckboxProps[]) {
  const [checkboxes, setCheckboxes] = useState<ICheckboxProps[]>(initialState);

  const handleCheckboxChange = (id: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, isChecked: !checkbox.isChecked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return { checkboxes, handleCheckboxChange };
}
