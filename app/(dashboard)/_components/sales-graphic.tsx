"use client";

import { useData } from "@/contexts/data-context";
import { Sales } from "@/types/sales";
import {
   LineChart,
   XAxis,
   YAxis,
   CartesianGrid,
   Line,
   ResponsiveContainer,
   Tooltip,
   Legend,
} from "recharts";

const graphicData = [
   {
      data: "2023-05-03",
      pago: 1000,
      processando: 500,
      falha: 100,
   },
   {
      data: "2023-10-03",
      pago: 300,
      processando: 200,
      falha: 30,
   },
   {
      data: "2023-15-03",
      pago: 1500,
      processando: 750,
      falha: 150,
   },
];

type SaleDay = {
   data: string;
   pago: number;
   processando: number;
   falha: number;
};

function transformData(data: Sales[]) {
   const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
      const date = item.data.split(" ")[0];
      const [year, month, day] = date.split("-");
      const formattedDate = `${day}/${month}`;

      if (!acc[formattedDate]) {
         acc[formattedDate] = {
            data: formattedDate,
            pago: 0,
            processando: 0,
            falha: 0,
         };
      }

      acc[formattedDate][item.status] += item.preco;

      return acc;
   }, {});

   return Object.values(days);
}

export function SalesGraphic() {
   const { data } = useData();

   if (!data) return;

   const transformedData = transformData(data);

   return (
      <div className="box overflow-x-auto">
         <ResponsiveContainer minWidth="500px" height={400}>
            <LineChart data={transformedData}>
               <XAxis dataKey="data" />
               <YAxis />
               <Tooltip
                  labelStyle={{
                     color: "#000",
                  }}
               />
               <CartesianGrid strokeDasharray="5 5" />
               <Line
                  type="monotone"
                  dataKey="pago"
                  stroke="#22c55e"
                  strokeWidth={1.5}
               />
               <Line
                  type="monotone"
                  dataKey="processando"
                  stroke="#facc15"
                  strokeWidth={1.5}
               />
               <Line
                  type="monotone"
                  dataKey="falha"
                  stroke="#dc2626"
                  strokeWidth={1.5}
               />
               <Legend verticalAlign="bottom" />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
}
