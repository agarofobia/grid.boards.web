// src/components/Navbar.jsx - Componente de la barra de navegación fija.

import React from 'react';

export default function Navbar() {
    return (
        // Contenedor principal: Fijo en la parte superior, ancho completo, alto z-index, fondo semitransparente con efecto blur.
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
                
                {/* Elemento del Logo/Marca centrado y navegable hacia la sección 'hero'. */}
                <a 
                    href="#hero" 
                    className="text-2xl font-extrabold text-white tracking-wider hover:text-brand-yellow transition"
                >
                    GRID.BOARDS
                </a>

                {/* Nota: Los enlaces de navegación fueron eliminados para mantener un diseño centrado y minimalista. */}
            </div>
        </nav>
    );
}