import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/statistics";

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
    {
      quantity: "250+",
      description: "Repositories",
      subtitle: "créés en 2024",
    },
    {
      quantity: "15+",
      description: "Tech Hubs",
      subtitle: "à Dakar",
    },
    {
      quantity: "6",
      description: "Top Languages",
      subtitle: "Python, JS, Java, PHP, Go, Ruby",
    },
  ];
  return (
    <main className="flex flex-col space-y-3">
      <Hero />
      <Statistics data={stats} />
    </main>
  );
}
