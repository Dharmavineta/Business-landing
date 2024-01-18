import Container from "@/components/common/Container";
import React from "react";

const Stats = () => {
  return (
    <Container>
      <div className="flex justify-between px-5 mt-52">
        <div className="grid grid-cols-1 gap-5 w-full justify-center sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h1 className="font-bold">200+</h1>
            <p className="font-bold">We&apos;re a family</p>
            <p className="text-center max-w-sm text-sm font-semibold text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              expedita ipsa amet quis nam accusamus ea quae doloribus nihil
              odit!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h1 className="font-bold">200+</h1>
            <p className="font-bold">We&apos;re a family</p>
            <p className="text-center max-w-sm text-sm font-semibold text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              expedita ipsa amet quis nam accusamus ea quae doloribus nihil
              odit!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h1 className="font-bold">200+</h1>
            <p className="font-bold">We&apos;re a family</p>
            <p className="text-center max-w-sm text-sm font-semibold text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              expedita ipsa amet quis nam accusamus ea quae doloribus nihil
              odit!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stats;
