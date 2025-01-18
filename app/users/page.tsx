import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DemoPage() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + "/users/contributions/senegal"
  );
  const data = await res.json();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.users} />
    </div>
  );
}
