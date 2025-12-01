// src/components/About.jsx - Componente de la sección "About GridBoards".

import React from 'react'

export default function About() {
  return (
    // Sección principal con ID 'about' para navegación.
    // Se aplica padding superior (pt-24) y padding inferior nulo (pb-0) para ajuste vertical.
    <section id="about" className="pt-24 pb-0 px-6 md:px-20 text-gray-200">
      
      {/* Contenedor del contenido principal, centrado y con ancho máximo (max-w-3xl). */}
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
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
        {/* Párrafo destacado en color amarillo de marca. */}
        <p className="text-lg md:text-xl leading-relaxed text-yellow-400 font-semibold">
          Fast enough to win pitches, precise enough to plan productions.
        </p>
      </div>
    </section>
  )
}