"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/5 bg-gaming-bg/80">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative transform group-hover:rotate-[15deg] transition-transform duration-500">
            <Image 
              src="/voyage-logo.png" 
              alt="Jogos de Voyage Logo" 
              fill 
              className="object-contain drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none italic uppercase">
              JOGOS DE VOYAGE
            </span>
            <span className="text-[8px] font-black tracking-[0.3em] text-gaming-text-muted uppercase">Comunidade Nacional</span>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/#jogos" className="text-[11px] font-black tracking-widest uppercase hover:text-gaming-secondary transition-colors italic">
            Jogos
          </Link>
          <Link href="/#metodo" className="text-[11px] font-black tracking-widest uppercase hover:text-gaming-secondary transition-colors italic">
            Método
          </Link>
          <Link href="/#guia" className="text-[11px] font-black tracking-widest uppercase hover:text-gaming-secondary transition-colors italic">
            Dicas
          </Link>
          <a href="https://jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black tracking-widest uppercase text-red-500 hover:text-red-400 transition-colors italic">
            +18
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded border border-white/10 text-gaming-text-muted">
            <span className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center text-[10px] font-black">18+</span>
            <span className="text-[9px] font-black uppercase tracking-widest italic">Jogue com responsabilidade</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer outline-none"
          >
            <div className={`h-0.5 bg-white rounded-full transition-all ${isOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`} />
            <div className={`h-0.5 bg-white rounded-full transition-all ${isOpen ? 'opacity-0' : 'w-full'}`} />
            <div className={`h-0.5 bg-white rounded-full transition-all ${isOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-3/4 self-end'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full glass-panel border-b border-white/5 animate-fade-in">
          <nav className="flex flex-col p-6 gap-6">
            <Link onClick={() => setIsOpen(false)} href="/#jogos" className="text-xs font-black uppercase italic tracking-widest">Jogos</Link>
            <Link onClick={() => setIsOpen(false)} href="/#metodo" className="text-xs font-black uppercase italic tracking-widest">Método</Link>
            <Link onClick={() => setIsOpen(false)} href="/#guia" className="text-xs font-black uppercase italic tracking-widest">Dicas</Link>
            <a onClick={() => setIsOpen(false)} href="https://jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase italic tracking-widest text-red-500">+18 Jogo Responsável</a>
          </nav>
        </div>
      )}
    </header>
  );
};
