import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Comparação', href: '#comparacao' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Aumentei a altura da barra no mobile (h-20) e no desktop (h-24) para comportar a logo maior */}
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo em Imagem */}
          <div 
            className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform z-[70]" 
            onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); closeMenu(); }}
          >
            <img 
              src="/logo_mantu.png" 
              alt="Logo Mantu"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-blue-600 px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Botão Hambúrguer Mobile */}
          <div className="md:hidden flex items-center z-[70]">
            <button 
              onClick={toggleMenu}
              className={`text-gray-400 hover:text-blue-600 focus:outline-none p-2 transition-all duration-300 ${isOpen ? 'text-blue-600 scale-110' : ''}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                // Ícone de X (Fechar)
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Ícone de Hambúrguer
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay do Menu Mobile */}
      <div className={`fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl z-[65] flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={closeMenu}
              className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest hover:text-blue-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          
          {/* Detalhe estético: Uma linha laranja no menu mobile */}
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-300 mt-8 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}