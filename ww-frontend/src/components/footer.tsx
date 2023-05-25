import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import Logo from "./logo";

const data = [
  { title: "About Us", url: "/ab/about" },
  // { title: "FAQ", url: "/ab/faq" },
  { title: "Privacy Policy", url: "/ab/privacy" },
  { title: "Terms of Service", url: "/ab/terms" },
  { title: "Contact", url: "/ab/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-600 text-white bottom-10 ">
      <div className="w-11/12 m-auto">
        <div className="flex justify-between items-center border-b  py-5">
          <div className="flex text-xs gap-6">
            {data.map((el, idx) => {
              return (
                <Link key={idx} href={el.url}>
                  <p className="hover:text-white">{el.title}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2">
            <div className="border cursor-pointer rounded px-3 py-2 flex items-center">
              <AiFillApple size={35} className="pr-1" />
              <div>
                <p className="text-xs">Download from</p>
                <p className="text-xs"> AppStore</p>
              </div>
            </div>
            <div className="border cursor-pointer rounded px-4 py-2 flex items-center">
              <BsGooglePlay size={35} className="pr-1" />
              <div>
                <p className="text-xs">Download from</p>
                <p className="text-xs"> PlayStore</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-5 items-center">
          <div className="flex justify-between gap-5 items-center">
            {/* <p className="text-lg font-semibold">WorthWhile</p> */}
            <div className="mt-5">
              <Logo color={"#fff"} />
            </div>
            <p className="text-xs">
              © 2023 WorthWhile Inc. All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            <FaFacebookSquare size={40} />
            <FaTwitterSquare size={40} />
            <FaInstagramSquare size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
