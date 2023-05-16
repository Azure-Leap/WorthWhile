import React from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const SearchComponent = ({ onChangeText, search }: any) => {
  return (
    <div className="border border-gray-100 py-1 px-2 rounded-lg shadow-md flex items-center justify-between">
      <div className="relative w-full">
        <input
          onChange={onChangeText}
          type="text"
          value={search}
          placeholder="Find a service or salon"
          className=" py-2 pl-10 pr-3 text-gray-300 placeholder-gray-300 appearance-none focus:outline-none focus:border-transparent bg-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearch className="w-5 h-5 text-gray-300" />
        </div>
      </div>
      <div className="relative ml-4 w-full">
        <input
          type="text"
          placeholder="Select a location"
          className="w-72 py-2 pl-10 pr-3 text-gray-300 placeholder-gray-300 appearance-none focus:outline-none focus:border-transparent bg-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoLocationSharp className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
