import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white antialiased">
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <div className="my-12" />
        <Services />
        <div className="my-12" />
        <Process />
        <div className="my-12" />
        <Work />
        <div className="my-12" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
