// src/components/Contact.jsx - ¡Versión Final con Borde Sutil!

import React from 'react';

export default function Contact() {
    return (
        // Sección con padding vertical estándar
        <section id="contact" className="py-20 px-6 md:px-20">
            
            {/* MARCO PRINCIPAL: Cambio CLAVE: border-2 border-white a border border-gray-800 */}
            <div className="max-w-3xl mx-auto p-8 border border-gray-800 rounded-xl shadow-2xl bg-black/60">

                <h2 className="text-2xl font-bold mb-4 text-center">Let’s craft your next board together.</h2>
                <p className="text-center text-gray-400 mb-6">Reach out and let’s talk.</p>

                <form className="grid grid-cols-1 gap-4">
                    {/* Campos de Input: Se mantienen los estilos de transparencia */}
                    <input 
                        className="p-3 rounded bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-brand-yellow focus:border-brand-yellow" 
                        placeholder="Name" 
                        name="name" 
                        required
                    />
                    
                    <input 
                        className="p-3 rounded bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-brand-yellow focus:border-brand-yellow" 
                        placeholder="Email" 
                        name="email" 
                        type="email"
                        required
                    />
                    
                    <textarea 
                        className="p-3 rounded bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-brand-yellow focus:border-brand-yellow" 
                        rows="4" 
                        placeholder="Tell us about the project"
                        name="message"
                        required
                    ></textarea>
                    
                    <div className="text-right">
                        <button 
                            type="submit" 
                            className="px-6 py-2 bg-brand-yellow text-black font-semibold rounded shadow-lg hover:bg-yellow-500 transition duration-300"
                        >
                            Let’s Talk
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}