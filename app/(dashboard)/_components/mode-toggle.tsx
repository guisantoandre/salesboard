"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
   const { setTheme, theme } = useTheme();

   function toggleTheme() {
      if (theme === "dark") {
         setTheme("light");
      } else if (theme === "light") {
         setTheme("dark");
      }
   }

   return (
      <div>
         {theme === "dark" ? (
            <Button variant="outline" size="icon" onClick={toggleTheme}>
               <Sun className="w-5 h-5" />
            </Button>
         ) : (
            <Button variant="outline" size="icon" onClick={toggleTheme}>
               <Moon className="w-5 h-5" />
            </Button>
         )}
      </div>
   );
}
