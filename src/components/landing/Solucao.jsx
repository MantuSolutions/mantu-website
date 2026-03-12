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
    <section className="px-6 md:px-8 lg:px-0 relative overflow-hidden -mt-0 md:-mt-25 pt-8 md:pt-0 pb-8 md:pb-0">
      {/* Grid de fundo sutil para manter o padrão do Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 md:mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            Engenharia de Dados Aplicada
          </h2>
          <h3 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6">
            A CIÊNCIA POR TRÁS DA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">
              SUA SEGURANÇA.
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            O Mantu não dá palpites. Ele processa 45.000 registros de telemetria sintética para entender o comportamento da sua moto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="group p-5 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-600/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className=" inline-block p-2 md:p-3 rounded-lg bg-blue-600/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-[8px] md:text-[10px] font-bold text-blue-400 tracking-tighter uppercase mb-2">
                {item.tag}
              </div>
              <h4 className="text-base md:text-xl font-bold text-white mb-2 md:mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}