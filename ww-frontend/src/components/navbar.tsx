import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { useContext, useState } from "react";
import { Modal, Box } from "@mui/material";
import Signin from "./Modals/Signin";
import Signup from "./Modals/Signup";
import Avatar from "@mui/material/Avatar";

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

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [isSign, setIsSign] = useState<Boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const logo = require("../assets/image/logo.png");

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="h-12 w-12"
                width="400"
                height="400"
                src={logo}
                alt="Hair Salon Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setOpen(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium/ text-white flex gap-1 justify-center align-middle"
                >
                  <FiUser size={20} />
                  MY ACCOUNT
                </button>
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
            ) : (
              <div className="py-4 px-6">
                <Link href="/profile" className="flex items-center">
                  <Avatar src="" />
                  <h1 className="text-white pl-2">Profile</h1>
                </Link>
              </div>
            )}
            <Link
              href="/business/auth"
              className="bg-white text-xs py-2 rounded-md px-5"
            >
              БИЗНЕС НЭМЭХ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
