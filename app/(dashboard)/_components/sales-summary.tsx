"use client";

import { Loading } from "@/components/ui/loading";
import { useData } from "@/contexts/data-context";

export function SalesSummary() {
   const { data, loading } = useData();

   return (
      <>
         {loading && data === null && <Loading />}

         {data !== null && (
            <div className="flex flex-wrap gap-5">
               <div className="box space-y-3 flex-1">
                  <h2 className="font-semibold text-muted-foreground">
                     Vendas
                  </h2>
                  <span className="block font-semibold text-xl">
                     {data
                        .filter((i) => i.status !== "falha")
                        .reduce((acc, item) => acc + item.preco, 0)
                        .toLocaleString("pt-BR", {
                           style: "currency",
                           currency: "BRL",
                        })}
                  </span>
               </div>
               <div className="box space-y-3 flex-1">
                  <h2 className="font-semibold text-muted-foreground">
                     Recebidos
                  </h2>
                  <span className="block font-semibold text-xl">
                     {data
                        .filter((i) => i.status === "pago")
                        .reduce((acc, item) => acc + item.preco, 0)
                        .toLocaleString("pt-BR", {
                           style: "currency",
                           currency: "BRL",
                        })}
                  </span>
               </div>
               <div className="box space-y-3 flex-1">
                  <h2 className="font-semibold text-muted-foreground">
                     Processando
                  </h2>
                  <span className="block font-semibold text-xl">
                     {data
                        .filter((i) => i.status === "processando")
                        .reduce((acc, item) => acc + item.preco, 0)
                        .toLocaleString("pt-BR", {
                           style: "currency",
                           currency: "BRL",
                        })}
                  </span>
               </div>
            </div>
         )}
      </>
   );
}
