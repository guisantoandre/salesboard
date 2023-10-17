import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Dashboard de vendas",
   description: "Dashboard de vendas utilizando API da Origamid",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-BR">
         <body className={`${inter.className} md:p-5`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem={false}
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
