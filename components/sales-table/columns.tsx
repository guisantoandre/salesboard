"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Sales } from "@/types/sales";

export const columns: ColumnDef<Sales>[] = [
   {
      accessorKey: "id",
      header: "Id Venda",
      cell: ({ row }) => row.original.id,
   },
   {
      accessorKey: "nome",
      header: "Vendedor",
      cell: ({ row }) => row.original.nome,
   },
   {
      accessorKey: "preco",
      header: "Total",
      cell: ({ row }) => {
         return row.original.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
         });
      },
   },
];
