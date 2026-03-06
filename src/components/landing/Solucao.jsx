import { BrainCircuit, ShieldAlert, History, Timer } from 'lucide-react';

const solutions = [
  {
    title: "O Cérebro XGBoost",
    description: "Esqueça o manual genérico. Nossa IA analisa seu perfil de uso — seja urbano severo ou estrada — e calcula a degradação real de cada componente.",
    icon: <BrainCircuit className="w-8 h-8 text-orange-500" />,
    tag: "Motor Preditivo"
  },
  {
    title: "Memória de Negligência",
    description: "O sistema identifica atrasos em trocas passadas e recalcula o desgaste acumulado, encurtando prazos críticos para salvar seu motor.",
    icon: <History className="w-8 h-8 text-orange-500" />,
    tag: "Análise de Histórico"
  },
  {
    title: "Margem de Segurança",
    description: "Nunca chegue no limite. Alertamos você 400 KM antes da zona crítica, garantindo que você agende a oficina sem pressa.",
    icon: <ShieldAlert className="w-8 h-8 text-orange-500" />,
    tag: "Protocolo de Proteção"
  },
  {
    title: "Trava de Oxidação",
    description: "Fluídos envelhecem mesmo sem rodar. Nossa trava de 180 dias garante que o óleo seja trocado por tempo, evitando corrosão interna.",
    icon: <Timer className="w-8 h-8 text-orange-500" />,
    tag: "Monitoramento Temporal"
  }
];

export default function SolutionSection() {
  return (
    <section className="bg-black py-25 px-6 relative overflow-hidden">
      {/* Grid de fundo sutil para manter o padrão do Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
            Engenharia de Dados Aplicada
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            A CIÊNCIA POR TRÁS DA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
              SUA SEGURANÇA.
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            O GearMind não dá palpites. Ele processa 45.000 registros de telemetria sintética para entender o comportamento da sua moto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className=" inline-block p-3 rounded-lg bg-orange-500/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-[10px] font-bold text-orange-400 tracking-tighter uppercase mb-2">
                {item.tag}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}