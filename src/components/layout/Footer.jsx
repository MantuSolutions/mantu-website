export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Brilho sutil no fundo para dar profundidade */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-orange-500/10 blur-[100px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Coluna 1: Marca e Missão */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black text-white tracking-tighter italic block mb-4 hover:scale-105 origin-left transition-transform cursor-pointer">
              GEAR<span className="text-orange-500">MIND</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              O primeiro cérebro artificial dedicado à manutenção de motocicletas. 
              Não espere o barulho para descobrir o problema.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">A Dor do Cliente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">O Cérebro IA (Beta)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Como Funciona</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Comunidade */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Projeto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Apoiar no GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Falar com o Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Política de Dados</a></li>
            </ul>
          </div>
        </div>

        {/* Linha de Direitos Autorais e Assinatura */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} GearMind. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Construído na graxa e no código.
          </p>
        </div>
      </div>
    </footer>
  );
}