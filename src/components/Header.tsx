"use client";
import { GlobeIcon, HomeIcon, Key, List, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header className="w-full fixed z-50 border-b-2 border-white/10">
      <div className="backdrop-blur">
        <div className=" py-4 text-gray-200 flex justify-center relative backdrop-blur-lg max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center z-10 md:mx-0 w-full px-8 md:px-16 lg:px-24 2xl:px-0">
            <div className="flex items-center font-bold text-xl leading-5 gap-1">
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              <h2 className="text-lg">underGod</h2>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex gap-4 text-base text-white/70">
                <li className="hover:text-white transition">
                  <Link href="/">Product</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link href="/">Pricing</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link href="/">Change log</Link>
                </li>
              </ul>
            </nav>

            <div className="lg:flex gap-2 hidden">
              <button className="py-1 px-4">Log in</button>
              <Button>
                <span>Sign Up</span>
              </Button>
            </div>
            <div className="flex items-center lg:hidden bg-gradient-to-tr from-[#3388ff52] to-white p-0.5 rounded ">
              <button
                className="size-7 rounded-lg border-2 border-transparent relative bg-black/90 shadow-inner py- px-4 hover:bg-gradient-to-t from-blue-500/20 to-violet-500/20"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
              >
                <div
                  className={twMerge(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 transition duration-300",
                    isMobileNavOpen && "translate-y-0 rotate-45 "
                  )}
                >
                  <div className="w-4 h-0.5 bg-gray-100"></div>
                </div>
                <div
                  className={twMerge(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 transition duration-300",
                    isMobileNavOpen && "translate-y-0 -rotate-45 "
                  )}
                >
                  <div className="w-4 h-0.5 bg-gray-100"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-16 h-screen w-full mx-0 flex justify-end ${
          isMobileNavOpen ? "translate-y-0" : "-translate-y-[200%]"
        } transition-transform duration-500`}
      >
        <nav className="bg-white/20 mr-8 size-64 flex justify-center items-center backdrop-blur backdrop-bri transition-all rounded-[8px] px-4 py-6">
          <ul
            className=" text-base text-white/80 space-y-6 tracking-wider size-full"
            onClick={() => setIsMobileNavOpen(() => false)}
          >
            <li className="hover:text-white transition flex gap-2">
              <HomeIcon />
              <Link href="/">Product</Link>
            </li>
            <li className="hover:text-white transition flex gap-2">
              <GlobeIcon />
              <Link href="/">Teams</Link>
            </li>
            <li className="hover:text-white transition flex gap-2">
              <List />
              <Link href="/">Change log</Link>
            </li>
            <li className="hover:text-white transition flex gap-2">
              <Key />
              <Link href="/">Sign In</Link>
            </li>
            <li className="hover:text-white transition flex gap-2">
              <User />
              <Link href="/">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
