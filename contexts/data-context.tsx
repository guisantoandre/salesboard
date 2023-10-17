"use client";

import React from "react";

import { useFetch } from "@/hooks/useFetch";
import { Sales } from "@/types/sales";

type IDataContext = {
   data: Sales[] | null;
   loading: boolean;
   error: string | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
   const { data, loading, error } = useFetch<Sales[]>(
      "https://data.origamid.dev/vendas/"
   );

   return (
      <DataContext.Provider value={{ data, loading, error }}>
         {children}
      </DataContext.Provider>
   );
};

export function useData() {
   const context = React.useContext(DataContext);

   if (!context) {
      throw new Error("useData precisa estar em DataContextProvider");
   }

   return context;
}
