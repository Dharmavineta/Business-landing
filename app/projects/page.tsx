import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const data = [
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "Web UI Design",
    description: "Createive UI Design",
  },
  {
    id: 2,
    pic: "/heropic.jpg",
    title: "To Design Digital Strategy",
    description: "Social Media Marketing",
  },
  {
    id: 3,
    pic: "/heropic.jpg",
    title: "UI Design",
    description: "Createive Rebranding for Logo",
  },
  {
    id: 4,
    pic: "/heropic.jpg",
    title: "UI Design",
    description: "Createive Rebranding for Logo",
  },
  {
    id: 5,
    pic: "/heropic.jpg",
    title: "UI Design",
    description: "Createive Rebranding for Logo",
  },
  {
    id: 6,
    pic: "/heropic.jpg",
    title: "UI Design",
    description: "Createive Rebranding for Logo",
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <div className="text-white ">
          <Container className="py-10">
            <div className="bg-projectBlack py-10 flex items-center justify-center">
              <h1 className="text-4xl lg:text-6xl text-center">
                Our Portfolio
              </h1>
            </div>
            <div className="mt-20 px-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {data.map((item, i, arr) => (
                <Link
                  href={`/projects/${item.id}`}
                  key={item.id}
                  className="cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={item.pic}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-3xl"
                    />
                  </div>
                  <h1 className="font-bold text-lg mt-2 text-black">
                    {item.title}
                  </h1>
                  <p className="text-sm text-slate-800 mt-1">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
