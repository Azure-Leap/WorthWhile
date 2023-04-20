import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side2 from "@/components/About/sidebar";

const Profile = () => {
  return (
    <div className="flex  ">
      <div className="flex mx-auto  w-9/12 mt-5 px-5">
        <ProSidebarProvider>
          <Side2 />
        </ProSidebarProvider>
        <div className="px-10">
          <h1>Welcome Ashid, Duulga, Zulaa</h1>
          <h3>Favorited Businesses</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
