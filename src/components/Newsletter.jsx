import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Newsletter() {
  // Substituí pelo seu ID do Formspree
  const [state, handleSubmit] = useForm("mwvrlwvg");

  // Se o envio deu certo, mostramos uma mensagem de sucesso estilizada
  if (state.succeeded) {
    return (
      <div className="text-center p-6 md:p-8 bg-blue-600/10 border border-blue-600/20 rounded-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-blue-600">Bem-vindo ao Mantu! ⚡</h3>
        <p className="text-gray-400 mt-2 text-sm md:text-base">Você entrou para a lista VIP. Fique de olho no seu e-mail.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4 md:px-0">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl transition-all focus-within:border-blue-600/50">
          
          <div className="flex-1 relative">
            <input
              id="email"
              type="email" 
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-gray-500 px-4 py-3 text-sm md:text-base"
            />
            {/* Validação do Formspree escondida, aparece apenas se houver erro */}
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="absolute -bottom-6 left-4 text-red-500 text-xs md:text-sm"
            />
          </div>

          {/* O Botão de Ação com o brilho Orange que definimos */}
          <button 
            type="submit" 
            disabled={state.submitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-black font-extrabold px-6 md:px-8 py-3 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] whitespace-nowrap text-sm md:text-base"
          >
            {state.submitting ? "Enviando..." : "ACESSAR BETA"}
          </button>
        </div>

        {/* Campo oculto de mensagem (opcional para o Formspree não dar erro se você quiser apenas e-mail) */}
        <input type="hidden" name="message" value="Inscrição via Landing Page Mantu" />
      </form>
      
    </div>
  );
}