import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="md:grid grid-rows-2 lg:grid-cols-4 text-white/80 text-center py-20 border-t border-t-white/50 px-4 2xl:px-40 max-w-screen-xl mx-auto">
        <div className="lg:col-span-1 mb-10">
          <div className="flex flex-col-reverse md:flex-row  items-center font-bold text-xl leading-5 gap-1">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <h2 className="text-lg">underGod</h2>
          </div>
        </div>
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          <div className="">
            <h4 className="text-white font-semibold">Products</h4>
            <nav className="flex flex-col text-white/70 text-sm tracking-wider gap-2 mt-4">
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                Courses
              </Link>
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                Tutorials
              </Link>
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="">
            <h4 className="text-white font-semibold">Company</h4>
            <nav className="flex flex-col text-white/70 text-sm tracking-wider gap-2 mt-4">
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                Contact Us
              </Link>
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                About Us
              </Link>
            </nav>
          </div>
          <div className="">
            <h4 className="text-white font-semibold">Resources</h4>
            <nav className="flex flex-col text-white/70 text-sm tracking-wider gap-2 mt-4 text-left">
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                Downloads
              </Link>
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                Community
              </Link>
            </nav>
          </div>
          <div className="">
            <h4 className="text-white font-semibold">FOLLOW US</h4>
            <nav className="flex flex-col text-white/70 text-sm tracking-wider gap-2 mt-4">
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                <TwitterLogoIcon />
              </Link>
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                <InstagramLogoIcon />
              </Link>
              <Link
                href={"#"}
                className="hover:text-white transition-colors duration-1000 ease-in-out px-1 w-fit mx-auto"
              >
                <LinkedInLogoIcon />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/50 text-white text-center py-8 px-4 2xl:px-40 max-w-screen-xl mx-auto">
        &copy; All right reserved 2024
      </div>
    </footer>
  );
};

export default Footer;
