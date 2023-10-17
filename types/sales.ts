export type Sales = {
   id: string;
   nome: string;
   preco: number;
   status: "pago" | "processando" | "falha";
   pagamento: "boleto" | "cartao" | "cartao";
   data: string;
   parcelas: number | null;
};
