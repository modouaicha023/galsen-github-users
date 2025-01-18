import { Hero } from "@/components/hero";

export default async function Home() {
  // const res = await fetch(
  //   process.env.NEXT_PUBLIC_BASE_API_URL + "/users/contributions/senegal"
  // );
  // const data = await res.json();
  return (
    <div>
      <Hero />
    </div>
  );
}
