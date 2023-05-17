import { createContext, useState } from "react";
import axios from "axios";

export const UpdateContext = createContext<any>(null);

const UpdateProvider = ({ children }: any) => {
  const updateStaffs = async (businessId: any) => {
    try {
      const res = await axios.get(
        `http://localhost:8888/business/staffs?businessId=${businessId}`
      );
      return res.data.staffs;
    } catch (err) {
      console.log("updateStaffs err", err);
    }
  };
  // const updateServices = async (businessId: any) => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:8888/business/services?businessId=${businessId}`
  //     );
  //     return res.data.services;
  //   } catch (err) {
  //     console.log("updateServices err", err);
  //   }
  // };
  return (
    <UpdateContext.Provider value={{ updateStaffs }}>
      {children}
    </UpdateContext.Provider>
  );
};
export default UpdateProvider;
