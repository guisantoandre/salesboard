import { SalesSummary } from "@/app/(dashboard)/_components/sales-summary";
import { SalesGraphic } from "../_components/sales-graphic";
import { DateRange } from "../_components/date-range";
import { Months } from "../_components/months";

export default function Home() {
   return (
      <div className="my-20 md:my-0 md:mb-10 md:pl-64 space-y-5">
         <div className="box space-y-4">
            <DateRange />
            <Months />
         </div>

         <SalesSummary />
         <SalesGraphic />
      </div>
   );
}
