import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import { AuthContext } from "../context/authContext";
import {
  FaCalendarAlt,
  FaShoppingBag,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsGearWideConnected, BsFillEnvelopeHeartFill } from "react-icons/bs";

const menuItems = [
  {
    id: 1,
    label: "Appointments",
    icon: FaCalendarAlt,
    link: "/business/Appointments",
  },
  {
    id: 2,
    label: "Services",
    icon: FaShoppingBag,
    link: "/business/Services",
  },
  { id: 3, label: "Staff", icon: FaUsers, link: "/business/Staff" },
  {
    id: 4,
    label: "Salon Detail",
    icon: BsGearWideConnected,
    link: "/business/SalonDetail",
  },
  {
    id: 5,
    label: "Reviews",
    icon: BsFillEnvelopeHeartFill,
    link: "/business/Reviews",
  },
];

const BusinessSideBar = () => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  // const { setBusinessUser, businessUser } =
  //   useContext(AuthContext);

  const router = useRouter();

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );
  return (
    <div className="h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col bg-stone-800 w-70">
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative"></div>
        <div class="flex items-center justify-between mt-2 p-3 rounded-md cursor-pointer bg-gray-100 bg-opacity-5">
          <div>
            <h3 class="text-base font-medium text-white">Devias</h3>
            <p class="text-sm text-neutral-400">Production</p>
          </div>
          <div class="text-neutral-500"></div>
        </div>

        <div className="flex flex-col items-start">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            // const classes = getNavItemClasses(menu);
            return (
              <div
                key={menu.id}
                className="flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-5 rounded w-full"
              >
                <Link href={menu.link}>
                  <span className="flex py-4 px-3 items-center w-full h-full ">
                    <div style={{ width: "2rem" }}>
                      <Icon color="gray" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {menu.label}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-5 rounded w-full px-3 py-4">
        <div style={{ width: "2rem" }}>
          <FaSignOutAlt color="white" />
        </div>
        <span className="text-sm font-medium text-white flex items-center cursor-pointerrounded w-full">
          Logout
        </span>
      </div>
    </div>
  );
};

export default BusinessSideBar;
