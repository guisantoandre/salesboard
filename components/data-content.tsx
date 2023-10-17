"use client";

import { DateRange } from "./date-range";

export function DataContent() {
   return (
      <div className="pt-24 pr-5 pl-5 md:pt-0">
         <div className="border w-fit p-5 rounded-md bg-neutral-100 dark:bg-gray-900">
            <DateRange />
         </div>
      </div>
   );
}
