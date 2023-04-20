import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "@/components/Profile/sidebar";

const Profile = () => {
  return (
    <div className="w-10/12">
      <div className="flex justify-center mt-5 px-5">
        <ProSidebarProvider>
          <Side />
        </ProSidebarProvider>
        <div className="mt-2 px-5 max-w-lg">
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
      </div>
    </div>
  );
};

export default Profile;
