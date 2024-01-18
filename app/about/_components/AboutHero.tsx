import Container from "@/components/common/Container";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <Container>
      <div className="bg-projectBlack rounded-3xl text-white py-16 min-h-[40vh]">
        <div className="flex gap-x-5 h-full items-center justify-center lg:items-center lg:justify-start lg:px-10">
          <div className=" flex flex-col items-center lg:items-start gap-y-5">
            <h1 className="text-4xl lg:text-6xl xl:text-h1 text-center lg:text-start xl:leading-[80px]">
              Ready to take
              <br />
              <span className="text-projectPrimary">your Business</span> <br />
              to the next level?
            </h1>
            <p className="text-center lg:text-left max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem
              odit neque in, ea architecto animi corporis nam accusantium
              necessitatibus?
            </p>
            <div className="flex relative items-center gap-4">
              <Image
                src={"/2nd.jpg"}
                alt=""
                height={200}
                width={200}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <p>Rated 4.9/5 stars</p>
                <div className="flex gap-x-1">
                  {[...Array(5)].map((ele, i, arr) => (
                    <div key={i}>
                      <StarFilledIcon className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" justify-end w-1/2 hidden lg:flex">
            <div className=" relative">
              <Image
                src={"/3rd.jpg"}
                alt=""
                className="object-cover rounded-xl relative -mb-64 z-50 "
                width={500}
                height={500}
              />
              <Image
                src={"/3rd.jpg"}
                alt=""
                height={500}
                width={500}
                className="absolute -left-10 blur-sm opacity-30 top-10 z-20"
              />
              <Image
                src={"/3rd.jpg"}
                alt=""
                height={500}
                width={500}
                className="absolute -left-20 blur-sm opacity-30 top-20 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutHero;
