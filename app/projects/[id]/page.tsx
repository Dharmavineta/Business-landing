import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
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
];

const IndProject = () => {
  return (
    <div>
      <Container className="mb-28">
        <div className="mt-10 w-full text-black  ">
          <div className="px-10 relative w-full">
            <div className="w-full h-64 relative">
              <Image
                src={"/3rd.jpg"}
                alt=""
                fill
                className="object-cover object-center rounded-3xl"
              />
            </div>
            <div className=" gap-x-5 justify-center relative -mt-5 z-10 hidden md:flex">
              <div className="flex gap-x-1 bg-black text-white px-5 py-2 rounded-xl">
                <h1 className="font-bold">Category:</h1>
                <p>Cloud</p>
              </div>
              <div className="flex gap-x-1 bg-black text-white px-5 py-2 rounded-xl">
                <h1 className="font-bold">Date:</h1>
                <p>24/12/23</p>
              </div>
              <div className="flex gap-x-1 bg-black text-white px-5 py-2 rounded-xl">
                <h1 className="font-bold">Client:</h1>
                <p>Azure</p>
              </div>
              <div className="flex gap-x-1 bg-black text-white px-5 py-2 rounded-xl">
                <h1 className="font-bold">Location:</h1>
                <p>Bangalore</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-16 text-black px-10 mt-20">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold">
                <span className="font-bold mr-1">01.</span>The Challenge
              </h1>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laboriosam quo quas facilis inventore nesciunt sed
                cupiditate magnam, ipsum autem aliquid vero quaerat quidem
                officiis commodi beatae cumque debitis sequi!
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold mr-1">
                <span className="font-bold">02.</span>The Solution
              </h1>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laboriosam quo quas facilis inventore nesciunt sed
                cupiditate magnam, ipsum autem aliquid vero quaerat quidem
                officiis commodi beatae cumque debitis sequi!
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold mr-1">
                <span className="font-bold">03.</span>The Result
              </h1>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                laborum error neque accusantium aspernatur deserunt quas
                cupiditate? Eligendi numquam facere officia ipsum architecto rem
                voluptatem soluta, veniam, provident vero quae hic esse, quaerat
                repellat doloribus adipisci aperiam distinctio suscipit
                quisquam? Nihil a aliquid natus quis error iure, unde velit
                cupiditate!
              </p>
            </div>
          </div>
          <div className="px-10 ">
            <div className="mt-20 px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {data.map((item, i, arr) => (
                <div key={item.id} className="cursor-pointer">
                  <div className="relative">
                    <Image
                      src={item.pic}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-bold text-black text-4xl lg:text-5xl text-center">
              Recent Projects
            </h1>
            <div className="mt-20 px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {data.map((item, i, arr) => (
                <div key={item.id} className="cursor-pointer">
                  <div className="relative">
                    <Image
                      src={item.pic}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default IndProject;
