// Configuração da página de vendas (comprar.html).
// Preencha e envie para o GitHub. Campos vazios ficam escondidos na página.
window.VENDA = {
  produto: "Acesso ao Academia AI",
  preco: 49.90,                // em reais (0 = vendas ainda não abertas)
  periodo: "acesso por semestre",

  // PIX: a página gera o QR Code e o "copia e cola" com o valor acima
  pix: {
    chave: "+5585981938012",               // CPF, CNPJ, e-mail, telefone (+55...) ou chave aleatória
    nome: "Igor Barroso Tavares",                // nome do recebedor, como está no banco (até 25 letras)
    cidade: "Fortaleza"                // cidade do recebedor (até 15 letras)
  },

  // Link de pagamento com cartão (Mercado Pago, Stripe, PagSeguro, InfinitePay...)
  linkPagamento: "https://link.infinitepay.io/ju_shima/VC1DLTAtUg-9YaHgGg2ni-49,90",

  // Para onde o comprador avisa que pagou (sem comprovante)
  whatsapp: "5585981938012",   // para onde vai o aviso "paguei" (só números com DDI e DDD)
  email: ""
};
