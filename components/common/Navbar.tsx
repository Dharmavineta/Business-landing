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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) {
        setClick(true);
      } else {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      className={`fixed h-16 text-white top-0 left-0 z-[999] transition-all duration-300 w-full${
        scroll ? "border-b " : ""
      } ${pathName === "/" ? "bg-projectBlack" : "bg-white"} `}
    >
      <div className="flex justify-between h-full items-center max-w-[1440px] mx-auto px-10">
        <div className="border-b-2">
          <Link className="text-white hover:border-b" href={"/"}>
            Pancha
          </Link>
        </div>
        <div className=" gap-x-10 hidden lg:flex">
          <Link href={"/"} className="text-white hover:border-b">
            Home
          </Link>
          <Link href={"/about"} className="text-white hover:border-b">
            About
          </Link>
          <Link href={"/projects"} className="text-white hover:border-b">
            Projects
          </Link>
        </div>
        <div
          onClick={() => setClick(!click)}
          className=" lg:hidden cursor-pointer"
        >
          <HamburgerMenuIcon />
        </div>
        {click ? (
          <div
            ref={ref}
            className="transition-all duration-500 ease-linear transform opacity-100 absolute right-10 top-16 w-64 p-10 items-center justify-center gap-y-10 rounded-2xl text-xl font-bold h-80 bg-slate-800 z-[899] flex flex-col"
          >
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
        ) : (
          <div className="transition-all duration-500 ease-linear transform opacity-0 absolute right-10 top-16 w-64 p-10 items-center justify-center gap-y-10 rounded-2xl text-xl font-bold h-80 bg-slate-800 z-[899] flex flex-col">
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
