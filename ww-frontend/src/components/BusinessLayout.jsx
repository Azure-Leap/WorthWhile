import React from "react";
import Sidebar from "./Sidebar";

const BusinessLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white bg-red-400">
        {children}
      </div>
    </div>
  );
};

export default BusinessLayout;
