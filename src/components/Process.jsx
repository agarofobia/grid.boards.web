// src/components/Process.jsx - ¡Timeline Interactivo y Finalizado!

import React, { useState } from 'react';

// === DATA: Procesos anidados por Producto ===
// Usamos el proceso completo como base, y luego filtramos por pasos.
const fullProcessSteps = [
    {
        day: 'Day 0',
        title: 'Brief & Script',
        description: 'Brief us with your script and references, or schedule a quick call.',
        time: 'Inicia el Proceso',
        maxStep: 0
    },
    {
        day: 'Day 1',
        title: 'First Visuals (24h)',
        description: 'Receive first visuals with characters and locations, so style and tone are approved before moving forward.',
        time: '24 Horas',
        maxStep: 1
    },
    {
        day: 'Day 2',
        title: 'Storyboard (48h)',
        description: 'Get the full storyboard with every shot completed, ready for your review and feedback.',
        time: '48 Horas',
        maxStep: 2
    },
    {
        day: 'Day 3',
        title: 'Boardomatic (72h)',
        description: 'See your storyboard in sequence with voice-over, dialogue, music and sound, bringing the script to life in real time.',
        time: '72 Horas',
        maxStep: 3
    },
    {
        day: 'Day 5',
        title: 'Animatic',
        description: 'Watch the boardomatic evolve into an animatic, adding motion and refined timing. The closest version to the final spot, delivered within 2 more days.',
        time: 'Finalizado',
        maxStep: 4
    },
];

// Definimos los productos para el selector de pestañas
const products = [
    { id: 'storyboard', name: 'Storyboard', finalStepIndex: 2, desc: 'El proceso termina al obtener el storyboard (Día 2).' },
    { id: 'boardomatic', name: 'Boardomatic', finalStepIndex: 3, desc: 'El proceso termina al obtener el boardomatic (Día 3).' },
    { id: 'animatic', name: 'Animatic', finalStepIndex: 4, desc: 'El proceso completo, finaliza al obtener el animatic (Día 5).' },
];


export default function Process() {
    // Estado para saber qué producto/timeline estamos mostrando
    const [activeProduct, setActiveProduct] = useState(products[0].id);

    // Filtra los pasos según el producto activo
    const currentProduct = products.find(p => p.id === activeProduct);
    const visibleSteps = fullProcessSteps.slice(0, currentProduct.finalStepIndex + 1);


    return (
        <section id="process" className="py-16 px-6 md:px-20 bg-black text-gray-100">
            <div className="max-w-6xl mx-auto">
                
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
                        Fast without losing craft
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        From first visuals to a full animatic, the entire process can be completed in about 5 working days.
                    </p>
                </div>

                {/* === SELECTOR DE PRODUCTO (Tabs) === */}
                <div className="flex justify-center space-x-6 mb-12">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setActiveProduct(product.id)}
                            className={`
                                py-3 px-6 rounded-full font-semibold transition duration-300
                                ${activeProduct === product.id 
                                    ? 'bg-brand-yellow text-black shadow-lg' // Botón Activo
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700' // Botón Inactivo
                                }
                            `}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>

                {/* Contenedor del Timeline Vertical */}
                {/* Línea vertical: border-l-4 de color amarillo de marca */}
                <div className="relative border-l-4 border-brand-yellow ml-4 pl-8 md:ml-0 md:pl-12 max-w-xl mx-auto">
                    
                    {visibleSteps.map((step, index) => (
                        <div key={index} className="mb-10 relative">
                            
                            {/* Círculo de Etapa (Punto de anclaje) */}
                            <div className={`
                                absolute -left-14 top-0 w-8 h-8 rounded-full 
                                flex items-center justify-center font-bold text-sm z-10
                                // El círculo del último paso activo siempre usa el color de marca
                                ${index === visibleSteps.length - 1 ? 'bg-brand-yellow text-black' : 'bg-gray-700 text-white'}
                                md:-left-12
                            `}>
                                {index + 1}
                            </div>
                            
                            {/* Contenido del Paso (Tarjeta) */}
                            <div className="p-4 bg-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform border border-gray-700">
                                <span className="text-sm font-semibold text-brand-yellow uppercase block mb-1">
                                    {step.day} / {step.time}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Nota Final */}
                    <p className="mt-12 text-center text-sm text-gray-500">
                        Note: Timelines are based on a 30-second script and may vary depending on length, complexity and feedback rounds.
                    </p>

                </div>
            </div>
        </section>
    );
}
