import React from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";
import BasicModal from "./modal";

const Profile = () => {
  return (
    <SideLayout>
      <div className="ml-5 mt-2">
        <div>
          <h1 className="text-2xl ">Family & Friends</h1>
        </div>
        <div className="my-20">
          <img
            src="/image/profile/family.png"
            alt="review"
            className="w-1/6 h-1/6 mx-auto"
          />
          <h2 className="text-xl text-center my-5 ">
            Add Your Family & Friends
          </h2>
          <p className="text-gray-500 text-center">
            Link an account to schedule appointments on begalf of others - a
            child, family member, partner, or even a pet. You will able to
            manage their appointments, receive notifications, and make payments.
          </p>
          <div className="my-10">
            <Button
              variant="outlined"
              className=" text-black border-gray-400  w-2/6 h-10 flex mx-auto hover:bg-gray-300"
            >
              Learn more
            </Button>
          </div>
          <div>
            <Button className="bg-green-400 text-white w-4/6 h-10 hover:bg-green-600 flex mx-auto">
              <BasicModal />
            </Button>
          </div>
        </div>
      </div>
    </SideLayout>
  );
};

export default Profile;
