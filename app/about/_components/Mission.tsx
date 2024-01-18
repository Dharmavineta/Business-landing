import Container from "@/components/common/Container";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="mt-28 bg-projectBlack">
      <Container className="px-5 py-10">
        <div className="flex flex-col items-center justify-center h-full text-center lg:flex-row lg:items-center lg:justify-between lg:text-start">
          <div className="px-10 xl:px-0 flex flex-col items-center lg:items-start gap-y-6 lg:w-1/2">
            <h1 className="text-projectPrimary font-bold text-3xl">
              Our Mission
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold xl:text-h1 leading-[55px] md:leading-[60px] xl:leading-normal text-white">
              Boost your career with your business.
            </h1>
            <p className="text-white max-w-prose lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus sint cupiditate laudantium, vitae fuga ipsam quas
            </p>
            <div className="flex gap-x-5 text-white">
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-1">
                  <span className="rounded-full flex items-center justify-center bg-projectPrimary h-6 w-6 text-white">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  The best business
                </div>
                <div className="flex gap-x-1">
                  <span className="rounded-full flex items-center justify-center bg-projectPrimary h-6 w-6 text-white">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  24*7 support
                </div>
                <div className="flex gap-x-1 text-left">
                  <span className="rounded-full flex-shrink-0 flex items-center justify-center bg-projectPrimary h-6 w-6 text-white">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  Supportive Customer care
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-1">
                  <span className="rounded-full flex items-center justify-center bg-projectPrimary h-6 w-6 text-white">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  The best business
                </div>
                <div className="flex gap-x-1">
                  <span className="rounded-full flex items-center justify-center bg-projectPrimary h-6 w-6 text-white">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  24*7 support
                </div>
                <div className="flex gap-x-1 text-left">
                  <span className="rounded-full flex-shrink-0 flex items-center justify-center bg-projectPrimary h-6 w-6 text-white">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  Supportive Customer care
                </div>
              </div>
            </div>
            <button className=" bg-white rounded-full w-fit px-5 py-2 flex items-center justify-center text-black gap-5">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
              Start your Free Trial
            </button>
          </div>
          <div className="text-white hidden relative lg:flex lg:w-1/2 ml-16">
            <div className="relative ">
              <Image
                className="-mt-28 w-[300px] h-[400px] relative z-30 object-cover rounded-2xl"
                src={"/3rd.jpg"}
                alt=""
                width={500}
                height={300}
              />
              <Image
                className="-mt-52 w-[300px] h-[400px] relative z-20 right-5 -top-40 opacity-40 object-cover rounded-2xl"
                src={"/3rd.jpg"}
                alt=""
                width={500}
                height={300}
              />
            </div>
            <div className="absolute bottom-5 text-white z-50 flex gap-x-16 ">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl font-bold">10K</h1>
                <p className="text-sm font-semibold max-w-">
                  Greate conversations per month
                </p>
              </div>
              <div className="w-[2px] h-26 font-bold bg-white relative"></div>
              <div className="flex flex-col gap-y-1 mt-10">
                <h1 className="text-2xl font-bold">95+</h1>
                <p className="text-sm font-semibold max-w-">
                  Projects completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
