import { DataContent } from "@/components/data-content";
import { Header } from "@/components/header";
import { Sidenav } from "@/components/sidenav";
import { DataContextProvider } from "@/contexts/data-context";

export default function Home() {
   return (
      <div className="md:flex gap-x-5 h-full">
         <DataContextProvider>
            <div className="hidden md:block">
               <Sidenav />
            </div>
            <main className="md:w-full">
               <Header />
               <DataContent />
            </main>
         </DataContextProvider>
      </div>
   );
}
