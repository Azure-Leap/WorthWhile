import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="h-8 w-8"
                width="200"
                height="200"
                src="/image/2W Logo.png"
                alt="Hair Salon Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/my-account"
              className="px-3 py-2 rounded-md text-sm font-medium/ text-white"
            >
              My Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
