import { DatePicker } from "@/components/ui/date-picker";
import { formatDate } from "@/utils/format-date";
import React from "react";

export function DateRange() {
   const [start, setStart] = React.useState("");
   const [final, setFinal] = React.useState("");

   return (
      <div className="flex flex-wrap gap-x-5">
         <div>
            <h3 className="mb-1 font-medium">Início:</h3>
            <DatePicker onChange={(date: Date) => setStart(formatDate(date))} />
         </div>
         <div>
            <h3 className="mb-1 font-medium">Final:</h3>
            <DatePicker onChange={(date: Date) => setFinal(formatDate(date))} />
         </div>
      </div>
   );
}
