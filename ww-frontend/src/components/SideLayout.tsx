import React, { useState, useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "@/components/Profile/sidebar";
import BeatLoader from "react-spinners/BeatLoader";
import Layout from "@/components/layout";

const SideLayout = ({ children }: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);
  return (
    <>
      <Layout>
        <div>
          {loading ? (
            <div className="flex justify-center items-center w-full h-screen -translate-y-10">
              <BeatLoader color={"#000"} loading={loading} size={20} />
            </div>
          ) : (
            <div className="flex justify-center my-5 px-5 pb-10">
              <ProSidebarProvider>
                <Side />
              </ProSidebarProvider>
              <div className="px-5 max-w-lg">{children}</div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default SideLayout;
