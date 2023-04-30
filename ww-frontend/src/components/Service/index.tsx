import React, { useContext } from "react";
import { OrderContext } from "@/context/orderContext";

const Service = ({ serviceData }: any) => {
  const { setOpen, setServices, setStaffs, setBusiness } =
    useContext(OrderContext);
  const getOrderData = async () => {
    setServices([serviceData]);
    const res = await fetch(
      `http://localhost:8888/business/${serviceData.businessId._id}`
    );
    const data = await res.json();
    setBusiness(data.business);
    const res2 = await fetch(
      `http://localhost:8888/business/staffs?businessId=${serviceData.businessId._id}`
    );
    const data2 = await res2.json();
    setStaffs(data2.staffs);
    setOpen(true);
  };
  return (
    <div className="border-t-2 border-gray-200 text-start flex justify-between py-3 ">
      <div>
        <h1 className="text-lg">{serviceData.serviceName}</h1>
        <p className="text-sm text-gray-500 font-light">
          {serviceData.description}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex-col gap-1 text-end">
          <p className="text-sm font-bold">
            ₮
            {serviceData.servicePrice.isMin
              ? serviceData.servicePrice.price + "+"
              : serviceData.servicePrice.price}
          </p>
          <p className="text-xs">{serviceData.duration}min</p>
        </div>
        <button
          onClick={() => {
            getOrderData();
          }}
          className="text-xs bg-cyan-500 text-white px-4 py-1 rounded-lg h-9"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Service;
