import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[2rem] border-white/10">
        <h1 className="text-4xl font-black mb-8 bg-clip-text text-transparent gaming-gradient uppercase italic">Política de Privacidade</h1>
        <div className="prose prose-invert prose-gaming max-w-none text-gaming-text-muted space-y-6">
          <p>Última atualização: 27 de agosto de 2026</p>
          <p>Na Jogos de Voyage, a sua privacidade é uma prioridade. Esta política explica como lidamos com as informações.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">1. Informações que Recolhemos</h2>
          <p>Somos um portal de links. Não recolhemos dados pessoais sensíveis a menos que opte por entrar em contacto connosco ou subscrever a nossa newsletter.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">2. Cookies</h2>
          <p>Usamos cookies básicos para melhorar a sua experiência de navegação e analisar o tráfego do site através do Vercel Analytics.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">3. Links de Terceiros</h2>
          <p>O nosso site contém links para sites oficiais de jogos. Não somos responsáveis pelas práticas de privacidade desses sites externos.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 uppercase italic">4. Contacto</h2>
          <p>Para qualquer questão sobre esta política, pode contactar-nos através do nosso Discord oficial.</p>
          
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
