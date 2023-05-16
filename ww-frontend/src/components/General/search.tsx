import React from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const SearchComponent = ({ onChangeText, search }: any) => {
  return (
    <div className="border border-gray-600 py-1 px-2 rounded-lg flex items-center justify-between">
      <div className="relative w-full border-r border-gray-600">
        <input
          onChange={onChangeText}
          type="text"
          value={search}
          placeholder="Find a service or salon"
          className=" py-2 pl-8 pr-3 text-gray-400 placeholder-gray-400 placeholder:text-sm placeholder:font-medium appearance-none focus:outline-none focus:border-transparent bg-transparent text-sm font-medium"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-1">
          <IoSearch className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      <div className="relative ml-4 w-full">
        <input
          type="text"
          placeholder="Select a location"
          className="py-2 pl-8 pr-3 text-gray-400 placeholder-gray-400 appearance-none focus:outline-none focus:border-transparent bg-transparent placeholder:text-sm placeholder:font-medium text-sm font-medium"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-1">
          <IoLocationSharp className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
