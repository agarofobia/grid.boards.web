// src/components/Contact.jsx - Componente de formulario de contacto con envío asíncrono (AJAX).

import React, { useState } from 'react';

// URL del endpoint de Formspree para recibir los datos del formulario.
const FORM_ENDPOINT = "https://formspree.io/f/mgvgyeab"; 

export default function Contact() {
    // Inicializa el estado para la retroalimentación al usuario (éxito, error, enviando).
    const [status, setStatus] = useState("");

    // Función asíncrona que maneja la lógica de envío de datos del formulario.
    const handleSubmit = async (e) => {
        // Previene el comportamiento predeterminado del formulario (evita la recarga y la redirección).
        e.preventDefault(); 
        
        // Establece el estado a "Enviando..."
        setStatus("Sending..."); 

        // Crea un objeto FormData a partir del formulario para capturar los campos.
        const data = new FormData(e.target);

        try {
            // Envía la solicitud POST al endpoint del servicio de formularios.
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Envío exitoso: Muestra mensaje de éxito y resetea los campos.
                setStatus("Message sent successfully! We'll be in touch soon.");
                e.target.reset(); 
            } else {
                // Manejo de errores de respuesta HTTP del servicio.
                setStatus("An error occurred. Please try again later.");
            }
        } catch (error) {
            // Manejo de errores de red o de la función fetch.
            console.error("Fetch error:", error);
            setStatus("Network error. Could not send the message.");
        }
    };

    return (
        // Contenedor de la sección de contacto con espaciado vertical.
        <section id="contact" className="py-20 px-6 md:px-20">
            
            {/* MARCO PRINCIPAL: Contenedor centrado con fondo semitransparente y borde sutil. */}
            <div className="max-w-3xl mx-auto p-8 border border-gray-800 rounded-xl shadow-2xl bg-black/60">

                <h2 className="text-2xl font-bold mb-4 text-center">Let’s craft your next board together.</h2>
                <p className="text-center text-gray-400 mb-6">Reach out and let’s talk.</p>

                {/* Formulario que usa la función handleSubmit para el envío asíncrono. */}
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                    
                    {/* Campo de input: Nombre. */}
                    <input 
                        className="p-3 rounded bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-brand-yellow focus:border-brand-yellow" 
                        placeholder="Name" 
                        name="name" 
                        required
                    />
                    
                    {/* Campo de input: Correo electrónico. */}
                    <input 
                        className="p-3 rounded bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-brand-yellow focus:border-brand-yellow" 
                        placeholder="Email" 
                        name="email" 
                        type="email"
                        required
                    />
                    
                    {/* Área de texto: Mensaje del proyecto. */}
                    <textarea 
                        className="p-3 rounded bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-brand-yellow focus:border-brand-yellow" 
                        rows="4" 
                        placeholder="Tell us about the project"
                        name="message"
                        required
                    ></textarea>
                    
                    {/* Contenedor del botón de envío y mensaje de estado. */}
                    <div className="text-right flex justify-end items-center gap-4">
                        
                        {/* Muestra el mensaje de estado (éxito, enviando, error) con estilos dinámicos. */}
                        {/* CAMBIO CLAVE: Solo mostramos "Sending..." o el mensaje de éxito/error. */}
                        {status && (
                            <p className={`text-sm font-semibold transition-opacity duration-300 ${status.includes('success') ? 'text-green-400' : status.includes('Sending') ? 'text-brand-yellow' : 'text-red-400'}`}>
                                {status}
                            </p>
                        )}

                        <button 
                            type="submit" 
                            // Deshabilita el botón mientras el envío está en curso.
                            disabled={status === "Sending..."} 
                            className={`px-6 py-2 text-black font-semibold rounded shadow-lg transition duration-300 
                                ${status === "Sending..." 
                                    // Aplica estilo gris/deshabilitado cuando se está enviando
                                    ? 'bg-gray-500 cursor-not-allowed' 
                                    // Aplica estilo normal cuando no se está enviando
                                    : 'bg-brand-yellow hover:bg-yellow-500'
                                }
                            `}
                        >
                            {/* CAMBIO CLAVE: El texto del botón siempre es "Let’s Talk" */}
                            Let’s Talk
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}