import { BrainCircuit, ShieldAlert, History, Timer } from 'lucide-react';

const solutions = [
  {
    title: "O Cérebro XGBoost",
    description: "Esqueça o manual genérico. Nossa IA analisa seu perfil de uso — seja urbano severo ou estrada — e calcula a degradação real de cada componente.",
    icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
    tag: "Motor Preditivo"
  },
  {
    title: "Memória de Negligência",
    description: "O sistema identifica atrasos em trocas passadas e recalcula o desgaste acumulado, encurtando prazos críticos para salvar seu motor.",
    icon: <History className="w-8 h-8 text-blue-600" />,
    tag: "Análise de Histórico"
  },
  {
    title: "Margem de Segurança",
    description: "Nunca chegue no limite. Alertamos você 400 KM antes da zona crítica, garantindo que você agende a oficina sem pressa.",
    icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
    tag: "Protocolo de Proteção"
  },
  {
    title: "Trava de Oxidação",
    description: "Fluídos envelhecem mesmo sem rodar. Nossa trava de 180 dias garante que o óleo seja trocado por tempo, evitando corrosão interna.",
    icon: <Timer className="w-8 h-8 text-blue-600" />,
    tag: "Monitoramento Temporal"
  }
];

export default function SolutionSection() {
  return (

   <section id="solucao" className="relative w-full overflow-hidden px-4 md:px-8 bg-black mt-45 md:-mt-20 max-[350px]:mt-20">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
            Engenharia de Dados Aplicada
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-5xl max-[350px]:text-3xl font-black text-white mb-4 md:mb-6 tracking-tight">
            A CIÊNCIA POR TRÁS DA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">
              SUA SEGURANÇA.
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed">
            O Mantu não dá palpites. Ele processa 45.000 registros de telemetria sintética para entender o comportamento da sua moto.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-600/30 transition-all duration-300 backdrop-blur-sm flex flex-col items-start"
            >
              {/* Ícone */}
              <div className="p-3 mb-4 rounded-xl bg-blue-600/10 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-300">
                {item.icon}
              </div>
              
              {/* Tag */}
              <div className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-2">
                {item.tag}
              </div>
              
              {/* Título e Texto */}
              <h4 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}