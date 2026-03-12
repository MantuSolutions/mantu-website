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
    <section className="relative bg-black overflow-hidden -mt-0 md:-mt-35 pt-6 md:pt-0 pb-6 md:pb-0">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 md:mb-4 block">
              Arquitetura do Sistema
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 md:mb-6">
              COMO O <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 italic">MANTU</span> PENSA
            </h2>
            <p className="text-gray-400 text-sm md:text-xl font-light leading-relaxed">
              Não é um alarme no celular. É um pipeline de engenharia de dados que transforma a rotina da sua moto em previsões matemáticas exatas.
            </p>
          </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 relative pb-4 md:pb-0">
          
          {/* Linha conectora (Desktop) */}
          <div className="hidden lg:block absolute top-[45%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

          {pipeline.map((step, index) => (
              <div className="relative group h-full">
                
                {/* Cartão Principal */}
                <div className="relative h-full p-5 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-blue-600/40 transition-all duration-500 flex flex-col backdrop-blur-sm overflow-hidden mt-6 md:mt-8 lg:mt-0">
                  
                  {/* Número Gigante em Watermark */}
                  <div className="hidden md:block absolute -top-6 -right-4 text-8xl font-black text-white/[0.03] group-hover:text-blue-600/[0.05] transition-colors duration-500 pointer-events-none select-none">
                    {step.id}
                  </div>

                  {/* Ícone / Indicador de Passo */}
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-black border border-blue-600/30 flex items-center justify-center mb-4 md:mb-8 relative z-10 group-hover:scale-110 group-hover:border-blue-600 transition-all duration-500 shadow-[0_0_15px_rgba(37,99,235,0)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <span className="text-blue-600 font-bold text-sm md:text-lg">{step.id}</span>
                  </div>

                  {/* Conteúdo */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light mb-3 md:mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Tag inferior */}
                  <div className="relative z-10 border-t border-white/5 pt-2 md:pt-3 mt-auto">
                    <span className="text-[9px] md:text-xs font-bold text-blue-600/60 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
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