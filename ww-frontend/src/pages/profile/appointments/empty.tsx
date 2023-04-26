import React from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";

export default function EmptyAppointment(props: any) {
  return (
    <div className="ml-5 mt-2 ">
      <h1 className="text-2xl ">Appointments</h1>
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

        <Button
          sx={{
            bgcolor: "lime",
            color: "white",
            display: "block",
            margin: "auto",
            width: 250,
            ":hover": {
              bgcolor: "green",
            },
          }}
        >
          Let's GO
        </Button>
      </div>
    </div>
  );
}
