import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import ImageAvatars from "./Avatar/avatar";

const Side = () => {
  return (
    <Sidebar className="bg-white">
      <Menu
        menuItemStyles={{
          button: ({ level }) => {
            if (level === 0)
              return {
                color: "#000",
                backgroundColor: "#fff",
              };
          },
        }}
      >
        <ImageAvatars />
        <MenuItem component={<Link href={"/profile/giftcards"} />}>
          Gift Cards
        </MenuItem>

        <MenuItem component={<Link href={"/profile/appointments"} />}>
          Appointments
        </MenuItem>

        <MenuItem component={<Link href={"/profile/family-and-friends"} />}>
          Family & Friends
        </MenuItem>

        <MenuItem component={<Link href={"/profile/favourites"} />}>
          Favourite
        </MenuItem>

        <MenuItem component={<Link href={"/profile/settings"} />}>
          Account & Settings
        </MenuItem>

        <MenuItem component={<Link href={"/profile/reviews"} />}>
          Reviews
        </MenuItem>

        <MenuItem component={<Link href={"/profile/payments"} />}>
          Payments
        </MenuItem>

        <MenuItem component={<Link href={"/profile/forms"} />}>
          Custom Forms
        </MenuItem>

        <MenuItem component={<Link href={"/ab/terms"} />}>
          Terms of Services
        </MenuItem>

        <MenuItem component={<Link href={"/ab/privacy"} />}>
          Privacy Policy
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Side;
