import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side2 from "./About/sidebar";
import Layout from "@/components/layout";

const SideLayout2 = ({ children }: any) => {
  return (
    <>
      <Layout>
        <div className="w-10/12">
          <div className="flex justify-center my-5 px-5 pb-10">
            <ProSidebarProvider>
              <Side2 />
            </ProSidebarProvider>
            <div className="px-10 max-w-lg">{children}</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SideLayout2;
