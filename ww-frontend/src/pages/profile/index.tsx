import React, { useState } from "react";
import SideLayout from "@/components/SideLayout";

const Profile = () => {
  return (
    <SideLayout>
      <div className="ml-5 mt-2">
        <div>
          <h1 className="text-2xl ">Welcome Ashid, Duulga, Zulaa</h1>
        </div>
        <div className="my-20">
          <img
            src="/image/profile/review.png"
            alt="review"
            className="w-1/6 h-1/6 mx-auto"
          />
          <h2 className="text-xl text-center my-5 ">Profile start page</h2>
          <p className="text-gray-500 text-center">
            Here you'll see your profile summary.
          </p>
        </div>
      </div>
    </SideLayout>
  );
};

export default Profile;
