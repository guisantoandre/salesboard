"use client";

import { columns } from "@/app/(dashboard)/(routes)/sales/_components/columns";
import { DataTable } from "@/app/(dashboard)/(routes)/sales/_components/data-table";
import { Loading } from "@/components/ui/loading";
import { useData } from "@/contexts/data-context";
import { DateRange } from "../../_components/date-range";
import { Months } from "../../_components/months";

export default function SalesPage() {
   const { data, loading } = useData();

   return (
      <div className="my-20 md:my-0 md:mb-10 md:pl-64">
         <div className="box space-y-4 mb-5">
            <DateRange />
            <Months />
         </div>

         {loading && data === null && <Loading />}

         {data !== null && (
            <DataTable columns={columns} data={data} filterKey="nome" />
         )}
      </div>
   );
}
