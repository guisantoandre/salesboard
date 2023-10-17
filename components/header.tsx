import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
   return (
      <div className="h-[70px] fixed inset-0 flex items-center p-5 border-b w-full md:hidden bg-neutral-100 dark:bg-gray-900">
         <MobileSidebar />
      </div>
   );
}
