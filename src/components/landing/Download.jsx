import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function DownloadCTA() {
  const [state, handleSubmit] = useForm("mwvrlwvg");
  const [localError, setLocalError] = useState("");

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value.trim().toLowerCase();

    // 1. Validação de Campo Vazio
    if (!emailValue) {
      setLocalError("O e-mail é obrigatório, piloto.");
      return;
    }

    // 2. Validação de Formato (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setLocalError("Formato de e-mail inválido.");
      return;
    }

    // 3. Filtro de Domínios Permitidos (White List)
    const dominiosPermitidos = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'yahoo.com.br', 'live.com'];
    const dominioUsuario = emailValue.split('@')[1];

    if (!dominiosPermitidos.includes(dominioUsuario)) {
      setLocalError("Use um e-mail pessoal (Gmail, Outlook, etc).");
      return;
    }

    setLocalError("");
    handleSubmit(e);
  };

  return (
    <section className="relative w-full pt-3 md:pt-6 -mt-2 md:-mt-4">
      <div className="flex flex-col lg:flex-row w-full min-h-[60vh] md:min-h-[70vh] mt-0 md:mt-5">
        
        {/* LADO ESQUERDO (Formulário e Texto) */}
        <div className="w-full lg:w-3/5 px-6 md:px-8 py-16 md:py-20 lg:px-24 xl:px-32 flex flex-col justify-center relative bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col w-full">
            <span className="text-blue-600 font-bold tracking-[0.3em] text-[9px] md:text-xs uppercase mb-4 md:mb-6 flex items-center justify-center lg:justify-start gap-2 md:gap-3 w-full lg:w-auto">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Acesso Antecipado
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 md:mb-8 leading-[1.05] text-center lg:text-left">
              A IA DO SEU MOTOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 italic">
                NO SEU BOLSO.
              </span>
            </h2>
            
            <p className="text-gray-400 text-md md:text-lg lg:text-xl font-light leading-relaxed mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              O aplicativo nativo do Mantu está na fase final de calibração preditiva. 
              Entre para a lista de espera e seja o primeiro a conectar sua máquina.
            </p>
            
            {state.succeeded ? (
              <div className="p-4 md:p-6 bg-blue-600/10 border border-blue-600/30 text-blue-400 font-bold tracking-widest uppercase max-w-xl mx-auto lg:mx-0 text-center lg:text-left animate-in fade-in zoom-in duration-500 text-sm md:text-base">
                Piloto cadastrado! Verifique sua inbox em breve.
              </div>
            ) : (
              <div className="relative max-w-xl mx-auto lg:mx-0 w-full">
                <form onSubmit={handleCustomSubmit} className="flex flex-col sm:flex-row gap-0 shadow-2xl relative group">
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="Seu e-mail de piloto..." 
                    onChange={() => setLocalError("")}
                    className={`flex-grow px-6 py-5 bg-white/[0.03] border ${localError ? 'border-red-500' : 'border-white/10'} sm:border-r-0 focus:bg-white/[0.05] focus:outline-none focus:border-blue-600 text-white transition-all`}
                  />
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="px-10 py-5 bg-blue-600 text-black font-black uppercase tracking-widest hover:bg-blue-400 active:bg-blue-700 transition-colors whitespace-nowrap disabled:opacity-50">
                    {state.submitting ? "Sincronizando..." : "Entrar na Fila"}
                  </button>
                </form>

                {/* Mensagem de Erro com Estilo Brutalista */}
                {localError && (
                  <p className="absolute -bottom-8 left-0 lg:left-0 w-full text-center lg:text-left text-red-500 text-[10px] font-black uppercase tracking-[0.2em] ">
                    ⚠️ {localError}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* LADO DIREITO (Status das Lojas) */}
        <div className="w-full lg:w-2/5 bg-[#0a0a0a] border-t lg:border-t-0 lg:border-l border-white/5 px-6 md:px-8 py-4 md:py-12 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none">
            DEV
          </div>
          <div className="w-full max-w-sm space-y-4 relative z-10">
             <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/10 pb-4">
              Status das Plataformas
            </p>
            {/* Bloco iOS */}
            <div className="w-full flex items-center justify-between p-6 bg-black border border-white/5 opacity-40 grayscale">
              <div className="flex items-center gap-4 text-left">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.74 2.3.06 4.01 1.05 4.88 2.62-4.08 2.37-3.4 8.24.62 9.87-.85 1.94-2.12 4.09-4.16 4.42v.02zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">iOS</div>
                  <div className="text-lg text-white font-medium">App Store</div>
                </div>
              </div>
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            {/* Bloco Android */}
            <div className="w-full flex items-center justify-between p-6 bg-black border border-white/5 opacity-40 grayscale">
              <div className="flex items-center gap-4 text-left">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M4.09 3.03C3.69 3.33 3.5 3.86 3.5 4.54v14.92c0 .68.19 1.21.59 1.51L14.46 12 4.09 3.03z" /></svg>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Android</div>
                  <div className="text-lg text-white font-medium">Play Store</div>
                </div>
              </div>
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}