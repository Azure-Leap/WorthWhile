import React from "react";
import Service from "../Service";

const SalonCard = () => {
  return (
    <div className="w-full bg-white h-fit flex ">
      <div className="bg-orange-400 w-1/4">Zurag</div>
      <div className="w-full text-start">
        <h1 className="text-2xl">Matrix Salon</h1>
        <p className="text-xs text-gray-700">
          Чингэлтэй дүүрэг, 3-р хороо, Энхтайваны өргөн чөлөө, Матрикс барилга
        </p>
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default SalonCard;
