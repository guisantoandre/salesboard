"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
   ColumnDef,
   ColumnFiltersState,
   SortingState,
   flexRender,
   getCoreRowModel,
   getFilteredRowModel,
   getSortedRowModel,
   getPaginationRowModel,
   useReactTable,
} from "@tanstack/react-table";

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[];
   data: TData[];
   filterKey: string;
}

export function DataTable<TData, TValue>({
   columns,
   data,
   filterKey,
}: DataTableProps<TData, TValue>) {
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
   );
   const [globalFilter, setGlobalFilter] = React.useState("");
   const [sorting, setSorting] = React.useState<SortingState>([]);

   console.log(sorting);

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      state: {
         sorting,
         columnFilters,
         globalFilter,
      },
   });

   return (
      <div>
         <div className="flex items-center py-4 relative">
            <Input
               // *** THIS CODE RUNS JUST FOR A SINGLE FILTER COLUMN ***
               // placeholder="Pesquisar por vendedor..."
               // value={
               //    (table.getColumn(filterKey)?.getFilterValue() as string) ?? ""
               // }
               // onChange={(event) =>
               //    table.getColumn(filterKey)?.setFilterValue(event.target.value)
               // }
               value={globalFilter ?? ""}
               onChange={(event) => setGlobalFilter(event.target.value)}
               placeholder="Pesquisar venda(s)..."
               className="max-w-sm pl-10"
            />
            <Search className="absolute left-[10px] top-[28px] h-4 w-4 text-muted-foreground" />
         </div>
         <div className="rounded-md border">
            <Table>
               <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                         header.column.columnDef.header,
                                         header.getContext()
                                      )}
                              </TableHead>
                           );
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow
                           key={row.id}
                           data-state={row.getIsSelected() && "selected"}
                        >
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                 {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                 )}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell
                           colSpan={columns.length}
                           className="h-24 text-center"
                        >
                           Nenhum resultado encontrado
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>
         <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
               Total de vendas: {table.getFilteredRowModel().rows.length}
            </div>
            <Button
               variant="outline"
               size="sm"
               onClick={() => table.previousPage()}
               disabled={!table.getCanPreviousPage()}
            >
               Anterior
            </Button>
            <Button
               variant="outline"
               size="sm"
               onClick={() => table.nextPage()}
               disabled={!table.getCanNextPage()}
            >
               Próxima
            </Button>
         </div>
      </div>
   );
}
