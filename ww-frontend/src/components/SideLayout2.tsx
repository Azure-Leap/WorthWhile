import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side2 from "./About/sidebar";
import Layout from "@/components/layout";

const SideLayout2 = ({ children }: any) => {
  return (
    <>
      <Layout>
        <div className="mx-40">
          <div className="flex justify-center my-5 px-5 pb-10">
            <ProSidebarProvider>
              <Side2 />
            </ProSidebarProvider>
            <div className="px-10 max-w-5xl">{children}</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SideLayout2;
