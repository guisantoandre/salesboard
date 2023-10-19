import { ModeToggle } from "@/components/mode-toggle";

export function Sidenav() {
   return (
      <div className="flex flex-col justify-between h-full w-60 border rounded-xl p-5 bg-gray-200 dark:bg-gray-900">
         <h2 className="pt-5 md:pt-0 text-2xl font-bold">Dashboard</h2>
         <div>
            <ModeToggle />
         </div>
      </div>
   );
}
