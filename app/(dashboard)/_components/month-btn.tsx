import { useData } from "@/contexts/data-context";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/format-date";

function monthName(n: number) {
   const date = new Date();

   date.setMonth(date.getMonth() + n);

   return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

export function MonthBtn({ n }: { n: number }) {
   const { setStart, setFinal } = useData();

   function setMonth(n: number) {
      const date = new Date();
      date.setMonth(date.getMonth() + n);

      const firstDayOfTheSelectedMonth = new Date(
         date.getFullYear(),
         date.getMonth(),
         1
      );

      const lastDayOfTheSelectedMonth = new Date(
         date.getFullYear(),
         date.getMonth() + 1,
         0
      );

      setStart(formatDate(firstDayOfTheSelectedMonth));
      setFinal(formatDate(lastDayOfTheSelectedMonth));
   }

   return (
      <Button
         variant="secondary"
         className="capitalize rounded-full font-medium hover:scale-105 active:scale-100"
         onClick={() => setMonth(n)}
      >
         {monthName(n)}
      </Button>
   );
}
