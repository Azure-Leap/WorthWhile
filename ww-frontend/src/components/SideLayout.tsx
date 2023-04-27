import React, { useState, useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "@/components/Profile/sidebar";
import BeatLoader from "react-spinners/BeatLoader";

const SideLayout = ({ children }: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <BeatLoader color={"#000"} loading={loading} size={30} />
        </div>
      ) : (
        <div className="flex justify-center my-5 px-5">
          <ProSidebarProvider>
            <Side />
          </ProSidebarProvider>
          <div className="px-5 max-w-lg">{children}</div>
        </div>
      )}
    </div>
  );
};

export default SideLayout;
