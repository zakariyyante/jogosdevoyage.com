export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[2rem] border-white/10">
        <h1 className="text-4xl font-black mb-8 bg-clip-text text-transparent gaming-gradient uppercase italic">Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-gaming-text-muted leading-relaxed">Tem alguma dúvida, sugestão ou feedback sobre a nossa plataforma? A nossa equipa está pronta para ouvir a comunidade.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 rounded-xl bg-gaming-primary/10 border border-gaming-primary/20 flex items-center justify-center text-gaming-primary font-black group-hover:scale-110 transition-transform">@</div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase italic">Email Geral</h4>
                  <p className="text-gaming-text-muted text-xs">geral@jogosdevoyage.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 rounded-xl bg-gaming-secondary/10 border border-gaming-secondary/20 flex items-center justify-center text-gaming-secondary font-black group-hover:scale-110 transition-transform">DC</div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase italic">Discord</h4>
                  <p className="text-gaming-text-muted text-xs">Comunidade Jogos de Voyage</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h3 className="text-xl font-black text-white uppercase italic mb-4">Envie uma Mensagem</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-gaming-text-muted uppercase tracking-widest mb-1">Nome</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gaming-primary outline-none transition-colors" placeholder="O seu nome..." />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gaming-text-muted uppercase tracking-widest mb-1">Email</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gaming-primary outline-none transition-colors" placeholder="O seu email..." />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gaming-text-muted uppercase tracking-widest mb-1">Mensagem</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gaming-primary outline-none transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full gaming-button gaming-button-primary !py-3 !text-[10px]">ENVIAR MENSAGEM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
