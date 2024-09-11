import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { setFilter } from '../features/user/userSlice';

interface FilterInputProps {
  filterType: 'name' | 'username' | 'email' | 'phone';
}

const FilterInput: React.FC<FilterInputProps> = ({ filterType }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ filterType, value: e.target.value }));
  };

  return (
    <input
      type="text"
      placeholder={`Filter by ${filterType}`}
      onChange={handleChange}
      className="py-2 px-4 border rounded w-full"
    />
  );
}

export default FilterInput;