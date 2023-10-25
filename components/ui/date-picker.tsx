"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { useData } from "@/contexts/data-context";

type IDatePicker = {
   initialDate: Date;
   onChange: (date: Date) => void;
};

export function DatePicker({ initialDate, onChange }: IDatePicker) {
   const [date, setDate] = React.useState<Date | undefined>(initialDate);
   const { start, final } = useData();

   React.useEffect(() => {
      if (date) {
         onChange(date);
      }
   }, [date]);

   React.useEffect(() => {
      setDate(initialDate);
   }, [start, final]);

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant={"outline"}
               className={cn(
                  "w-[200px] md:w-[240px] justify-between text-left font-normal rounded-md",
                  !date && "text-muted-foreground"
               )}
            >
               {date ? (
                  format(date, "dd/MM/yyyy")
               ) : (
                  <span>Selecione uma data</span>
               )}
               <CalendarIcon className="h-4 w-4" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0">
            <Calendar
               mode="single"
               selected={date}
               onSelect={setDate}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   );
}
