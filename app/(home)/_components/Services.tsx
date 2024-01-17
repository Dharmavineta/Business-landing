"use client";
import Container from "@/components/common/Container";
import {
  Edit,
  Eraser,
  Palette,
  PenTool,
  Speaker,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";

const gridItems = [
  { id: 1, icon: Edit, title: "Content Marketting" },
  { id: 2, icon: PenTool, title: "Graphic Design" },
  { id: 3, icon: Speaker, title: "Digital Marketting" },
  { id: 4, icon: Palette, title: "Web Design" },
  { id: 5, icon: UserRound, title: "IT Consulting" },
  { id: 6, icon: Eraser, title: "Brand Identity" },
];

const Services = () => {
  const [click, setClick] = useState(0);
  return (
    <Container className="py-20">
      <h1 className="text-center text-projectPrimary text-3xl lg:text-4xl">
        Our Services
      </h1>
      <h1 className="text-4xl mt-4 text-center lg:text-5xl">
        High Impact Services for your business
      </h1>
      <div className="grid mt-20 grid-cols-1 px-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {gridItems.map((item, i, arr) => (
          <div
            onClick={() => setClick(i)}
            key={item.id}
            className={`rounded-xl p-5 transition-all duration-300 ${
              click === i ? "bg-black text-white" : "bg-slate-100 text-black"
            }`}
          >
            <div className={`flex flex-col gap-y-16`}>
              <div
                className={`rounded-full w-9 h-9 flex items-center justify-center ${
                  click === i
                    ? "bg-slate-100 text-slate-800"
                    : "bg-black text-slate-200"
                }`}
              >
                {<item.icon className="w-4 h-4" />}
              </div>
              <div
                className={`flex flex-col gap-y-4 ${
                  click === i ? "text-slate-300" : "text-slate-900"
                }`}
              >
                <h1 className="font-bold">{item.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime, assumenda! Dicta culpa facilis quia sint nam natus
                  expedita incidunt vitae doloremque laborum amet animi
                  recusandae architecto, quidem, pariatur alias voluptates.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
