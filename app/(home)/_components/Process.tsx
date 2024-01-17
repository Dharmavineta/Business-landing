import Container from "@/components/common/Container";
import { CheckCheck, Lightbulb, MessageCircle, Settings2 } from "lucide-react";
import React from "react";

const Process = () => {
  const gridItems = [
    { id: 1, icon: Lightbulb, title: "Ideate" },
    { id: 2, icon: MessageCircle, title: "Research" },
    { id: 3, icon: Settings2, title: "Create" },
    { id: 4, icon: CheckCheck, title: "Testing" },
  ];
  return (
    <Container className="py-20">
      <h1 className="text-center text-projectPrimary text-3xl lg:text-4xl">
        Process
      </h1>
      <h1 className="text-4xl mt-4 text-center lg:text-5xl">
        Process that moves things forward
      </h1>
      <div className="grid mt-20 grid-cols-1 px-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {gridItems.map((item, i, arr) => (
          <div
            key={item.id}
            className={`rounded-xl p-5 transition-all duration-300`}
          >
            <div className={`flex flex-col gap-y-5`}>
              <div
                className={`rounded-full bg-slate-900 text-white w-9 h-9 flex items-center justify-center `}
              >
                {<item.icon className="w-4 h-4" />}
              </div>
              <div className={`flex flex-col gap-y-4`}>
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

export default Process;
