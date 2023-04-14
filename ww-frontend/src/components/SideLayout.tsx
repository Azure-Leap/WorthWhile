import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "@/components/Profile/sidebar";

const SideLayout = ({ children }: any) => {
  return (
    <div className="flex  ">
      <div className="flex mx-auto  w-9/12 mt-5 px-5">
        <ProSidebarProvider>
          <Side />
        </ProSidebarProvider>
        <div className="px-10">{children}</div>
      </div>
    </div>
  );
};

export default SideLayout;
