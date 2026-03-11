export default function Navbar() {
  return (
    // Fundo fixo no topo, com desfoque de vidro (backdrop-blur) e borda sutil
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Estilo Automotivo */}
          <div className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter italic">
              GEAR<span className="text-orange-500">MIND</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#hero" 
                className="text-gray-400 hover:text-orange-500 px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all"
              >
                Início
              </a>
              <a 
                href="#solucao" 
                className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest transition-all"
              >
                Solução
              </a>
              <a 
                href="#comparacao" 
                className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest transition-all"
              >
                Comparação
              </a>
              <a 
                href="#download" 
                className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest transition-all"
              >
                Download
              </a>
            </div>
          </div>
          
          {/* Menu Mobile (Ícone de Hambúrguer) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}