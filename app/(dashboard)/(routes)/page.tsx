import { SalesSummary } from "@/app/(dashboard)/_components/sales-summary";

export default function Home() {
   return (
      <div className="pr-5 pl-5 mt-5 md:pl-64 md:pr-0">
         <SalesSummary />
         <div className="box mt-5">Gráfico</div>
      </div>
   );
}
