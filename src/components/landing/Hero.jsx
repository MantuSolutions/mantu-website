export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center overflow-hidden bg-black">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/15 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md relative z-10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">
          Plataforma Online • IA em Calibração
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight relative z-10">
        CUIDE DA SUA MOTO <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 italic">
          DE FORMA INTELIGENTE.
        </span>
      </h1>
      
      <p className="max-w-3xl text-gray-300 text-lg md:text-xl mb-12 leading-relaxed font-light relative z-10">
        O GearMind é o cérebro que sua garagem precisava. <strong className="text-white font-medium">Economize</strong> com trocas no tempo certo, <strong className="text-white font-medium">proteja</strong> o desempenho original e <strong className="text-white font-medium">cuide</strong> de quem te leva a qualquer lugar.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto relative z-10">
        <input 
          type="email" 
          placeholder="Seu melhor e-mail..." 
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all backdrop-blur-sm"
        />
        <button className="whitespace-nowrap px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-wide rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          Acesso VIP à IA
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500 font-medium relative z-10">
        Seja o primeiro a testar o cérebro do GearMind quando ele ligar.
      </p>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20"></div>
    </section>
  )
}