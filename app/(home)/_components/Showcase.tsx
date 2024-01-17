import Container from "@/components/common/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "Web UI Design",
    description: "Createive UI Design",
  },
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "To Design Digital Strategy",
    description: "Social Media Marketing",
  },
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "UI Design",
    description: "Createive Rebranding for Logo",
  },
  { id: 1, pic: "/heropic.jpg", title: "Web UI Dev", description: "Logo" },
];

const Showcase = () => {
  return (
    <Container>
      <h1 className="text-4xl lg:text-h1 text-center">Recent Showcase</h1>
      <div
        className={`grid lg:grid-cols-2 gap-10 mt-10 place-items-center px-10`}
      >
        {data.map((item, i, arr) => (
          <div
            key={item.id}
            className={`${i % 2 !== 0 ? "lg:mt-52 mt-0" : "mt-0"} `}
          >
            {i === 1 && (
              <button className="items-center lg:flex hidden justify-center px-5 py-2 bg-black gap-x-4 rounded-full mb-10 text-white ml-auto">
                <span className=" bg-white flex items-center justify-center rounded-full w-6 h-6 text-black">
                  {" "}
                  <ArrowRight className="w-4 h-4" />
                </span>{" "}
                Start your free trial
              </button>
            )}
            <div className="relative">
              <Image
                src={item.pic}
                alt=""
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
            <h1 className="font-bold text-lg mt-2">{item.title}</h1>
            <p className="text-sm text-slate-800 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Showcase;
