"use client";
import { StatisticsProps } from "@/types";
import CountAnimation from "./ui/count-animation";
import { Icons } from "./icons";
import { useEffect, useState } from "react";

export const Statistics = ({ data }: StatisticsProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute top-2 left-2">
      {data.map(({ quantity, description, subtitle }) => (
        <div
          key={description}
          className="text-center w-fit flex items-center justify-center"
        >
          <Icons.gihub2 />
          {isClient &&
            +(<CountAnimation number={quantity} className="text-4xl" />)}
          <p className="text-md ml-2"> {description}</p>
          <p className="text-xs text-muted-foreground  hidden line-clamp-1">
            {subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};
