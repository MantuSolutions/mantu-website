import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: "faq-1",
      pergunta: "O GearMind usa os mesmos prazos do manual?",
      resposta: "Não. O manual da montadora serve apenas como nosso teto de recomendação. Nossa IA utiliza o motor XGBoost e nunca irá recomendar um tempo maior que o informado no manual"
    },
    {
      id: "faq-2",
      pergunta: "O que acontece se eu atrasar uma troca?",
      resposta: "O sistema ativa o regístro de atraso. Se você demorou pra trocar óleo ou filtro, a IA calcula o desgaste extra que o motor sofreu e encurta automaticamente o prazo da próxima manutenção para compensar e proteger a máquina."
    },
    {
      id: "faq-3",
      pergunta: "Como a IA sabe a hora exata de me avisar?",
      resposta: "Nós não deixamos você chegar no limite. A IA calcula a quilometragem exata da degradação e aplica um aumento de Segurança de 400 KM. O alerta chega antes do risco, dando tempo de sobra para agendar a oficina."
    },
    {
      id: "faq-4",
      pergunta: "E se a moto ficar muito tempo parada?",
      resposta: "Fluidos sofrem oxidação mesmo sem rodar. O sistema possui uma trava temporal. Independentemente da quilometragem calculada pela IA, se passarem 180 dias (6 meses) desde a última troca, emitimos um alerta de manutenção por tempo."
    },
    {
      id: "faq-5",
      pergunta: "Como o hodômetro se mantém atualizado?",
      resposta: "Sempre que você acessa a plataforma, insere o KM atual do painel. O banco de dados sincroniza instantaneamente, cruzando com seu histórico para recalcular sua média diária de rodagem na mesma hora."
    },
    {
      id: "faq-7",
      pergunta: "Meus dados de rodagem estão seguros?",
      resposta: "Totalmente. O GearMind utiliza criptografia de ponta a ponta em todas as comunicações com o banco de dados PostgreSQL. Suas informações de telemetria são usadas exclusivamente pelo motor de IA para gerar suas previsões, sem compartilhamento com terceiros."
    }
  ];

  return (
    <section className="relative w-full bg-black border-t border-white/5 overflow-hidden mt-[-3rem]">
      
      {/* Brilho Centralizado no Topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO CENTRALIZADO */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            DÚVIDAS <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 italic">
              TÉCNICAS
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Entenda a lógica de engenharia por trás do nosso motor preditivo e como ele atua diretamente na proteção do seu veículo.
          </p>
        </div>

        {/* GRID DE MÓDULOS (2 Colunas no Desktop, 1 no Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.id} 
                className={`flex flex-col rounded-3xl border transition-all duration-500 backdrop-blur-sm overflow-hidden ${
                  isOpen 
                    ? "bg-white/[0.04] border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.05)]" 
                    : "bg-white/[0.01] border-white/5 hover:bg-white/[0.02] hover:border-white/10"
                }`}
              >
                {/* Botão da Pergunta */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-8 flex justify-between items-start gap-4 focus:outline-none group"
                >
                  <span 
                    className={`text-lg md:text-xl font-bold tracking-wide transition-colors duration-300 ${
                      isOpen ? "text-orange-400" : "text-white group-hover:text-orange-500"
                    }`}
                  >
                    {item.pergunta}
                  </span>
                  
                  {/* Ícone Minimalista (Sinal de + e -) */}
                  <div 
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border ${
                      isOpen 
                        ? "bg-orange-500 text-black border-orange-500 rotate-180" 
                        : "bg-transparent text-gray-400 border-white/10 group-hover:border-orange-500/50 group-hover:text-orange-500"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} 
                      />
                    </svg>
                  </div>
                </button>

                {/* Resposta com animação de Grid nativa (super leve) */}
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 pt-2">
                      <div className="w-8 h-px bg-orange-500/30 mb-4"></div>
                      <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Fechamento / CTA Secundário */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-light">
            Sua dúvida envolve integração direta com APIs? <br className="sm:hidden"/>
            <a href="#" className="text-orange-500 hover:text-orange-400 underline underline-offset-4 ml-1 transition-colors">
              Acesse a documentação do desenvolvedor.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}