"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { noto_sans_mono } from "@/fonts/fonts";
import { useFetch } from "@/hooks/useFetch";
import { Sales } from "@/types/sales";

type SalePageProps = {
   params: { saleId: string };
};

type SaleWithoutDate = Omit<Sales, "data">;

export default function SalePage({ params }: SalePageProps) {
   const router = useRouter();
   const { data, loading } = useFetch<SaleWithoutDate>(
      `https://data.origamid.dev/vendas/${params.saleId}`
   );

   function handleClick() {
      router.push("/sales");
   }

   return (
      <div className="my-20 md:my-0 md:pl-64">
         {loading && data === null && <Loading />}

         {data !== null && (
            <div className="box">
               <ul className="space-y-5">
                  <li className={`${noto_sans_mono.variable} font-mono`}>
                     {params.saleId}
                  </li>
                  <li>
                     <span className="text-muted-foreground font-semibold">
                        Vendedor&#40;a&#41;:
                     </span>{" "}
                     {data.nome}
                  </li>
                  <li>
                     <span className="text-muted-foreground font-semibold">
                        Forma de pagamento:
                     </span>{" "}
                     {data.pagamento === "cartao" && "Cartão"}
                     {data.pagamento === "boleto" && "Boleto"}
                     {data.pagamento === "pix" && "Pix"}
                  </li>
                  <li>
                     <span className="text-muted-foreground font-semibold">
                        Parcelas:
                     </span>{" "}
                     {`${
                        data.parcelas === null ? "À vista" : `${data.parcelas}x`
                     }`}
                  </li>
                  <li>
                     {data.preco.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                     })}
                  </li>
                  <li
                     className={`font-semibold ${
                        data.status === "pago" &&
                        "text-green-600 dark:text-green-400"
                     } ${
                        data.status === "processando" &&
                        "text-amber-500 dark:text-amber-300"
                     }
                     ${data.status === "falha" && "text-red-600 "}
                     `}
                  >
                     {data.status === "pago" && "Pago"}
                     {data.status === "processando" && "Processando"}
                     {data.status === "falha" && "Falha"}
                  </li>
               </ul>

               <Button
                  variant="secondary"
                  className="mt-10 font-semibold hover:scale-105 active:scale-100"
                  onClick={handleClick}
               >
                  Voltar
               </Button>
            </div>
         )}
      </div>
   );
}
