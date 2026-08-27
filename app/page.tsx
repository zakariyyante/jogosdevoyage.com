import { games } from "./data/games";
import { GameCard } from "@/components/GameCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-48 overflow-hidden bg-[#0b0e14]">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 gaming-grid opacity-20" />
        
        {/* Subtle Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[1] max-w-5xl mx-auto uppercase italic">
            Jogos para <span className="text-gaming-accent not-italic">escolher</span> e jogar em Portugal
          </h1>
          
          <p className="text-xl md:text-2xl text-gaming-text-muted max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Seis títulos com comunidades ativas, links oficiais e sessões que cabem na tua rotina — sem lista interminável.
          </p>

          <div className="flex justify-center gap-6">
            <a href="#jogos" className="gaming-button gaming-button-primary min-w-[240px] no-underline">
              EXPLORAR TÍTULOS
            </a>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="metodo" className="py-32 border-y border-white/5 bg-black/40 relative overflow-hidden">
        <div className="absolute inset-0 gaming-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none italic uppercase">COMO ESCOLHEMOS <span className="text-gradient">ESTES JOGOS</span></h2>
            <p className="text-lg text-gaming-text-muted">Em Portugal, cada título entra na lista só se tiver comunidade ativa, regras legíveis e uma sessão que se compreenda depressa — sem montra infinita.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Acesso claro", desc: "Página oficial fácil de encontrar e arranque compreensível nos primeiros minutos.", color: "text-gaming-primary" },
              { title: "Sessão útil", desc: "Dá para jogar uma partida curta ou uma sessão longa sem perder o fio à meada.", color: "text-gaming-secondary" },
              { title: "Comunidade", desc: "Classificações, amigos ou guias: o jogo continua a viver fora do ecrã de carregamento.", color: "text-gaming-accent" },
            ].map((method) => (
              <div key={method.title} className="glass-panel p-10 rounded-3xl border-white/5 group hover:border-white/20 transition-all">
                <h3 className={`text-2xl font-black mb-4 italic uppercase ${method.color}`}>{method.title}</h3>
                <p className="text-gaming-text-muted leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Games Grid Section */}
      <section id="jogos" className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight">
                MARCAS <span className="text-gradient">RECOMENDADAS</span>
              </h2>
              <p className="text-lg text-gaming-text-muted leading-relaxed font-medium">
                Seleção exclusiva de plataformas licenciadas em Portugal. Performance, segurança e bónus analisados para a melhor experiência.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guia" className="py-40 bg-black/40 relative overflow-hidden">
        <div className="absolute inset-0 gaming-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-10 md:p-20 rounded-[3rem] border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gaming-primary/10 blur-[120px] -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-12 leading-[0.9] italic">
                  TRÊS GESTOS PARA<br />
                  <span className="text-gaming-accent tracking-tighter uppercase">ARRANCAR</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { id: "01", title: "Escolhe o teu estilo", desc: "Competitivo, criação ou aventura: parte da vontade do momento.", color: "accent" },
                    { id: "02", title: "Abre o link oficial", desc: "Usa sempre a página do editor — evita atalhos duvidosos.", color: "primary" },
                    { id: "03", title: "Define a sessão", desc: "Marca quanto tempo vais jogar e fecha quando a hora chegar.", color: "secondary" },
                  ].map((item) => (
                    <div key={item.id} className="flex gap-8 group">
                      <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gaming-${item.color}/10 border border-gaming-${item.color}/20 flex items-center justify-center text-gaming-${item.color} font-black text-xl group-hover:scale-110 transition-transform`}>
                        {item.id}
                      </div>
                      <div>
                        <h4 className="text-xl font-black mb-3 italic uppercase">{item.title}</h4>
                        <p className="text-gaming-text-muted leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gaming-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div className="space-y-8">
                    <div className="text-8xl animate-bounce">🇵🇹</div>
                    <h3 className="text-3xl font-black italic tracking-tight uppercase">JOGOS DE VOYAGE</h3>
                    <p className="text-gaming-text-muted font-medium">Curadoria de elite dos títulos mais jogados em Portugal. Encontra a tua próxima arena ou mundo de aventura.</p>
                    <a href="/go?f=1" className="gaming-button gaming-button-primary !text-xs !py-4 no-underline inline-block">
                      EXPLORAR AGORA
                    </a>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gaming-secondary to-transparent animate-scan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copy Section (Lista curta) */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 gaming-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-none italic uppercase">
            UM CATÁLOGO DE<br /><span className="text-gradient">PROPÓSITO LIMITADO</span>
          </h2>
          <p className="text-xl text-gaming-text-muted max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Marcas reconhecidas em Portugal, com comunidades reais — em vez de dezenas de entradas esquecidas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl border-white/5">
              <h4 className="font-black text-white mb-2 uppercase italic text-sm">Links oficiais</h4>
              <p className="text-xs text-gaming-text-muted">Cada cartão aponta para a página do editor.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-white/5">
              <h4 className="font-black text-white mb-2 uppercase italic text-sm">Sessões legíveis</h4>
              <p className="text-xs text-gaming-text-muted">Sabes o que esperar nos primeiros minutos.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-white/5">
              <h4 className="font-black text-white mb-2 uppercase italic text-sm">Menos, mas melhor</h4>
              <p className="text-xs text-gaming-text-muted">Uma seleção curta que dá para acompanhar de verdade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portugal · Ritmo saudável (Manter o controlo da sessão) */}
      <section className="py-40 bg-black/40 relative overflow-hidden">
        <div className="absolute inset-0 gaming-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-panel p-10 md:p-20 rounded-[3rem] border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gaming-primary/10 blur-[120px] -z-10" />
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight uppercase">Portugal · <span className="text-gaming-accent">Ritmo saudável</span></h2>
              <h3 className="text-2xl font-black italic tracking-tighter uppercase opacity-80">Manter o controlo da sessão</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-gaming-text-muted font-bold leading-relaxed">Um jogo abre depressa demais para deixar o tempo passar sem decisão. Define o quadro antes de clicar.</p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gaming-accent/10 border border-gaming-accent/20 flex items-center justify-center text-gaming-accent font-black">◆</div>
                    <p className="text-sm text-gaming-text-muted group-hover:text-white transition-colors">Decide à partida quanto tempo vais jogar e fecha quando a hora chegar.</p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gaming-primary/10 border border-gaming-primary/20 flex items-center justify-center text-gaming-primary font-black">◆</div>
                    <p className="text-sm text-gaming-text-muted group-hover:text-white transition-colors">Desliga lembretes e notificações que reabrem «só mais uma partida».</p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gaming-secondary/10 border border-gaming-secondary/20 flex items-center justify-center text-gaming-secondary font-black">◆</div>
                    <p className="text-sm text-gaming-text-muted group-hover:text-white transition-colors">Muda de categoria quando a sessão deixa de ser agradável e passa a automática.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gaming-gradient opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <span className="text-8xl">🎮</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gaming-secondary to-transparent animate-scan" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
