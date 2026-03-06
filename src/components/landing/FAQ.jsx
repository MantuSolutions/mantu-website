import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      pergunta: "O GearMind usa os mesmos prazos do manual?",
      resposta: "Não. O manual serve como base, mas nossa IA calcula o desgaste real conforme seu uso e perfil de pilotagem."
    },
    {
      id: 2,
      pergunta: "O que é a Memória de Negligência?",
      resposta: "É o ajuste que a IA faz caso você tenha atrasado trocas passadas, encurtando o próximo prazo para proteger o motor."
    },
    {
      id: 3,
      pergunta: "Como funciona a Trava de Oxidação?",
      resposta: "Mesmo sem rodar, o óleo degrada. Se passarem 180 dias, o sistema avisa que é hora de trocar."
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">
            Perguntas <span className="text-orange-500 italic">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={item.id} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.03] transition-colors"
              >
                <span className={`font-bold ${openIndex === index ? "text-orange-500" : "text-white"}`}>
                  {item.pergunta}
                </span>
                <span className="text-orange-500 text-2xl leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 font-light pt-2 border-t border-white/5">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}