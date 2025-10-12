// src/components/Process.jsx - ¡Versión Final y Estética del Navbar!

import React from 'react';

// Componente para cada paso individual
const Step = ({ index, title, children, isCentered = false }) => (
    // CAMBIOS CLAVE:
    // 1. Fondo semitransparente: bg-black/70 (El Navbar usa bg-black/90)
    // 2. Borde sutil: border-gray-800
    <div className={`
        flex items-start gap-4 p-4 rounded-xl shadow-lg border border-gray-800 
        ${isCentered ? 'bg-black/70 max-w-2xl mx-auto' : 'bg-black/70'} 
    `}>
        <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-black text-lg flex-shrink-0 bg-brand-yellow`}
        >
            {index}
        </div>
        <div>
            <h4 className="font-semibold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm opacity-90">{children}</p>
        </div>
    </div>
);

// Data del proceso completo
const processSteps = [
    { index: 1, title: 'Brief & Script', description: 'Brief us with your script and references, or schedule a quick call.' },
    { index: 2, title: 'First Visuals (24h)', description: 'Receive first visuals with characters and locations, so style and tone are approved before moving forward.' },
    { index: 3, title: 'Storyboard (48h)', description: 'Get the full storyboard with every shot completed, ready for your review and feedback.' },
    { index: 4, title: 'Boardomatic (72h)', description: 'See your storyboard in sequence with voice-over, dialogue, music and sound, bringing the script to life in real time.' },
    { index: 5, title: 'Animatic', description: 'Watch the boardomatic evolve into an animatic, adding motion and refined timing. The closest version to the final spot, delivered within 2 more days.' },
];

export default function Process() {
    const steps4 = processSteps.slice(0, 4);
    const step5 = processSteps[4];

    return (
        <section id="process" className="py-16 px-6 md:px-24 text-gray-100">
            
            <div className="max-w-none"> 
                
                {/* Encabezado: Centrado y con max-w-4xl para el texto */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
                        Fast without losing craft
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Our workflow is designed to move fast without losing craft. From first visuals to a full animatic, the entire process can be completed in about 5 working days.
                    </p>
                </div>

                {/* CONTENEDOR 1: GRID de los primeros 4 pasos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {steps4.map((step, index) => (
                        <Step 
                            key={index} 
                            index={step.index} 
                            title={step.title}
                        >
                            {step.description}
                        </Step>
                    ))}
                </div>

                {/* CONTENEDOR 2: Paso 5 Centrado */}
                <div className="mt-8">
                    <Step 
                        index={step5.index} 
                        title={step5.title}
                        isCentered={true} 
                    >
                        {step5.description}
                    </Step>
                </div>

                {/* Nota Final */}
                <p className="text-sm opacity-80 text-center mt-12 text-gray-500">
                    Note: Timelines are based on a 30-second script and may vary depending on length, complexity and feedback rounds.
                </p>

            </div>
        </section>
    );
}