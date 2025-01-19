import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/statistics";
import { columns } from "./users/columns";
import { DataTable } from "./users/data-table";
import { Section } from "@/components/ui/section";

export default async function Home() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + "/users/contributions/senegal"
  );
  const data = await res.json();

  const stats = [
    {
      quantity: data.users.length,
      description: "Devs Sénégalais",
      subtitle: "sur GitHub",
    },
  ];
  return (
    <main className="flex flex-col space-y-3 relative ">
      <Hero />
      <Statistics data={stats} />
      <Section className="px-4 pt-8">
        <DataTable columns={columns} data={data.users} />
      </Section>
    </main>
  );
}
