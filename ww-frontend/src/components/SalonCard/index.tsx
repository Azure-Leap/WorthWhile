import React, { useContext, useEffect, useState } from "react";
import Service from "../Service";
import axios from "axios";
import Link from "next/link";
import { UpdateContext } from "@/context/updateContext";
import { OrderContext } from "@/context/orderContext";

const SalonCard = ({ businessData }: any) => {
  const { allStaffs, allServices } = useContext(OrderContext);
  const servicesByBus = allServices?.filter(
    (el: any) => el.businessId === businessData._id
  );
  const staffsByBus = allStaffs?.filter(
    (el: any) => el.businessId === businessData._id
  );

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const staffers = await updateStaffs(businessData._id);
  //   //   setStaffs(staffers);
  //   // };
  //   // fetchData();
  //   console.log("saloncard useEff", service);
  //   axios
  //     .get(
  //       `http://localhost:8888/business/services?businessId=${businessData._id}`
  //     )
  //     .then((res) => {
  //       setServicesData(res.data.services);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  //   axios
  //     .get(
  //       `http://localhost:8888/business/staffs?businessId=${businessData._id}`
  //     )
  //     .then((res) => {
  //       setStaffs(res.data.staffs);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);
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
        <h1 className="text-2xl font-semibold">{businessData.businessName}</h1>
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
