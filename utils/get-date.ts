export function getDate(n: number) {
   const date = new Date();

   date.setDate(date.getDate() - n);

   const day = String(date.getDate()).padStart(2, "0");

   const month = String(date.getMonth() + 1).padStart(2, "0");

   return `${date.getFullYear()}-${month}-${day}`;
}
