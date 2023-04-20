import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

const logo = require("../assets/image/logo.png");

const Navbar: React.FC = () => {
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
            <Link
              href="/my-account"
              className="px-3 py-2 rounded-md text-sm font-medium/ text-white flex gap-1 justify-center align-middle"
            >
              <FiUser size={20} />
              MY ACCOUNT
            </Link>
            <Link
              href="/create-business"
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
