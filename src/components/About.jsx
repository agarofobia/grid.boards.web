// src/components/About.jsx - ¡Overlay Eliminado!

import React from 'react'

// src/components/About.jsx
export default function About() {
  return (
    // Sección es transparente (sin bg-black)
    <section id="about" className="relative py-12 px-6 md:px-20 text-gray-200 overflow-hidden">
      
      {/* Fondo con video/imagen (se mantiene igual) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/bg-placeholder.mp4" type="video/mp4" />
        {/* Fallback si el navegador no soporta video */}
        Tu navegador no soporta videos HTML5.
      </video>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-placeholder.jpg')" }}
      ></div>

      {/* CAMBIO CLAVE: Eliminamos el div del Overlay por completo */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Contenido */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          About GridBoards
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We help creative agencies and production companies test scripts and win pitches with clarity.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our storyboards, boardomatics and animatics are crafted by artists with strong backgrounds in film and advertising.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Each frame is directed with cinematic craft and delivered under tight schedules, with first visuals ready within 24 hours.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-yellow-400 font-semibold">
          Fast enough to win pitches, precise enough to plan productions.
        </p>
      </div>
    </section>
  )
}