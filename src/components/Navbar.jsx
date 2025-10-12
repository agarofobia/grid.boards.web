// src/components/Navbar.jsx

import React from 'react';

export default function Navbar() {
    return (
        // Contenedor FIJO: z-50 para que esté encima de todo.
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo/Marca (Placeholder para tu logo) */}
                <a href="#hero" className="text-2xl font-extrabold text-white tracking-wider hover:text-brand-yellow transition">
                    GRID.BOARDS
                </a>

                {/* Enlaces de Navegación (Anchor Links) */}
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-gray-300 hover:text-brand-yellow transition">About</a>
                    <a href="#services" className="text-gray-300 hover:text-brand-yellow transition">Services</a>
                    <a href="#process" className="text-gray-300 hover:text-brand-yellow transition">Process</a>
                    <a href="#work" className="text-gray-300 hover:text-brand-yellow transition">Work</a>
                    <a href="#contact" className="text-brand-yellow font-semibold hover:text-white transition">Contact</a>
                </div>
            </div>
        </nav>
    );
}