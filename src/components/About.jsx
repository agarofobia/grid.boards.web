// src/components/About.jsx - ¡Fondo de video/imagen eliminado!

import React from 'react'

export default function About() {
  return (
    // Sección normal con padding, sin fondos propios
    // Heredará el fondo oscuro de App.jsx
    // CAMBIO 1: Revertido a 'py-12' para el padding vertical original
    <section id="about" className="py-12 px-6 md:px-20 text-gray-200">
      
      {/* Fondo con video/imagen ELIMINADOS */}

      {/* Contenido */}
      {/* Se quitó la clase 'relative' que ya no es necesaria */}
      {/* CAMBIO 2: 'max-w-4xl' cambiado a 'max-w-3xl' para un texto más angosto y centrado */}
      <div className="max-w-3xl mx-auto text-center">
        {/* CAMBIO 3: Título más grande (de 4xl/5xl a 5xl/6xl) */}
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
        <p className="text-lg md:text-xl leading-relaxed text-yellow-400 font-semibold">
          Fast enough to win pitches, precise enough to plan productions.
        </p>
      </div>
    </section>
  )
}