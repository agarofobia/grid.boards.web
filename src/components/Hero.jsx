import React from 'react'

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background visual placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70 -z-10" />
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          AI Storyboards, Boardomatics & Animatics
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90">
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
