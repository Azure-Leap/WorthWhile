import React, { useEffect, useState } from "react";
import Service from "../Service";
import axios from "axios";
import Link from "next/link";

const SalonCard = ({ businessData }: any) => {
  const [servicesData, setServicesData] = useState([]);
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/business/services?businessId=${businessData._id}`
      )
      .then((res) => {
        setServicesData(res.data.services);
      })
      .catch((err) => {
        console.log("err", err);
      });
    axios
      .get(
        `http://localhost:8888/business/staffs?businessId=${businessData._id}`
      )
      .then((res) => {
        setStaffs(res.data.staffs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="w-full bg-white h-fit flex gap-3 mb-4">
      <Link
        href={`/details/${businessData._id}`}
        style={{ width: "800px", height: "400px" }}
      >
        <img
          src={businessData.profileImg}
          alt="Salon Profile"
          className="rounded"
          style={{ width: "100%", height: "100%" }}
        />
      </Link>
      <div className="w-full text-start p-2">
        <h1 className="text-2xl">{businessData.businessName}</h1>
        <p className="text-sm text-gray-600 my-1">
          {`${businessData.address.district} дүүрэг, 3-р хороо, ${businessData.address.street} гудамж, ${businessData.businessName}`}
        </p>

        {servicesData.map((el: any, i) => (
          <Service
            key={i}
            business={businessData}
            service={el}
            staffs={staffs}
          />
        ))}
      </div>
    </div>
  );
};

export default SalonCard;
