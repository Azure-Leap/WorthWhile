import React from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <div className="bg-white py-1 px-4 rounded-full shadow-md flex items-center justify-between">
      <div className="relative border-gray-950 border w-full">
        <input
          type="text"
          placeholder="Find a service or salon"
          className=" py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 appearance-none focus:outline-none focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearch className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="relative ml-4 border-gray-950 border w-full">
        <input
          type="text"
          placeholder="Select a location"
          className="w-72 py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 appearance-none focus:outline-none focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoLocationSharp className="w-5 h-5 text-gray-700" />
        </div>
      </div>
      <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-3xl">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
