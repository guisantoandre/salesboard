"use client";

import { DateRange } from "./date-range";
import { Months } from "@/components/months";

export function DataContent() {
   return (
      <div className="pt-24 pr-5 pl-5 md:pt-0">
         <div className="border w-fit p-5 rounded-xl bg-gray-200 dark:bg-gray-900 space-y-4">
            <DateRange />
            <Months />
         </div>
      </div>
   );
}
