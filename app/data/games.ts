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
    id: "fps-tatico-5v5",
    f: 1,
    name: "FPS Tático 5v5",
    category: "Competitivo e Ranked",
    description: "Precisão e equipa. Rondas curtas, agentes com habilidades únicas e meta em constante evolução.",
    longDescription: "Rondas curtas, agentes com habilidades únicas e meta em constante evolução.",
    imageUrl: "/assets/valorant_ai.png",
    officialUrl: "https://playvalorant.com/",
    tags: ["Precisão", "Equipa", "E-sports"],
  },
  {
    id: "battle-royale",
    f: 2,
    name: "Battle Royale",
    category: "Competitivo e Ranked",
    description: "BR com movimento. Esquadrões e lendas. Combates vertiginosos, ping intuitivo e temporadas frescas.",
    longDescription: "Esquadrões e lendas. Combates vertiginosos, ping intuitivo e temporadas frescas.",
    imageUrl: "/assets/apex_ai.png",
    officialUrl: "https://www.ea.com/games/apex-legends",
    tags: ["Rápido", "Estratégico", "Ação"],
  },
  {
    id: "moba",
    f: 3,
    name: "MOBA",
    category: "Competitivo e Ranked",
    description: "Estratégia em equipa. Rotas, objetivos, teamfight. Profundidade tática e comunidade enorme no PC.",
    longDescription: "Rotas, objetivos, teamfight. Profundidade tática e comunidade enorme no PC.",
    imageUrl: "/assets/lol_ai.png",
    officialUrl: "https://www.leagueoflegends.com/",
    tags: ["Estratégia", "PC", "Competição"],
  },
  {
    id: "criacao",
    f: 4,
    name: "Criação",
    category: "Criação e Sandbox",
    description: "Mundos para criar. Joga ou constrói. Milhares de experiências sociais — do casual ao competitivo.",
    longDescription: "Joga ou constrói. Milhares de experiências sociais — do casual ao competitivo.",
    imageUrl: "/assets/roblox_ai.png",
    officialUrl: "https://www.roblox.com/",
    tags: ["Criatividade", "Social", "Infinito"],
  },
  {
    id: "aventura",
    f: 5,
    name: "Aventura",
    category: "Aventura e Exploração",
    description: "Mundo aberto de fantasia. Explora e combina elementos. Exploração, personagens e combates por elementos num universo vivo.",
    longDescription: "Explora e combina elementos. Exploração, personagens e combates por elementos num universo vivo.",
    imageUrl: "/assets/genshin_ai.png",
    officialUrl: "https://genshin.hoyoverse.com/",
    tags: ["Exploração", "Fantasia", "História"],
  }
];
