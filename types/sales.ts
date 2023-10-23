export type Sales = {
   id: string;
   nome: string;
   preco: number;
   status: "pago" | "processando" | "falha";
   pagamento: "boleto" | "cartao" | "pix";
   data: string;
   parcelas: number | null;
};
