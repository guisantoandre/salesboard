import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { inter } from "@/fonts/fonts";
import { Header } from "@/app/(dashboard)/_components/header";
import { Sidenav } from "@/app/(dashboard)/_components/sidenav";
import { DataContextProvider } from "@/contexts/data-context";
import { DateRange } from "@/app/(dashboard)/_components/date-range";
import { Months } from "@/app/(dashboard)/_components/months";

export const metadata: Metadata = {
   description: "Dashboard de vendas utilizando API da Origamid",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-BR" suppressHydrationWarning>
         <body
            className={`${inter.variable} font-inter max-w-[1400px] !m-auto p-6`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem={false}
            >
               <DataContextProvider>
                  <div className="hidden md:block md:fixed md:top-5 md:bottom-5">
                     <Sidenav />
                  </div>
                  <div>
                     <Header />
                  </div>

                  {children}
               </DataContextProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
