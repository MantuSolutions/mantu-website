import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import Problema from "./components/landing/Problema";
import Solucao from "./components/landing/Solucao";

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-orange-500/30 scroll-smooth">
      <Navbar />
      
      <section className="min-h-screen">
        <Hero />
      </section>
      
      <section className="min-h-screen">
        <Problema />
      </section>

      <section className="min-h-screen">
        <Solucao />
      </section>
      
    </main>
  );
}

export default App;