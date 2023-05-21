import { Fragment, useState, useContext, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Modal, Box } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import Signin from "./Modals/Signin";
import Signup from "./Modals/Signup";
import { AuthContext } from "@/context/authContext";
import Logo from "./logo";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Salon List", href: "/salonlist", current: false },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TailWindNavBar() {
  const [open, setOpen] = useState<Boolean>(false);
  const [isSign, setIsSign] = useState<Boolean>(true);
  const { user, setUserData } = useContext(AuthContext);
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Disclosure
        as="nav"
        className={`${pathname === "/" ? "bg-white" : "bg-cyan-600"} ${
          pathname === "/salonlist" ? "fixed" : ""
        } w-full`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="hidden h-8 w-auto lg:block">
                      <Logo color={pathname === "/" ? "#312e81" : "white"} />
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : `${
                                  pathname === "/"
                                    ? "text-indigo-900"
                                    : "text-white"
                                } hover:bg-gray-100 ${
                                  pathname === "/"
                                    ? "hover:text-indigo-950"
                                    : "hover:text-cyan-800"
                                } `,
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    href="/business/auth"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    className={` text-xs rounded-md px-4 hidden sm:block   font-medium  border-[1px] ${
                      pathname === "/"
                        ? "border-cyan-700 hover:border-white"
                        : "border-white"
                    } ${
                      pathname === "/" ? "hover:bg-cyan-500" : "hover:bg-white"
                    } ${pathname === "/" ? "text-cyan-800" : "text-white"} ${
                      pathname === "/"
                        ? "hover:text-white"
                        : "hover:text-cyan-800"
                    } ${pathname === "/" ? "bg-white" : "bg-cyan-600"}`}
                  >
                    БИЗНЕС НЭМЭХ
                  </Link>
                  <button
                    type="button"
                    className={`rounded-full p-1 text-slate-300 ${
                      user ? "ml-3" : "none"
                    } ${
                      pathname === "/" ? "border-cyan-700" : "border-white"
                    } ${pathname === "/" ? "bg-cyan-500" : "bg-white"} ${
                      pathname === "/"
                        ? "hover:text-white"
                        : "hover:text-cyan-800"
                    }`}
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-7 w-7" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  {!user ? (
                    <button
                      onClick={() => setOpen(true)}
                      className={`text-sm py-2 px-3 rounded-md   hover:rounded-md hover:px-3 hover:py-2 flex gap-1 items-center font-medium border-[1px] ${
                        pathname === "/"
                          ? "border-cyan-700 hover:border-white"
                          : "border-white"
                      } ${pathname === "/" ? "bg-white" : "bg-cyan-600"} ${
                        pathname === "/"
                          ? "hover:text-white"
                          : "hover:text-cyan-800"
                      } ${
                        pathname === "/"
                          ? "hover:bg-cyan-500"
                          : "hover:bg-white"
                      } ${pathname === "/" ? "text-cyan-800" : "text-white"}`}
                    >
                      Log in
                      <FiArrowRight size={15} />
                    </button>
                  ) : (
                    <Menu as="div" className="relative ">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm ">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user?.profileImg}
                            alt="userImg"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile/settings"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={() => {
                                  setUserData(null);
                                }}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Modal
        open={Boolean(open)}
        onClose={() => {
          setOpen(false), setIsSign(true);
        }}
      >
        <Box sx={style}>
          {isSign ? (
            <Signin setIsSign={setIsSign} setOpen={setOpen} />
          ) : (
            <Signup setIsSign={setIsSign} setOpen={setOpen} />
          )}
        </Box>
      </Modal>
    </>
  );
}
