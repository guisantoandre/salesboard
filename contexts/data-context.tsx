"use client";

import React from "react";

import { useFetch } from "@/hooks/useFetch";
import { Sales } from "@/types/sales";
import { getDate } from "@/utils/get-date";

type IDataContext = {
   data: Sales[] | null;
   loading: boolean;
   error: string | null;
   start: string;
   setStart: React.Dispatch<React.SetStateAction<string>>;
   final: string;
   setFinal: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
   const [start, setStart] = React.useState(getDate(30));
   const [final, setFinal] = React.useState(getDate(0));

   const { data, loading, error } = useFetch<Sales[]>(
      `https://data.origamid.dev/vendas/?inicio=${start}&final=${final}`
   );

   return (
      <DataContext.Provider
         value={{ data, loading, error, start, setStart, final, setFinal }}
      >
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
