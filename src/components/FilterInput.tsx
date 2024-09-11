import React from "react";
import { useAppDispatch } from "../app/hooks";
import { setFilter } from "../features/user/userSlice";

interface FilterInputProps {
  filterType: "name" | "username" | "email" | "phone";
}

const FilterInput: React.FC<FilterInputProps> = ({ filterType }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ filterType, value: e.target.value }));
  };

  return (
    <input
      type="text"
      placeholder={filterType}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};

export default FilterInput;
