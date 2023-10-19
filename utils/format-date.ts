// A API espera receber informações no formato ano-mês-dia (yyyy-mm-dd)
export function formatDate(date: Date) {
   const day = String(date.getDate()).padStart(2, "0");

   const month = String(date.getMonth() + 1).padStart(2, "0");

   return `${date.getFullYear()}-${month}-${day}`;
}
