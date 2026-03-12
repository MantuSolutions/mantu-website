import Navbar from "./components/layout/Navbar";

import Hero from "./components/landing/Hero";
import Problema from "./components/landing/Problema";
import Solucao from "./components/landing/Solucao";
import Funcionamento from "./components/landing/Funcionamento";
import Comparacao from "./components/landing/Comparacao";
import FAQ from "./components/landing/FAQ";
import Download from "./components/landing/Download";

import Footer from "./components/layout/Footer";


function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-blue-600/30 scroll-smooth">
      
      <Navbar />
    
      <section id="hero" className="scroll-mt-12 md:scroll-mt-24 min-h-screen">
        <Hero />
      </section>
      
      <section className="min-h-screen">
        <Problema />
      </section>

      <section id="solucao" className="scroll-mt-12 md:scroll-mt-55 min-h-screen">
        <Solucao />
      </section>

      <section className="min-h-screen">
        <Funcionamento />
      </section>

      <section id="comparacao" className="scroll-mt-12 md:scroll-mt-24 min-h-screen">
        <Comparacao />
      </section>

      <section id="download" className="scroll-mt-12 md:scroll-mt-30">
        <Download />
      </section>

      <section>
        <FAQ />
      </section>

      <Footer />
      
    </main>
  );
}

export default App;