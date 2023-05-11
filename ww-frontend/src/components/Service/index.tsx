import React, { useContext, useEffect } from "react";
import { OrderContext } from "@/context/orderContext";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";

const Service = ({ business, service, staffs, services }: any) => {
  const {
    setOpen,
    setSelectedServices,
    setStaffs,
    setBusiness,
    setService,
    setServices,
  } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  return (
    <div className="border-t-2 border-gray-200 text-start flex justify-between py-3 ">
      <div>
        <h1 className="text-lg">{service.serviceName}</h1>
        <p className="text-sm text-gray-500 font-light">
          {service.description}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex-col gap-1 text-end">
          <p style={{ fontWeight: 600, fontSize: "14px" }}>
            ₮
            {service.servicePrice?.isMin
              ? service.servicePrice?.price + "+"
              : service.servicePrice?.price}
          </p>
          <p className="text-xs">{service.duration}min</p>
        </div>
        <button
          onClick={
            user
              ? () => {
                  setBusiness(business);
                  setService(service);
                  setServices(services);
                  setSelectedServices([service]);
                  setStaffs(staffs);
                  setOpen(true);
                }
              : () => {
                  setStatus("error");
                  setMessage("Та эхлээд нэвтэрнэ үү!");
                }
          }
          className="text-xs bg-cyan-500 text-white px-4 py-1 rounded-lg h-9"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Service;
