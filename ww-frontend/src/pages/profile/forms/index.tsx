import React from "react";
import SideLayout from "@/components/SideLayout";

const Profile = () => {
  return (
    <SideLayout>
      <div className="ml-5 mt-2">
        <div>
          <h1 className="text-2xl ">Custom Forms</h1>
        </div>
        <div className="mt-40">
          <img
            src="/image/profile/forms.png"
            alt="review"
            className="w-1/6 h-1/6 mx-auto"
          />
          <h2 className="text-xl text-center my-5 ">
            You don't have any forms yet.
          </h2>
          <p className="text-gray-500 text-center">
            Your form will appear here.
          </p>
        </div>
      </div>
    </SideLayout>
  );
};

export default Profile;
