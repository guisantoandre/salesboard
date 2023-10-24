import { SalesSummary } from "@/app/(dashboard)/_components/sales-summary";
import { SalesGraphic } from "../_components/sales-graphic";

export default function Home() {
   return (
      <div className="mt-5 mb-10 md:mb-0 md:pl-64 space-y-5">
         <SalesSummary />
         <SalesGraphic />
      </div>
   );
}
