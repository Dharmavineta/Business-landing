import Container from "@/components/common/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProcessHero = () => {
  return (
    <div className="bg-projectBlack min-h-screen py-10 w-full flex items-center">
      <div className="max-w-[1440px] mx-auto h-full relative ">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:gap-x-10 h-full items-center lg:flex-row lg:items-center justify-center">
          <div className="mt-28 lg:mt-0 relative lg:w-1/2">
            <Image
              src={"/2nd.jpg"}
              alt=""
              height={400}
              width={400}
              className="object-cover relative z-50 lg:h-[550px] lg:w-[550px] rounded-xl"
            />
            <Image
              src={"/2nd.jpg"}
              alt=""
              height={400}
              width={400}
              className="object-cover absolute top-0 lg:h-[550px] lg:w-[500px]  right-5 z-20 opacity-50 blur-sm "
            />
            <Image
              src={"/2nd.jpg"}
              alt=""
              height={400}
              width={400}
              className="object-cover absolute top-0 lg:h-[550px] lg:w-[550px] right-16 z-10 opacity-50 blur-sm"
            />
          </div>
          <div className="flex flex-col lg:w-1/2 items-center lg:items-start gap-y-6">
            <h1 className="text-projectPrimary text-3xl lg:text-4xl">
              About Us
            </h1>
            <h1 className="text-center lg:text-start text-white text-4xl lg:text-5xl xl:text-h1">
              The core mission behind all our work
            </h1>
            <p className="text-sm max-w-prose text-slate-300 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nihil, eius minima veritatis architecto facilis, iusto aliquam
              incidunt dolore odio suscipit nostrum facere odit quasi voluptate
              dolores, earum ea? In.
            </p>
            <div className="flex gap-x-20">
              <div className="flex flex-col text-white">
                <h1 className="text-projectPrimary text-3xl">
                  330 <span className="ml-[1px]">+</span>
                </h1>
                <p>Companies Helped</p>
              </div>
              <div className="flex flex-col text-white">
                <h1 className="text-projectPrimary text-3xl">
                  210 <span className="ml-[1px]">+</span>
                </h1>
                <p>Revenue Generated</p>
              </div>
            </div>
            <button className=" bg-white rounded-full w-fit px-5 py-2 flex items-center justify-center text-black gap-5">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
              Start your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessHero;
