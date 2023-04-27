import React from "react";
import BusinessSideBar from "./BusinessSideBar";

const BusinessLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <BusinessSideBar />
      <div className="bg-primary flex-1 p-4">{children}</div>
    </div>
  );
};

export default BusinessLayout;
