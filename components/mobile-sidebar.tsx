import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidenav } from "@/components/sidenav";

export function MobileSidebar() {
   return (
      <Sheet>
         <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu />
         </SheetTrigger>
         <SheetContent side="left" className="p-0 w-60">
            <Sidenav />
         </SheetContent>
      </Sheet>
   );
}
