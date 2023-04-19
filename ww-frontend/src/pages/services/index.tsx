import SearchComponent from "@/components/General/search";
import SalonCard from "@/components/SalonCard";
import React from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

const services = () => {
  return (
    <>
      <div className="bg-cyan-300 h-1/4 p-5">
        <SearchComponent />
        <div className="bg-white inline-flex items-center rounded px-2 py-1">
          <FiCalendar className="mr-1" />
          Dates
        </div>
        <div className="bg-white inline-flex justify-center items-center rounded px-2 py-1">
          <FiChevronDown size={20} className="mr-1" />
          <p>Best matches</p>
        </div>
      </div>
      <div className="bg-gray-200 h-full text-lg text-center p-4">
        Best Haircut in Ulaanbaatar
        <SalonCard />
      </div>
    </>
  );
};

export default services;
