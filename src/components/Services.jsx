// src/components/Services.jsx - ¡Versión FINAL y COMPLETA!

// === IMPORTACIONES ESENCIALES DE REACT ===
import React, { useState, useRef, useEffect } from 'react';

// === DATOS DE LOS SERVICIOS ===
const servicesData = [
    {
        id: 'storyboard',
        title: "Storyboard",
        intro: "A storyboard lays out the key shots of a script.",
        type: 'images',
        content: [
            '/assets/storyboard/frame_01.jpg',
            '/assets/storyboard/frame_02.jpg',
            '/assets/storyboard/frame_03.jpg',
        ],
        description: "It defines characters, locations, style and brand aesthetics, giving agencies and clients a clear sequence and visual language to align on before production.",
    },
    {
        id: 'boardomatic',
        title: "Boardomatic",
        intro: "A boardomatic takes the storyboard into sequence with voice-over, dialogue, music and sound effects.",
        type: 'video',
        content: '/assets/boardomatic.mp4', 
        description: "It allows agencies and clients to experience the script in real time, validating its duration, rhythm and the tone of the commercial.",
    },
    {
        id: 'animatic',
        title: "Animatic",
        intro: "An animatic builds on the boardomatic by adding internal movement to each shot.",
        type: 'video',
        content: '/assets/animatic.mp4', 
        description: "Characters and scenes gain motion, timing becomes precise and the spot takes shape as the closest version to the final execution before production.",
    },
];

export default function Services() {
    // Lógica de Estado (Hooks)
    const [activeTab, setActiveTab] = useState(servicesData[0].id);
    const [currentFrame, setCurrentFrame] = useState(0);
    const videoRef = useRef(null);
    const activeService = servicesData.find(s => s.id === activeTab);

    // Efecto para pausar y reiniciar el visor al cambiar de pestaña
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setCurrentFrame(0); 
    }, [activeTab]);

    const handleTabChange = (serviceId) => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setActiveTab(serviceId);
    };

    // Lógica de navegación de frames (Storyboard)
    const nextFrame = () => {
        if (activeService && activeService.type === 'images') {
            setCurrentFrame((prev) => (prev + 1) % activeService.content.length);
        }
    };
    
    const prevFrame = () => {
        if (activeService && activeService.type === 'images') {
            setCurrentFrame((prev) => 
                (prev - 1 + activeService.content.length) % activeService.content.length
            );
        }
    };

    // Renderiza el contenido dinámico (Imagen o Video)
    const renderDynamicContent = () => {
        if (!activeService) return <p className="text-gray-400">Seleccione un servicio para ver el contenido.</p>;

        switch (activeService.type) {
            case 'images':
                return (
                    <div className="relative h-full w-full flex flex-col items-center justify-center">
                        <img 
                            src={activeService.content[currentFrame]} 
                            alt={`Storyboard Frame ${currentFrame + 1}`}
                            className="w-full h-auto object-contain rounded-lg shadow-2xl"
                        />
                        <div className="absolute inset-0 flex justify-between items-center px-4">
                            <button onClick={prevFrame} className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20" aria-label="Anterior frame">&lsaquo;</button>
                            <button onClick={nextFrame} className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20" aria-label="Siguiente frame">&rsaquo;</button>
                        </div>
                    </div>
                );
            case 'video':
                return (
                    <video 
                        key={activeService.id}
                        ref={videoRef}
                        src={activeService.content}
                        controls
                        className="w-full h-auto rounded-xl" 
                        onPause={() => console.log(`${activeService.title} pausado.`)}
                    >
                        Tu navegador no soporta el video {activeService.title}.
                    </video>
                );
            default:
                return <p className="text-gray-400">Seleccione un servicio para ver el contenido.</p>;
        }
    };


    // === RENDERIZADO PRINCIPAL (Ancho de Borde a Borde) ===
    return (
        // Sección: Quitamos el padding horizontal (px-0) para que el marco se extienda
        <section id="services" className="py-12 px-0 text-gray-100"> 
            
            {/* ENCABEZADO: Mantenemos el max-w-3xl mx-auto y padding horizontal para que el texto no toque el borde */}
            <div className="text-center max-w-3xl mx-auto px-6 md:px-12 mb-12 pb-6">
                <h2 className="text-2xl font-bold text-white mb-2">What we deliver</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Boards give agencies and productions the clarity to sell ideas, to test scripts in a way that feels closer to the real spot, and to plan productions with precision in timing, budgets and logistics.
                </p>
            </div>

            {/* CONTENEDOR EXTERIOR (EL MARCO): Ocupa todo el ancho disponible y controla el padding interno. */}
            <div className="mx-auto px-6 md:px-12 py-4 border border-gray-800 shadow-xl rounded-xl bg-gray-900/50 max-w-none"> 
                
                {/* Contenedor de las dos columnas (GRID con ajuste de espacio) */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start lg:items-center"> 
                    
                    {/* COLUMNA IZQUIERDA: Navegación (lg:col-span-4) */}
                    <div className="lg:col-span-4 space-y-2 mb-4 lg:mb-0">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => handleTabChange(service.id)}
                                className={`
                                    w-full text-left p-3 rounded-xl transition duration-300
                                    ${activeTab === service.id 
                                        ? 'bg-gradient-to-r from-gray-700 to-gray-800 border-l-4 border-brand-yellow text-white shadow-xl'
                                        : 'bg-gray-800/80 border border-gray-700 hover:bg-gray-700/80 text-gray-400'
                                    }
                                `}
                            >
                                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                                {/* text-base para una legibilidad estándar */}
                                <p className="text-base opacity-90 mt-1"> 
                                    {service.description}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* COLUMNA DERECHA: Visor Dinámico (lg:col-span-8) */}
                    <div className="lg:col-span-8 p-0">
                        {/* VISOR INTERNO: min-h reducido a 300px y padding a p-3 */}
                        <div className="bg-gray-800/80 border border-gray-700 p-3 rounded-xl min-h-[300px] flex items-center justify-center shadow-inner">
                            {renderDynamicContent()}
                        </div>
                        
                        {activeService && activeService.type === 'images' && (
                            <div className="text-center mt-3 text-gray-500">
                                Frame {currentFrame + 1} de {activeService.content.length}. Haz clic en las flechas para pasar los frames.
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
