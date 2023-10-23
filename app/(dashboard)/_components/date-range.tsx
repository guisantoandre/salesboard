"use client";

import { DatePicker } from "@/components/ui/date-picker";
import { useData } from "@/contexts/data-context";
import { formatDate } from "@/utils/format-date";
import React from "react";

export function DateRange() {
   const { start, setStart, final, setFinal, data } = useData();

   const splitStartDate = start.split("-");
   const startToDate = new Date(
      parseInt(splitStartDate[0]),
      parseInt(splitStartDate[1]) - 1,
      parseInt(splitStartDate[2])
   );

   const splitFinalDate = final.split("-");
   const finalToDate = new Date(
      parseInt(splitFinalDate[0]),
      parseInt(splitFinalDate[1]) - 1,
      parseInt(splitFinalDate[2])
   );

   console.log(data);

   return (
      <div className="flex flex-wrap gap-5">
         <div>
            <h3 className="mb-1 font-bold text-sm text-muted-foreground">
               Início:
            </h3>
            <DatePicker
               initialDate={startToDate}
               onChange={(date: Date) => setStart(formatDate(date))}
            />
         </div>
         <div>
            <h3 className="mb-1 font-bold text-sm text-muted-foreground">
               Final:
            </h3>
            <DatePicker
               initialDate={finalToDate}
               onChange={(date: Date) => setFinal(formatDate(date))}
            />
         </div>
      </div>
   );
}
