import { MonthBtn } from "@/components/month-btn";

export function Months() {
   return (
      <div className="flex flex-wrap gap-3">
         <MonthBtn n={-2} />
         <MonthBtn n={-1} />
         <MonthBtn n={0} />
      </div>
   );
}
