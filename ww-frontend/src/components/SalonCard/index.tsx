import Image from "next/image";
import React, { useEffect, useState } from "react";
import Service from "../Service";

import axios from "axios";

const SalonCard = ({ businessData }: any) => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8888/services/")
      .then((res) => {
        setServiceData(res.data.services);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

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
        <h1 className="text-2xl">{businessData.businessName}</h1>
        <p className="text-sm text-gray-600 my-1">
          {`${businessData.address.district} дүүрэг, 3-р хороо, ${businessData.address.street} гудамж, ${businessData.businessName}`}
        </p>

        {serviceData.map((el: any, i) => {
          return businessData._id === el.businessId ? (
            <Service key={i} serviceData={el} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SalonCard;
