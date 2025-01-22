import { StatisticsProps } from "@/types";
import CountAnimation from "./ui/count-animation";
import { Icons } from "./icons";

export const Statistics = ({ data }: StatisticsProps) => {
  return (
    <div className="absolute top-2 left-2">
      {data.map(({ quantity, description, subtitle }) => (
        <div
          key={description}
          className="text-center w-fit flex gap-4 items-center justify-center"
        >
          <Icons.gihub2 />
          +<CountAnimation number={quantity} className="text-4xl w-4" />
          <p className="text-sm ml-2 w-8"> {description}</p>
          {/* <p className="text-xs text-muted-foreground  hidden line-clamp-1">
            {subtitle}
          </p> */}
        </div>
      ))}
    </div>
  );
};
