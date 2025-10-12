// src/components/Navbar.jsx - ¡Versión Simplificada!

import React from 'react';

export default function Navbar() {
    return (
        // El contenedor principal sigue siendo fijo y se extiende por todo el ancho
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
                
                {/* Logo/Marca Centrada */}
                <a 
                    href="#hero" 
                    className="text-2xl font-extrabold text-white tracking-wider hover:text-brand-yellow transition"
                >
                    GRID.BOARDS
                </a>

                {/* Se eliminó el div de los enlaces de navegación */}
            </div>
        </nav>
    );
}