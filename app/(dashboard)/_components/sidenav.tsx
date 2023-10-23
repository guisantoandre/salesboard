import { NavLinks } from "@/app/(dashboard)/_components/nav-links";
import { ModeToggle } from "./mode-toggle";

export function Sidenav() {
   return (
      <div className="flex flex-col justify-between h-full w-60 border rounded-xl p-5 bg-gray-200 dark:bg-gray-900">
         <NavLinks />
         <ModeToggle />
      </div>
   );
}
