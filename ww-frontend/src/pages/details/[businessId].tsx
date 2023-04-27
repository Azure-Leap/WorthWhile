import Service from "@/components/Service";
import Sidebar from "@/components/Sidebar";
import { Business } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Services = ({ business, staffs }: any) => {
  return (
    <Grid container maxWidth="lg" sx={{ margin: "0 auto" }}>
      <Grid
        item
        xs={12}
        md={7.5}
        sx={{
          backgroundColor: "pink",
          padding: { xs: "15px 15px", md: "45px 15px" },
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          alt="Salon"
          style={{ width: "100%", borderRadius: "6px" }}
        />
        <h1 className="text-2xl">Matrix Salon</h1>
        <p className="text-xs text-gray-700">
          Чингэлтэй дүүрэг, 3-р хороо, Энхтайваны өргөн чөлөө, Матрикс барилга
        </p>
        <div className="flex justify-between">
          <h1 className="text-2xl">Services</h1>
          <div className="relative ">
            <input
              type="text"
              placeholder="Find a service or salon"
              className="w-72 py-2 pl-10 pr-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:border-transparent rounded-xl bg-gray-100 text-sm"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearch className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>
        {/* <Service /> */}
      </Grid>
      <Sidebar business={business} staffs={staffs} />
    </Grid>
  );
};

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:8888/business/${query.businessId}`);
  const data = await res.json();
  const res2 = await fetch(
    `http://localhost:8888/staffs?businessId=${query.businessId}`
  );
  const data2 = await res2.json();

  return {
    props: { business: data.business, staffs: data2.staffs },
  };
}

export default Services;
