import React from 'react';

export default function Funcionamento() {
  const pipeline = [
    {
      id: "01",
      title: "Sincronização de Telemetria",
      description: "Você insere o KM do painel. O sistema cruza esse dado com seu histórico instantaneamente, estabelecendo sua média real de rodagem diária.",
      metric: "Input de Dados"
    },
    {
      id: "02",
      title: "Processamento XGBoost",
      description: "O algoritmo avalia seu perfil (urbano ou lazer) contra 45.000 padrões de desgaste, ignorando o manual genérico da montadora.",
      metric: "Análise Preditiva"
    },
    {
      id: "03",
      title: "Cálculo de Negligência",
      description: "O motor busca atrasos em trocas anteriores. Se houve negligência passada, a IA encurta a vida útil da peça atual para proteger o motor.",
      metric: "Ajuste de Desgaste"
    },
    {
      id: "04",
      title: "Veredito e Proteção",
      description: "Você recebe a quilometragem exata da próxima manutenção, já com um buffer de segurança de 400 KM subtraídos para evitar a zona de risco.",
      metric: "Saída Otimizada"
    }
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden py-50 md:py-24 lg:pb-24 lg:pt-0 lg:-mt-12">

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-blue-600 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 md:mb-4 block">
            Arquitetura do Sistema
          </span>
          <h2 className="text-5xl md:text-5xl max-[350px]:text-3xl font-black text-white uppercase tracking-tight mb-4 md:mb-6">
            COMO O <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 italic pr-1">MANTU</span> PENSA
          </h2>
          <p className="text-gray-400 text-sm md:text-xl font-light leading-relaxed">
            Não é um alarme no celular. É um pipeline de engenharia de dados que transforma a rotina da sua moto em previsões matemáticas exatas.
          </p>
        </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative">
          
          {/* Linha conectora (Desktop) */}
          <div className="hidden lg:block absolute top-[45%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

          {pipeline.map((step, index) => (
            <div key={index} className="relative group h-full">
              
              {/* Cartão Principal */}
              <div className="relative h-full p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-blue-600/40 transition-all duration-500 flex flex-col backdrop-blur-sm overflow-hidden">
                
                {/* Número Gigante em Watermark */}
                <div className="hidden md:block absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] group-hover:text-blue-600/[0.05] transition-colors duration-500 pointer-events-none select-none">
                  {step.id}
                </div>

                {/* Ícone / Indicador de Passo */}
                <div className="w-12 h-12 rounded-full bg-black border border-blue-600/30 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-blue-600 transition-all duration-500 shadow-[0_0_15px_rgba(37,99,235,0)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  <span className="text-blue-600 font-bold text-lg">{step.id}</span>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Tag inferior */}
                <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
                  <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                    {step.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}