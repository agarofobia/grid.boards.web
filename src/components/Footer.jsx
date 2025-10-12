// src/components/Footer.jsx - ¡Versión Final Profesional!

import React from 'react';

export default function Footer() {
    return (
        // Fondo negro total y padding vertical
        <footer className="bg-black py-8 px-6 md:px-20 text-gray-400 text-sm">
            
            {/* Contenedor principal: Distribuye el contenido a los extremos */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Créditos y Copyright (Lado Izquierdo) */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    &copy; {new Date().getFullYear()} GridBoards — Crafted by artists at the speed of pitch.
                </div>

                {/* Enlaces Rápidos (Lado Derecho) */}
                <div className="space-x-4">
                    <a href="#about" className="hover:text-brand-yellow transition">About</a>
                    <a href="#services" className="hover:text-brand-yellow transition">Services</a>
                    <a href="#work" className="hover:text-brand-yellow transition">Work</a>
                    <a href="/privacy" className="hover:text-brand-yellow transition">Privacy</a>
                    <span className="text-gray-600">·</span>
                    <a href="/terms" className="hover:text-brand-yellow transition">Terms</a>
                </div>
            </div>
        </footer>
    );
}