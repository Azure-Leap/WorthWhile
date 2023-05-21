import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side2 from "./About/sidebar";
import TailWindNavBar from "./TailwindNavBar";
import Footer from "@/components/footer";

const SideLayout2 = ({ children }: any) => {
  return (
    <>
      <TailWindNavBar />
      <div className="w-10/12">
        <div className="flex justify-center my-5 px-5">
          <ProSidebarProvider>
            <Side2 />
          </ProSidebarProvider>
          <div className="px-10 max-w-lg">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SideLayout2;
