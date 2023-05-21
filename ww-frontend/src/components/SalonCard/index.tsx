import React, { useContext, useEffect, useState } from "react";
import Service from "../Service";
import Link from "next/link";
import { OrderContext } from "@/context/orderContext";

const SalonCard = ({ businessData }: any) => {
  const { allStaffs, allServices } = useContext(OrderContext);

  const servicesByBus = allServices?.filter(
    (el: any) => el.businessId._id === businessData._id
  );

  const staffsByBus = allStaffs?.filter(
    (el: any) => el.businessId === businessData._id
  );

  return (
    <div className="w-full h-fit flex gap-3 mb-4 ">
      <Link
        href={`/details/${businessData._id}`}
        style={{
          minWidth: "35%",
          maxWidth: "35%",
          height: "300px",
          objectFit: "cover",
        }}
      >
        <img
          src={businessData.profileImg}
          alt="Salon Profile"
          className="rounded"
          style={{ width: "100%", height: "100%" }}
        />
      </Link>
      <div className="w-full text-start pl-4">
        <h1 className="text-3xl font-medium">{businessData.businessName}</h1>
        <p className="text-sm text-gray-600 my-1">
          {`${businessData.address.district} дүүрэг, 3-р хороо, ${businessData.address.street} гудамж, ${businessData.businessName}`}
        </p>

        {servicesByBus?.map((el: any, i: number) => {
          return (
            <Service
              key={i}
              business={businessData}
              service={el}
              staffs={staffsByBus}
              services={servicesByBus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SalonCard;
