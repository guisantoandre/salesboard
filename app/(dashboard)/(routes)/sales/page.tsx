"use client";

import { columns } from "@/app/(dashboard)/(routes)/sales/_components/columns";
import { DataTable } from "@/app/(dashboard)/(routes)/sales/_components/data-table";
import { useData } from "@/contexts/data-context";

export default function SalesPage() {
   const { data } = useData();

   if (!data) return;

   return (
      <div className="md:pl-64 mt-5">
         <DataTable columns={columns} data={data} filterKey="nome" />
      </div>
   );
}
