"use client";

import { DateRange } from "./date-range";

import { Months } from "@/components/months";
import { SalesSummary } from "@/components/sales-summary";
import { DataTable } from "./sales-table/data-table";
import { columns } from "./sales-table/columns";
import { useData } from "@/contexts/data-context";

export function DataContent() {
   const { data } = useData();

   if (!data) return;

   return (
      <div className="pt-24 pr-5 pl-5 md:pt-0 space-y-5">
         <div className="box space-y-4">
            <DateRange />
            <Months />
         </div>

         <div>
            <SalesSummary />
         </div>

         <div>
            <DataTable columns={columns} data={data} filterKey="nome" />
         </div>
      </div>
   );
}
