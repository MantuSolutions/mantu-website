import React, { useState } from 'react';

export default function Hero() {
  const [emailHero, setEmailHero] = useState("");

  const handleDirecionarLead = () => {
    // Procura o input oficial lá no componente de Download
    const inputDestino = document.getElementById("email");
    
    if (inputDestino) {
      // 1. O "Pulo do Gato": Força o React a reconhecer que o valor mudou via código
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      nativeInputValueSetter.call(inputDestino, emailHero);
      
      // 2. Dispara o evento avisando o navegador (assim o Formspree lê direitinho)
      const ev = new Event('input', { bubbles: true });
      inputDestino.dispatchEvent(ev);
      
      // 3. Rola a página suavemente até o formulário
      inputDestino.scrollIntoView({ behavior: "smooth", block: "center" });
      
      // 4. Dá um pequeno delay para a rolagem terminar e então foca no campo
      setTimeout(() => {
        inputDestino.focus();
      }, 600);
      
    } else {
      // Fallback: se não achar o ID, joga pra âncora geral da seção
      window.location.href = "#download";
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black">
      
      {/* Imagem de Fundo (public/fundo.jpg) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fundo.jpg" 
          alt="Background Mantu" 
          className="w-full h-full object-cover opacity-40 object-[50%_30%]"
        />
        {/* Overlay para dar profundidade e foco no centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Brilho Azul Centralizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[300px] rounded-full z-10 pointer-events-none"></div>

      {/* Conteúdo (Badge, Título, etc.) */}
      <div className="relative z-20 px-4 md:px-6 pt-24 md:pt-20 flex flex-col items-center justify-center h-full">
      <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-600/30 bg-blue-600/10 backdrop-blur-md relative z-20 mb-6 md:mb-8">
        <span className="relative flex h-2 md:h-2.5 w-2 md:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 md:h-2.5 w-2 md:w-2.5 bg-blue-600"></span>
        </span>
        <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
          Plataforma Online • IA em Calibração
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-6 tracking-tight leading-tight relative z-20">
        CUIDE DA SUA MOTO <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300 italic">
          DE FORMA INTELIGENTE.
        </span>
      </h1>
      
      <p className="max-w-3xl text-gray-300 text-sm md:text-lg lg:text-xl mb-6 md:mb-12 leading-relaxed font-light relative z-20">
        O Mantu é o cérebro que sua garagem precisava. Economize com trocas no tempo certo, proteja o desempenho original e cuide de quem te leva a qualquer lugar.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-2 md:gap-4 w-full max-w-lg mx-auto relative z-20">
        <input 
          type="email" 
          value={emailHero}
          onChange={(e) => setEmailHero(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleDirecionarLead()}
          placeholder="Seu melhor e-mail..." 
          className="w-full px-3 md:px-6 py-2.5 md:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all backdrop-blur-sm text-xs md:text-base"
        />
        <button 
          onClick={handleDirecionarLead}
          className="whitespace-nowrap px-5 md:px-8 py-2.5 md:py-4 bg-blue-600 hover:bg-blue-700 text-black font-black uppercase tracking-wide rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-xs md:text-base">
          Acesso VIP à IA
        </button>
      </div>

      <p className="mt-3 md:mt-6 text-[10px] md:text-sm text-gray-500 font-medium relative z-20">
        Seja o primeiro a testar o cérebro do Mantu quando ele ligar.
      </p>
      </div>

    </section>
  )
}