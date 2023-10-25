import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
   return (
      <div className="h-[70px] fixed inset-0 z-50 flex items-center p-6 border-b w-full md:hidden bg-gray-200 dark:bg-stone-900">
         <MobileSidebar />
      </div>
   );
}
