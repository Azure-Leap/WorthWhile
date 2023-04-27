import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "@/components/Profile/sidebar";

const SideLayout = ({ children }: any) => {
  return (
    <div>
      <div className="flex justify-center my-5 px-5">
        <ProSidebarProvider>
          <Side />
        </ProSidebarProvider>
        <div className="px-5 max-w-lg">{children}</div>
      </div>
    </div>
  );
};

export default SideLayout;
