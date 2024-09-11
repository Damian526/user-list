import React from "react";
import { useAppDispatch } from "../app/hooks";
import { setFilter } from "../features/user/userSlice";

interface FilterInputProps {
  filterType: "name" | "username" | "email" | "phone";
  className?: string; 
}

const FilterInput: React.FC<FilterInputProps> = ({ filterType, className }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    dispatch(setFilter({ filterType, value: newValue }));
  };

  const clearInput = () => {
    setValue("");
    dispatch(setFilter({ filterType, value: "" }));
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={filterType}
        value={value}
        onChange={handleChange}
        className="w-full p-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {value && (
        <button
          onClick={clearInput}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default FilterInput;
