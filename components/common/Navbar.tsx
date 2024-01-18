"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [scroll, setScroll] = useState(false);
  const [click, setClick] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed h-16 text-white top-0 left-0 z-[999] transition-all duration-300 w-full max-w-[1440px] mx-auto px-10 ${
        scroll ? "border-b " : ""
      } ${pathName === "/" ? "bg-projectBlack" : "bg-white"} `}
    >
      <div className="flex justify-between h-full items-center">
        <div className="border-b-2">
          <Link href={"/"}>Pancha</Link>
        </div>
        <div className=" gap-x-10 hidden lg:flex">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <Link href={"/about"} className="text-white">
            About
          </Link>
          <Link href={"/projects"} className="text-white">
            Contact
          </Link>
        </div>
        <div
          onClick={() => setClick(!click)}
          className=" lg:hidden cursor-pointer"
        >
          <HamburgerMenuIcon />
        </div>
        {click && (
          <div className="absolute right-10 top-16 w-64 p-10 items-center justify-center gap-y-10 rounded-2xl text-xl font-bold h-80 bg-slate-800 z-[999] flex flex-col">
            <Link href={"/"} className="text-white hover:border-b">
              Home
            </Link>
            <Link href={"/about"} className="text-white hover:border-b">
              About
            </Link>
            <Link href={"/projects"} className="text-white hover:border-b">
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
