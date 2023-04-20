import Image from "next/image";
import React from "react";
import Service from "../Service";
import { IBusiness } from "@/pages/services";

interface Item {
  _id: String;
  businessName: String;
  email: String;
  password: String;
}

interface Props {
  item: IBusiness;
  key: Number;
}

const SalonCard = ({ item, key }: Props) => {
  console.log("msdf", item.address);
  return (
    <div className="w-full bg-white h-fit flex gap-3 mb-4">
      <Image
        src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        alt="Salon Profile"
        className="rounded"
        width={800}
        height={400}
      />
      <div className="w-full text-start p-2">
        <h1 className="text-2xl">{item.businessName}</h1>
        <p className="text-sm text-gray-600 my-1">
          {`${item.address.district} дүүрэг, 3-р хороо, ${item.address.street} гудамж, ${item.businessName}`}
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
