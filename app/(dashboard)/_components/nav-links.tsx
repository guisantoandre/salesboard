"use client";

import { Home, Store } from "lucide-react";
import { Link } from "./link";

const routesLinks = [
   {
      icon: Home,
      label: "Resumo",
      href: "/",
   },
   {
      icon: Store,
      label: "Vendas",
      href: "/sales",
   },
];

export function NavLinks() {
   return (
      <nav>
         <h1 className="font-bold text-xl p-6 mb-5">SalesBoard</h1>
         <ul>
            <li>
               {routesLinks.map((route) => (
                  <Link
                     key={route.href}
                     label={route.label}
                     icon={route.icon}
                     href={route.href}
                  />
               ))}
            </li>
         </ul>
      </nav>
   );
}
