import React from "react";
// import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";

const Appointments = (props: any) => {
  const Apps = [
    {
      Services: "Beard trim",
      TotalPrice: 15,
      StartTime: "15 April",
    },
    {
      Services: "HairCut",
      TotalPrice: 51,
      StartTime: "15 May",
    },
  ];

  return (
    <div>
      <div className="ml-5 mt-2 ">
        <h1 className="text-2xl ">Appointments</h1>
        <h2 className="my-5">Finished Appointments</h2>
      </div>
      <div>
        <div className="my-20">
          <img
            src="/image/profile/appointment.png"
            alt="review"
            className="w-1/6 h-1/6 mx-auto"
          />
          <h2 className="text-xl text-center my-5 ">Scheduled Appointments</h2>
          <p className="text-gray-500 text-center mb-10">
            Your scheduled appointment will appear here.
          </p>
        </div>
        <div>
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
