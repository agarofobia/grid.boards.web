import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section bg-gray-900/30 rounded-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Let’s craft your next board together.</h2>
      <p className="text-center mb-6">Reach out and let’s talk.</p>

      <form className="grid grid-cols-1 gap-4">
        <input className="p-3 rounded bg-gray-800 border border-gray-700" placeholder="Name" />
        <input className="p-3 rounded bg-gray-800 border border-gray-700" placeholder="Email" />
        <textarea className="p-3 rounded bg-gray-800 border border-gray-700" rows="4" placeholder="Tell us about the project"></textarea>
        <div className="text-right">
          <button type="submit" className="px-6 py-2 bg-brand-yellow text-black font-semibold rounded">Let’s Talk</button>
        </div>
      </form>
    </section>
  )
}
