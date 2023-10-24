import { NavLinks } from "@/app/(dashboard)/_components/nav-links";
import { ModeToggle } from "./mode-toggle";

export function Sidenav() {
   return (
      <div className="flex flex-col justify-between h-full w-60 border rounded-md bg-gray-100 dark:bg-stone-900">
         <NavLinks />
         <div className="p-6">
            <ModeToggle />
         </div>
      </div>
   );
}
