import React from "react";
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
        <Link href={"/profile/giftcards"}>
          <MenuItem> Gift Cards </MenuItem>
        </Link>
        <Link href="/profile/appointments">
          <MenuItem> Appointments </MenuItem>
        </Link>

        <Link href="/profile/family-and-friends">
          <MenuItem> Family & Friends </MenuItem>
        </Link>

        <Link href="/profile/favourites">
          <MenuItem> Favourites </MenuItem>
        </Link>

        <Link href="/profile/settings">
          <MenuItem> Account & Settings </MenuItem>
        </Link>

        <Link href="/profile/reviews">
          <MenuItem> Reviews </MenuItem>
        </Link>

        <Link href="/profile/payments">
          <MenuItem> Payments </MenuItem>
        </Link>

        <Link href="/profile/forms">
          <MenuItem> Custom Forms </MenuItem>
        </Link>

        <Link href="/ab/terms">
          <MenuItem> Terms of Service </MenuItem>
        </Link>

        <Link href="/ab/privacy">
          <MenuItem> Privacy Policy </MenuItem>
        </Link>

        <Link href="/profile/log-out">
          <MenuItem> Log Out </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
  );
};

export default Side;
