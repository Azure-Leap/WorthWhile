import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const NewFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            We are a company that provides innovative solutions to everyday
            problems.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="/contact" passHref>
                <p>Contact Us</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy-policy" passHref>
                <p>Privacy Policy</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms-of-service" passHref>
                <p>Terms of Service</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq" passHref>
                <p>FAQ</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <ul>
            <li className="mb-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
