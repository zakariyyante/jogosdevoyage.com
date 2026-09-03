export interface Game {
  id: string;
  f: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  officialUrl: string;
  tags: string[];
}

export const games: Game[] = [
  {
    id: "premium-operator",
    f: 10,
    name: "Operador Premium",
    category: "Plataforma Internacional",
    description: "Uma das marcas mais reconhecidas mundialmente, agora com performance exclusiva para Portugal.",
    longDescription: "Plataforma licenciada pelo SRIJ com uma vasta seleção de experiências digitais e alto padrão de segurança.",
    imageUrl: "/assets/888_ai.png",
    officialUrl: "https://casino.888.pt/exclusive-mob/deposit-offer-mb/?utm_medium=casap&utm_source=aff_na",
    tags: ["Internacional", "Licenciado", "Exclusivo"],
  },
  {
    id: "national-operator",
    f: 11,
    name: "Operador Nacional",
    category: "Marca 100% Portuguesa",
    description: "O operador nacional com foco total na rapidez de levantamentos e suporte local.",
    longDescription: "Orgulhosamente focado no mercado português, oferece uma experiência otimizada com MB Way.",
    imageUrl: "/assets/casinoportugal_ai.png",
    officialUrl: "https://www.casinoportugal.pt/?",
    tags: ["Nacional", "Seguro", "MB Way"],
  }
];
