import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[2rem] border-white/10">
        <h1 className="text-4xl font-black mb-8 bg-clip-text text-transparent gaming-gradient uppercase italic">Termos de Uso</h1>
        <div className="prose prose-invert prose-gaming max-w-none text-gaming-text-muted space-y-6">
          <p>Última atualização: 27 de agosto de 2026</p>
          <p>Ao aceder à Jogos de Voyage, concorda em cumprir estes termos de uso.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">1. Uso do Site</h2>
          <p>Este site destina-se a fornecer informações e links oficiais sobre jogos populares em Portugal. O uso comercial não autorizado é proibido.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">2. Isenção de Responsabilidade</h2>
          <p>Não somos proprietários de nenhum dos jogos listados. Todos os direitos pertencem aos respetivos editores (Riot Games, Valve, EA, etc.).</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">3. Links Oficiais</h2>
          <p>Esforçamo-nos por manter todos os links atualizados e seguros, mas não garantimos a disponibilidade contínua dos sites de terceiros.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">4. Alterações</h2>
          <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, publicando a versão atualizada no site.</p>
          
          <div className="pt-12 mt-12 border-t border-white/5">
            <Link href="/" className="gaming-button gaming-button-outline !py-3 !text-[10px]">
              VOLTAR AO INÍCIO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
