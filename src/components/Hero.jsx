import React from 'react'

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center bg-black overflow-hidden">
      
      {/* RUTA DE TU SISTEMA OPERATIVO (Solo para referencia):
          "C:\Users\HP\Desktop\artu\gridboards-vite\public\assets\hero-video.mp4" 
      */}
      
      {/* 1. Video de Fondo (Usando la RUTA WEB que funciona con Vite) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/hero-video.mp4" 
      >
        {/* Usamos la misma ruta para compatibilidad */}
        <source src="/assets/hero-video.mp4" type="video/mp4" /> 
        
        {/* Fallback */}
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* 2. Overlay Oscuro */}
      <div className="absolute inset-0 bg-black/70"></div> 
      
      {/* 3. Contenido Principal */}
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