import { Section } from "./ui/section";

interface StatisticsProps {
  data: { quantity: string; description: string; subtitle: string }[];
}

export const Statistics = ({ data }: StatisticsProps) => {
  return (
    <Section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {data.map(({ quantity, description, subtitle }) => (
          <div key={description} className="space-y-2 text-center ">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-md ">{description}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
