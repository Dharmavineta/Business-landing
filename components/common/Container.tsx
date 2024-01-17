import { cn } from "@/lib/utils";
import React, { FC } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<props> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px] mx-auto", className)}>{children}</div>
  );
};

export default Container;
