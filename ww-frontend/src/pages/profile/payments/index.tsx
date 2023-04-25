import React from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";
import BasicModal from "./modal";

const Profile = () => {
  return (
    <SideLayout>
      <div className="ml-5 mt-2">
        <div>
          <h1 className="text-2xl ">Payments</h1>
        </div>
        <div className="my-10">
          <img
            src="/image/profile/payment.png"
            alt="review"
            className="w-2/6 h-2/6 mx-auto"
          />
          <Button
            sx={{
              bgcolor: "lime",
              display: "block",
              margin: "auto",
              width: 250,
              ":hover": {
                bgcolor: "green",
              },
            }}
          >
            <BasicModal />
          </Button>
        </div>
        <div>
          <h4>PAYMENT HISTORY</h4>
          <div className="my-10">
            <img
              src="/image/profile/receipts.png"
              alt="review"
              className="w-1/6 h-1/6 mx-auto"
            />
            <h2 className="text-xl text-center my-5 ">Your Receipts</h2>
            <p className=" text-xl text-center text-gray-700">
              Your completed transactions will appear here
            </p>
          </div>
        </div>
      </div>
    </SideLayout>
  );
};

export default Profile;
