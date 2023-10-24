"use client";

import { ArrowUpDown } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import { Sales } from "@/types/sales";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { noto_sans_mono } from "@/fonts/fonts";

export const columns: ColumnDef<Sales>[] = [
   {
      accessorKey: "id",
      header: "Id Venda",
      cell: ({ row }) => {
         return (
            <Link
               href={`/sales/${row.original.id}`}
               className={`${noto_sans_mono.variable} font-mono text-black/70 dark:text-white/80 hover:underline`}
            >
               {row.original.id}
            </Link>
         );
      },
   },
   {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
         switch (row.original.status) {
            case "pago":
               return (
                  <span className="capitalize flex items-center gap-x-2 before:block before:w-1 before:h-1 before:bg-green-300 before:rounded-full">
                     {row.original.status}
                  </span>
               );
               break;
            case "processando":
               return (
                  <span className="capitalize flex items-center gap-x-2 before:block before:w-1 before:h-1 before:bg-amber-300 before:rounded-full">
                     {row.original.status}
                  </span>
               );
               break;
            case "falha":
               return (
                  <span className="capitalize flex items-center gap-x-2 before:block before:w-1 before:h-1 before:bg-red-500 before:rounded-full">
                     {row.original.status}
                  </span>
               );
         }
      },
   },
   {
      accessorKey: "nome",
      header: "Vendedor",
      cell: ({ row }) => row.original.nome,
   },
   {
      accessorKey: "pagamento",
      header: "Pagamento",
      cell: ({ row }) => {
         return (
            <span className="text-black/70 dark:text-white/80">
               {row.original.pagamento === "cartao" && "Cartão"}
               {row.original.pagamento === "boleto" && "Boleto"}
               {row.original.pagamento === "pix" && "Pix"}
            </span>
         );
      },
   },
   {
      accessorKey: "preco",
      header: ({ column }) => {
         return (
            <Button
               variant="secondary"
               className="hover:bg-muted-foreground/20"
               onClick={() => column.toggleSorting()}
            >
               Total
               <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
         );
      },
      cell: ({ row }) => {
         return row.original.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
         });
      },
   },
];
