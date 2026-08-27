export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[2rem] border-white/10">
        <h1 className="text-4xl font-black mb-8 bg-clip-text text-transparent gaming-gradient uppercase italic">Sobre a Jogos de Voyage</h1>
        <div className="prose prose-invert prose-gaming max-w-none text-gaming-text-muted space-y-6">
          <p className="text-xl text-white font-medium italic">A sua bússola para o entretenimento digital de elite em Portugal.</p>
          
          <p>A Jogos de Voyage nasceu da paixão pela cultura gaming e da necessidade de criar um espaço seguro, transparente e de alta performance para os jogadores portugueses.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">A Nossa Missão</h2>
          <p>O nosso objetivo é simplificar a descoberta de jogos e plataformas online, oferecendo uma curadoria rigorosa baseada em três pilares fundamentais: legalidade, rapidez e experiência de utilizador.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-gaming-secondary font-black mb-2 uppercase italic">Curadoria Rigorosa</h4>
              <p className="text-sm">Analisamos cada título individualmente para garantir que cumpre os mais altos padrões de qualidade.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-gaming-accent font-black mb-2 uppercase italic">Foco na Comunidade</h4>
              <p className="text-sm">Damos voz aos jogadores nacionais, destacando títulos com comunidades ativas em Portugal.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">Compromisso Ético</h2>
          <p>Operamos de forma independente, garantindo que as nossas análises e recomendações são imparciais. Promovemos ativamente o jogo responsável e apenas listamos plataformas devidamente licenciadas pelo SRIJ.</p>
          
          <p className="pt-8 border-t border-white/5">Seja bem-vindo à próxima etapa da sua jornada digital. <span className="text-gaming-primary font-bold italic">Domine o seu jogo.</span></p>
        </div>
      </div>
    </div>
  );
}
