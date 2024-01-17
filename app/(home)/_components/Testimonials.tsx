import Container from "@/components/common/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="px-10">
      <Container className="bg-slate-200 rounded-3xl mt-20 mb-20 ">
        <div className=" flex flex-col p-5 items-center justify-center gap-y-2">
          <div className="relative rounded-full w-24 h-24">
            <Image
              className="rounded-full object-cover "
              src={"/2nd.jpg"}
              alt=""
              fill
            />
          </div>
          <p className="font-bold max-w-prose text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            harum sequi itaque vel obcaecati minima mollitia. In nulla
            reprehenderit at.{" "}
          </p>
          <h1 className="font-bold">Krishna Bharadwaj</h1>
          <p className="text-sm text-slate-600">CEO at Pancha-Parva</p>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded-full flex items-center justify-center  bg-black text-white">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-6 h-6 rounded-full  flex items-center justify-center bg-black text-white">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
