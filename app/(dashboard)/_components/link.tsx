"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type LinkProps = {
   icon: LucideIcon;
   label: string;
   href: string;
};

export function Link({ label, href, icon: Icon }: LinkProps) {
   const router = useRouter();
   const pathname = usePathname();

   React.useEffect(() => {
      if (pathname === "/sales") document.title = "Dashboard | Vendas";
      if (pathname === "/") document.title = "Dashboard | Resumo";
   }, [pathname]);

   function onClick() {
      router.push(href);
   }

   const isActive =
      (pathname === "/" && href === "/") ||
      pathname === href ||
      pathname.startsWith(`${href}/`);

   return (
      <a
         onClick={onClick}
         className={`flex items-center gap-x-3 ml-6 text-neutral-700 dark:text-slate-300 text-sm font-semibold py-1 mb-5 cursor-pointer hover:text-black dark:hover:text-white hover:border-r-2 hover:border-green-600 dark:hover:border-green-400 ${
            isActive
               ? "text-black dark:text-white border-r-2 border-green-600 dark:border-green-400"
               : ""
         }`}
      >
         <Icon size={22} />
         {label}
      </a>
   );
}
