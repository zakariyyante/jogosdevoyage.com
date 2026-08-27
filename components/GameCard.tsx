import { Game } from "@/app/data/games";
import Image from "next/image";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="gaming-card group hover:gaming-glow-secondary">
      {/* Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={game.imageUrl}
          alt={game.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-surface via-gaming-surface/20 to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-4 py-1.5 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase bg-black/80 backdrop-blur-md border border-white/10 text-gaming-secondary shadow-xl">
            {game.category}
          </span>
          <span className="px-2 py-1.5 rounded-lg text-[9px] font-black bg-red-500/80 backdrop-blur-md border border-red-400/20 text-white shadow-xl">
            18+
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-black text-white italic tracking-tight group-hover:text-gradient transition-all duration-300">
            {game.name}
          </h3>
        </div>
        
        <p className="text-sm text-gaming-text-muted mb-8 flex-1 leading-relaxed font-medium">
          {game.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {game.tags.map((tag) => (
            <span key={tag} className="text-[9px] font-black tracking-widest text-gaming-text-muted/60 px-2.5 py-1 rounded-md border border-white/5 bg-white/5 uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={`/go?f=${game.f}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-black text-xs tracking-[0.15em] bg-white/5 border border-white/10 transition-all hover:gaming-button-hover-gradient hover:text-white hover:border-transparent group/btn uppercase italic"
        >
          <span>JOGAR AGORA</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
          >
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1 h-1/3 bg-gradient-to-t from-gaming-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};
