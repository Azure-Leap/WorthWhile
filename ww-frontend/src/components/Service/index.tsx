import React, { useContext } from "react";
import { OrderContext } from "@/context/orderContext";

interface IService {
  _id: String;
  categoryId: String;
  serviceName: String;
  servicePrice: Number;
  serviceImg: [String];
  description: String;
  duration: Number;
  businessId: String;
}

interface Props {
  serviceData: IService;
  key: Number;
}

const Service = ({ serviceData }: Props) => {
  const { setOpen } = useContext(OrderContext);
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
          <p className="text-sm font-bold">{`${serviceData.servicePrice.toLocaleString()}₮`}</p>
          <p className="text-xs">30min</p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="text-xs bg-cyan-500 text-white px-4 py-1 rounded-lg h-9"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Service;
