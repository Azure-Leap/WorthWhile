import React, { useState } from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const HomeSearch = ({ setIsOpen }: any) => {
  return (
    <div
      className="bg-white py-1 px-2 rounded-3xl shadow-xl flex items-center justify-between cursor-pointer relative -bottom-7 w-1/2"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <div className="flex items-center w-1/2">
        <div className="pl-3">
          <IoSearch className="w-5 h-5 text-gray-400" />
        </div>
        <p className="py-2 pl-10 pr-3 text-gray-400 ">
          Find a service or salon
        </p>
      </div>
      <div className="flex items-center w-1/2 border-l border-gray-300">
        <div className="pl-3">
          <IoLocationSharp className="w-5 h-5 text-gray-700" />
        </div>
        <p className="w-72 py-2 pl-10 pr-3 text-gray-400 appearance-none focus:outline-none focus:border-transparent">
          Select a location
        </p>
      </div>
    </div>
  );
};

export default HomeSearch;
