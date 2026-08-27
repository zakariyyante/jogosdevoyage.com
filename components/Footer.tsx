import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#0b0e14] border-t border-white/5 pt-16 pb-12 text-white">
      <div className="container mx-auto px-6">
        {/* Top Branding & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 relative transform group-hover:rotate-[15deg] transition-transform duration-500">
              <Image 
                src="/voyage-logo.png" 
                alt="Jogos de Voyage Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter italic uppercase">
              JOGOS DE VOYAGE
            </span>
          </Link>
          <p className="text-xs text-gaming-text-muted md:text-right max-w-md leading-relaxed">
            Catálogo curto de jogos de navegador em Portugal. Seleção independente — abre num separador, sem instalação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs italic">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/#jogos" className="text-gaming-text-muted hover:text-gaming-secondary transition-colors text-xs font-bold uppercase italic tracking-widest">Jogos</Link></li>
              <li><Link href="/#metodo" className="text-gaming-text-muted hover:text-gaming-secondary transition-colors text-xs font-bold uppercase italic tracking-widest">Método</Link></li>
              <li><Link href="/#guia" className="text-gaming-text-muted hover:text-gaming-secondary transition-colors text-xs font-bold uppercase italic tracking-widest">Dicas</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs italic">Sobre o Projeto</h4>
            <p className="text-xs text-gaming-text-muted leading-relaxed max-w-2xl">
              Jogos de Voyage é uma plataforma dedicada à curadoria de experiências digitais de alta performance para o público português. Focamos em títulos que oferecem sessões rápidas, seguras e envolventes.
            </p>
          </div>
        </div>

        {/* Regulatory & Safety Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12 py-8 border-y border-white/5">
          <a 
            href="https://jogoresponsavel.pt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all group"
          >
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center font-black text-xs">18+</div>
          </a>
          
          <a 
            href="https://www.srij.turismodeportugal.pt/pt/jogo-responsavel/o-que-e-o-jogo-responsavel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all group"
          >
            <div className="h-8 w-24 relative">
              <Image src="/regulatory/srij.png" alt="SRIJ" fill className="object-contain" />
            </div>
          </a>

          <a 
            href="https://jogoresponsavel.pt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all group"
          >
            <div className="h-8 w-32 relative">
              <Image src="/regulatory/jogo-responsavel.png" alt="Jogo Responsável" fill className="object-contain" />
            </div>
          </a>

          <a 
            href="https://www.icad.pt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all group"
          >
            <div className="h-8 w-24 relative">
              <Image src="/regulatory/icad.png" alt="ICAD" fill className="object-contain" />
            </div>
          </a>
        </div>

        {/* Legal Disclaimer Text */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <p className="text-[10px] md:text-xs text-gaming-text-muted leading-relaxed uppercase tracking-wide">
            Em Portugal, o jogo com dinheiro real é proibido a menores de 18 anos. Jogue com moderação. Este site é um catálogo independente de jogos de navegador. Se precisar de ajuda, contacte a Linha 1414 (ICAD) ou visite jogoresponsavel.pt.
          </p>
          <p className="text-[10px] md:text-xs text-gaming-text-muted/60 italic">
            Podemos receber comissões das ligações apresentadas; isto não influencia a nossa seleção editorial.
          </p>
        </div>

        {/* Navigation & Copyright */}
        <div className="pt-8 border-t border-white/5">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <Link href="/cookies" className="text-[11px] font-black uppercase tracking-widest hover:text-gaming-secondary transition-colors italic">Política de Cookies</Link>
            <Link href="/terms" className="text-[11px] font-black uppercase tracking-widest hover:text-gaming-secondary transition-colors italic">Termos e Condições</Link>
            <Link href="/privacy" className="text-[11px] font-black uppercase tracking-widest hover:text-gaming-secondary transition-colors italic">Política de Privacidade</Link>
            <a href="https://jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black uppercase tracking-widest hover:text-gaming-secondary transition-colors italic">Jogo Responsável</a>
            <Link href="/about" className="text-[11px] font-black uppercase tracking-widest hover:text-gaming-secondary transition-colors italic">Sobre Nós</Link>
            <Link href="/contact" className="text-[11px] font-black uppercase tracking-widest hover:text-gaming-secondary transition-colors italic">Contacto</Link>
          </nav>
          
          <p className="text-center text-[10px] text-gaming-text-muted/40 uppercase tracking-[0.2em]">
            © 2026 jogosdevoyage.com. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
