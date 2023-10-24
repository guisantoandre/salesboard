"use client";

import { columns } from "@/app/(dashboard)/(routes)/sales/_components/columns";
import { DataTable } from "@/app/(dashboard)/(routes)/sales/_components/data-table";
import { Loading } from "@/components/ui/loading";
import { useData } from "@/contexts/data-context";

export default function SalesPage() {
   const { data, loading } = useData();

   return (
      <div className="md:pl-64 mt-5">
         {loading && data === null && <Loading />}

         {data !== null && (
            <DataTable columns={columns} data={data} filterKey="nome" />
         )}
      </div>
   );
}
