import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side2 from "./About/sidebar";

const SideLayout2 = ({ children }: any) => {
  return (
    <div className="w-10/12">
      <div className="flex justify-center mt-5 px-5">
        <ProSidebarProvider>
          <Side2 />
        </ProSidebarProvider>
        <div className="px-10 max-w-lg">{children}</div>
      </div>
    </div>
  );
};

export default SideLayout2;
