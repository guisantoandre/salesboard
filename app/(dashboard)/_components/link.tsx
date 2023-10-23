"use client";

import { cn } from "@/lib/utils";
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

   function onClick() {
      router.push(href);
   }

   const isActive = (pathname === "/" && href === "/") || pathname === href;

   return (
      <a
         onClick={onClick}
         className={`flex items-center gap-x-2 text-neutral-700 dark:text-slate-300 text-sm font-semibold py-1 mb-5 cursor-pointer hover:text-green-600 dark:hover:text-green-400 ${
            isActive
               ? "text-green-600 dark:text-green-400 border-r-2 border-green-600 dark:border-green-400"
               : ""
         }`}
      >
         <Icon size={22} className={cn("")} />
         {label}
      </a>
   );
}
