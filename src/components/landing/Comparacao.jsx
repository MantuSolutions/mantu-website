export default function Comparacao() {
  const comparativos = [
    {
      criterio: "Base de Conhecimento",
      tradicional: "Manual genérico de laboratório",
      gearmind: "Motor XGBoost treinado com 45.000 registros"
    },
    {
      criterio: "Abordagem de Troca",
      tradicional: "Reativa (avisa só no limite exato)",
      gearmind: "Preditiva (alerta seguro 400 KM antes)"
    },
    {
      criterio: "Memória de Desgaste",
      tradicional: "Ignora completamente o seu histórico",
      gearmind: "Pune negligências passadas para salvar o motor"
    },
    {
      criterio: "Ação do Tempo",
      tradicional: "Foca apenas em quilometragem rodada",
      gearmind: "Trava de oxidação de fluídos (ex: 180 dias)"
    },
    {
      criterio: "Personalização",
      tradicional: "Trata todas as motos de forma igual",
      gearmind: "Adapta ao seu asfalto e média diária de KM"
    }
  ];

  return (
    <section className="relative bg-black border-t border-white/5 overflow-hidden -mt-0 md:-mt-20 pt-6 md:pt-0 pb-6 md:pb-0">
      
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
            <span className="text-orange-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 md:mb-4 block">
              Análise de Eficiência
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 md:mb-6">
              A EVOLUÇÃO DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 italic">MANUTENÇÃO</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-xl font-light leading-relaxed">
              O adesivo colado no seu painel é cego para o seu comportamento. O GearMind calcula o desgaste real da sua máquina.
            </p>
          </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Badge "VS" Centralizado (Aparece em cima da borda no Desktop) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <span className="text-white/50 font-black italic text-xl">VS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-0 relative rounded-3xl overflow-hidden border border-white/10">
            
            {/* LADO ESQUERDO: O Padrão Antigo (Vermelho/Cinza) */}
            <div className="bg-white/[0.01] p-5 md:p-10 lg:p-14 lg:pr-20 lg:border-r border-white/5">
                <div className="mb-6 md:mb-10 text-center lg:text-left">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    O Padrão Antigo
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm font-light">
                    O que você e a sua oficina usam hoje.
                  </p>
                </div>

                <div className="space-y-5 md:space-y-8">
                  {comparativos.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <span className="text-[8px] md:text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                        {item.criterio}
                      </span>
                      <div className="flex items-start gap-2 md:gap-3">
                        <svg className="w-4 md:w-5 h-4 md:h-5 text-red-500/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-400 font-light text-xs md:text-sm lg:text-base leading-relaxed">
                          {item.tradicional}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            {/* LADO DIREITO: GearMind (Laranja Premium) */}
            <div className="bg-gradient-to-b from-orange-500/10 to-transparent p-5 md:p-10 lg:p-14 lg:pl-20 relative overflow-hidden">
              {/* Brilho interno */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="mb-6 md:mb-10 text-center lg:text-left relative z-10">
                  <h3 className="text-lg md:text-2xl font-black text-white mb-2 uppercase tracking-wide flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
                      GearMind IA
                    </span>
                  </h3>
                  <p className="text-orange-500/70 text-xs md:text-sm font-light">
                    A inteligência preditiva agindo no seu motor.
                  </p>
                </div>

                <div className="space-y-5 md:space-y-8 relative z-10">
                  {comparativos.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <span className="text-[8px] md:text-[10px] font-bold text-orange-500/50 uppercase tracking-widest hidden lg:block">
                        &nbsp; {/* Espaçador para manter o alinhamento no desktop */}
                      </span>
                      <div className="flex items-start gap-2 md:gap-3">
                        <svg className="w-4 md:w-5 h-4 md:h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white font-medium text-xs md:text-sm lg:text-base leading-relaxed drop-shadow-md">
                          {item.gearmind}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}