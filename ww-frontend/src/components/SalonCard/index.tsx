import Image from "next/image";
import React from "react";
import Service from "../Service";

interface Item {
  _id: String;
  businessName: String;
  email: String;
  password: String;
}

const SalonCard = () => {
  return (
    <div className="w-full bg-white h-fit flex gap-3">
      <Image
        src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        alt="Salon Profile"
        className="rounded"
        width={800}
        height={400}
      />
      <div className="w-full text-start p-2">
        <h1 className="text-2xl">Matrix Salon</h1>
        <p className="text-sm text-gray-600 my-1">
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
