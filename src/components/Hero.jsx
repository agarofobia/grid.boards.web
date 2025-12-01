// src/components/Hero.jsx - Componente de la sección principal (Hero/Header).

import React from 'react'

export default function Hero() {
  return (
    // Contenedor principal (header). Se extiende a min-h-screen y usa pt-20 para desplazar el contenido
    // bajo el Navbar fijo. Posicionamiento relativo para contener el video de fondo.
    <header className="relative min-h-screen pt-20 flex items-center justify-center text-center bg-black overflow-hidden">
      
      {/* Elemento de video: Se posiciona absolutamente para servir como fondo. */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/hero-video.mp4" 
      >
        {/* Etiqueta source para compatibilidad con diferentes navegadores. */}
        <source src="/assets/hero-video.mp4" type="video/mp4" /> 
        
        {/* Mensaje de fallback si el navegador no soporta el formato. */}
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Capa de superposición (overlay) oscura con 70% de opacidad para mejorar la legibilidad del texto. */}
      <div className="absolute inset-0 bg-black/70"></div> 
      
      {/* Contenido principal de la sección, centrado y con z-index superior al video/overlay. */}
      <div className="container mx-auto px-6 relative z-10"> 
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          AI Storyboards, Boardomatics & Animatics
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-8 opacity-90">
          Crafted by artists at the speed of pitch.
        </p>
        
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-brand-yellow text-black font-semibold rounded-full shadow-lg hover:brightness-95 transition"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  )
}