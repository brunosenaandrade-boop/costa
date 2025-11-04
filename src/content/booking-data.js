"use client";

export const bookingData = {
  services: [
    {
      id: "fio-a-fio",
      name: "Extensao Fio a Fio",
      description:
        "Efeito natural com fios estrategicamente posicionados para realcar o olhar.",
      price: 180,
      duration: 90,
      maintenance: "Manutencao a cada 15 dias recomendada.",
    },
    {
      id: "volume-russo",
      name: "Volume Russo",
      description:
        "Leques finos e leves para um volume glamouroso sem pesar nos cilios naturais.",
      price: 240,
      duration: 120,
      maintenance: "Manutencao recomendada entre 15 e 20 dias.",
    },
    {
      id: "lash-lifting",
      name: "Lash Lifting Spa",
      description:
        "Curvatura duradoura com nutricosmeticos e finalizacao em queratina.",
      price: 160,
      duration: 70,
      maintenance: "Refaca a cada 6 a 8 semanas.",
    },
    {
      id: "sobrancelhas",
      name: "Design de Sobrancelhas + Henna",
      description:
        "Arquitetura facial completa, mapeamento e preenchimento com henna ton-sur-ton.",
      price: 120,
      duration: 50,
      maintenance: "Ideal renovar a cada 20 dias.",
    },
  ],
  calendar: {
    days: [
      { id: "seg", label: "Seg", full: "Segunda-feira" },
      { id: "ter", label: "Ter", full: "Terca-feira" },
      { id: "qua", label: "Qua", full: "Quarta-feira" },
      { id: "qui", label: "Qui", full: "Quinta-feira" },
      { id: "sex", label: "Sex", full: "Sexta-feira" },
      { id: "sab", label: "Sab", full: "Sabado" },
    ],
    slots: ["09:00", "11:00", "13:30", "15:30", "17:30", "19:00"],
  },
  paymentMethods: [
    {
      id: "pix",
      label: "PIX instantaneo",
      description: "Confirme o pagamento com comprovante automatico.",
    },
    {
      id: "credit",
      label: "Cartao de credito",
      description: "Parcele em ate 3x sem juros.",
    },
    {
      id: "debit",
      label: "Cartao de debito",
      description: "Pagamento seguro em maquininha no studio.",
    },
  ],
  upsellProducts: [
    {
      id: "cleanser",
      name: "Lash Cleanser Espuma",
      price: 59,
      description: "Higienizador diario para alongamentos com sensorial leve.",
      benefits: ["PH equilibrado", "Sem oleos", "Aplicador escovinha"],
    },
    {
      id: "mask",
      name: "Sleep Mask Satin",
      price: 42,
      description:
        "Mascara noturna em cetim que protege os cilios contra atrito.",
      benefits: ["Ajuste confortavel", "Anti-frizz", "Lavavel"],
    },
    {
      id: "serum",
      name: "Serum Fortalecedor CCosta",
      price: 72,
      description:
        "Blend de peptideos para nutrir os cilios naturais e prolongar o efeito.",
      benefits: ["Uso diario", "Resultados em 21 dias", "Cruelty free"],
    },
  ],
  outfits: [
    {
      id: "look-rose",
      name: "Look Rose Studio",
      price: 189,
      sizes: ["P", "M", "G"],
      description:
        "Conjunto em tons rosados inspirado na paleta oficial do studio, perfeito para clientes e equipe.",
    },
    {
      id: "kimono-black",
      name: "Kimono Black Lash",
      price: 149,
      sizes: ["U"],
      description:
        "Kimono acetinado para procedimentos ou saidas leves, protege roupas e traz assinatura CC.",
    },
    {
      id: "tee-signature",
      name: "T-shirt Signature CCosta",
      price: 99,
      sizes: ["PP", "P", "M", "G", "GG"],
      description:
        "Camiseta com tipografia autoral e toque ultra macio, ideal para alunos e lovers da marca.",
    },
  ],
  storePolicies: {
    pickup:
      "Retirada disponivel no studio em ate 2 dias uteis mediante confirmacao via WhatsApp.",
    exchange:
      "Trocas em ate 7 dias corridos apresentando ticket digital e produto sem uso.",
  },
};
