import { SalesSummary } from "@/app/(dashboard)/_components/sales-summary";

export default function Home() {
   return (
      <div className="mt-5 md:pl-64">
         <SalesSummary />
         <div className="box mt-5">Gráfico</div>
      </div>
   );
}
