import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-heroBg h-screen ">
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="flex flex-col items-center justify-center h-full text-center lg:flex-row lg:items-center lg:justify-between lg:text-start">
          {/* <div className="absolute"></div> */}
          <div className="px-10 xl:px-0 flex flex-col items-center lg:items-start gap-y-6">
            <h1 className="text-5xl md:text-6xl font-bold xl:text-h1 leading-[55px] md:leading-[60px] xl:leading-normal text-white">
              Ready to take your <br />{" "}
              <span className="text-projectPrimary">Business Growth</span>{" "}
              <br /> to the next level?
            </h1>
            <p className="text-white max-w-prose lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus sint cupiditate laudantium, vitae fuga ipsam quas
              culpa asperiores doloribus ratione, dolores necessitatibus
              corporis consequuntur quasi totam! Ea quasi nisi possimus!
            </p>
            <button className=" bg-white rounded-full w-fit px-5 py-2 flex items-center justify-center text-black gap-5">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
              Start your Free Trial
            </button>
          </div>
          <div className="text-white hidden lg:block ">
            <div className="flex rounded-full items-center justify-center w-[550px] h-[550px] border border-projectPrimary">
              <div className="flex rounded-full items-center justify-center w-[400px] h-[400px] border border-slate-300">
                <div className="w-[300px] h-[300px] relative">
                  <Image
                    src={"/heropic.jpg"}
                    alt=""
                    fill
                    className="rounded-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
