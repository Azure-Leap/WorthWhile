import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/logo.png" alt="Hair Salon Logo" width={80} height={80} />
          <div className="ml-4 text-gray-600">Hair Salon Name</div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/">
            <FaFacebookSquare
              className="text-gray-600 hover:text-blue-500 cursor-pointer"
              size={24}
            />
          </a>
          <a href="https://twitter.com/">
            <FaTwitterSquare
              className="text-gray-600 hover:text-blue-500 cursor-pointer"
              size={24}
            />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare
              className="text-gray-600 hover:text-blue-500 cursor-pointer"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
