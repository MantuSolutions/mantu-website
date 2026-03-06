export default function Problema() {
  return (
    <section className="relative py-24 bg-black border-t border-white/10 overflow-hidden">
      
      {/* Detalhe visual de fundo (Grid sutil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 py-25">
            O manual da sua moto <br className="hidden md:block" />
            <span className="text-orange-500 italic">NÃO TE CONHECE</span>
          </h2>
          <p className="text-xl text-white-400 font-light leading-relaxed">
            Os manuais são escritos para <span className="font-bold text-orange-700">condições perfeitas de laboratório</span>, não pro asfalto 
            e uso diário nos brasileiros. Sua moto exige uma inteligência que entenda o asfalto que você anda todo dia.
          </p>
        </div>

        {/* Cards de Problema (A Dor) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Trocar Cedo Demais */}
          <div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
            <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-6">
              {/* Ícone de Dinheiro/Desperdício */}
              <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Você perde seu dinheiro
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Seguir o manual ou o mecânico tradicional cegamente significa trocar peças e fluidos cedo demais. Você paga por manutenções que a sua moto ainda não precisava.
            </p>
          </div>

          {/* Card 2: Trocar Tarde Demais */}
          <div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
            <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6">
              {/* Ícone de Alerta/Motor */}
              <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
              Arrisca seu Motor
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Por outro lado, esticar o prazo e esquecer a quilometragem é o caminho mais rápido para ficar na mão. Uma peça que quebra no momento errado custa dez vezes mais.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}