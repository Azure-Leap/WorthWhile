import SearchComponent from "@/components/General/search";
import SalonCard from "@/components/SalonCard";
import React from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

const services = () => {
  return (
    <>
      <div className="bg-cyan-300 h-1/4 p-5">
        <SearchComponent />
        <div className="bg-white display: inline-block mx-5 my-2">
          <FiCalendar />
          Dates
        </div>
        <div className="bg-white display: inline-block">
          <FiChevronDown />
          Best matches
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
