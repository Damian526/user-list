import React from "react";
import FilterInput from "./FilterInput";

const FilterBar: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <FilterInput filterType="name" className="md:w-1/4" />
        <FilterInput filterType="username" className="md:w-1/4" />
        <FilterInput filterType="email" className="md:w-1/3" />
        <FilterInput filterType="phone" className="md:w-1/6" />
      </div>
    </div>
  );
};

export default FilterBar;
