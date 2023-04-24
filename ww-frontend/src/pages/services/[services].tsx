import Service from "@/components/Service";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Services = () => {
  return (
    <div className="flex justify-between">
      <div className="w-4/6 p-3 bg-red-200">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          className="rounded-md"
          alt="SalonImage"
          width={500}
          height={500}
        />
        <h1 className="text-2xl">Matrix Salon</h1>
        <p className="text-xs text-gray-700">
          Чингэлтэй дүүрэг, 3-р хороо, Энхтайваны өргөн чөлөө, Матрикс барилга
        </p>
        <div className="flex justify-between">
          <h1 className="text-2xl">Services</h1>
          <div className="relative ">
            <input
              type="text"
              placeholder="Find a service or salon"
              className="w-72 py-2 pl-10 pr-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:border-transparent rounded-xl bg-gray-100 text-sm"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearch className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>
        {/* <Service /> */}
      </div>
      <div className="bg-teal-200 w-screen">
        <div className="w-3/4 bg-neutral-400">Map</div>
      </div>
    </div>
  );
};

export default Services;
