import Container from "@/components/common/Container";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="mt-20 mb-20 w-full">
      <Container className="px-5 w-full">
        <div className="grid grid-cols-1 gap-10 w-full place-items-center sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl w-64 h-72 relative">
            <Image
              className=" rounded-2xl object-cover"
              src={"/3rd.jpg"}
              alt="/"
              fill
            />
            <div className="absolute top-2 flex gap-x-2 right-2">
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <TwitterLogoIcon className="w-4 h-4" />
              </div>
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <InstagramLogoIcon className="w-4 h-4" />
              </div>
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl w-64 h-72 relative">
            <Image
              className=" rounded-2xl object-cover"
              src={"/3rd.jpg"}
              alt="/"
              fill
            />
            <div className="absolute top-2 flex gap-x-2 right-2">
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <TwitterLogoIcon className="w-4 h-4" />
              </div>
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <InstagramLogoIcon className="w-4 h-4" />
              </div>
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl w-64 h-72 relative">
            <Image
              className=" rounded-2xl object-cover"
              src={"/3rd.jpg"}
              alt="/"
              fill
            />
            <div className="absolute top-2 flex gap-x-2 right-2">
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <TwitterLogoIcon className="w-4 h-4" />
              </div>
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <InstagramLogoIcon className="w-4 h-4" />
              </div>
              <div className="bg-slate-200 flex items-center justify-center w-6 h-6 rounded-full">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <div className="max-w-[1440px] px-10 rounded-3xl mx-auto py-20 bg-slate-700 flex flex-col gap-y-4 text-white items-center justify-center">
            <h1 className="font-bold">Enough talk, let&apos;s get to work</h1>
            <button className="bg-white px-5 py-2 text-black rounded-full">
              Get in touch
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
