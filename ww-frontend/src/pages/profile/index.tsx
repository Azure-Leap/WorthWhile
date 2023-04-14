import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "@/components/Profile/sidebar";

const Profile = () => {
  return (
    <div className="flex  ">
      <div className="flex mx-auto  w-9/12 mt-5 px-5">
        <ProSidebarProvider>
          <Side />
        </ProSidebarProvider>
        <div className="px-10"></div>
      </div>
    </div>
  );
};

export default Profile;
