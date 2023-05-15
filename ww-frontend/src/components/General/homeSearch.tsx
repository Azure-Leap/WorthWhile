import React, { useState } from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const HomeSearch = ({ setIsOpen }: any) => {
  return (
    <div
      className="bg-white py-1 px-2 rounded-xl shadow-md flex items-center justify-between cursor-pointer"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearch className="w-5 h-5 text-gray-400" />
        </div>
        <p className=" py-2 pl-10 pr-3 text-gray-400 ">
          Find a service or salon
        </p>
      </div>
      <div className="relative ml-4 w-full">
        <p className="w-72 py-2 pl-10 pr-3 text-gray-400 appearance-none focus:outline-none focus:border-transparent">
          Select a location
        </p>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoLocationSharp className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
