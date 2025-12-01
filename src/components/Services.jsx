// src/components/Services.jsx - Componente de la sección "What we deliver" (Servicios).

import React, { useState, useRef, useEffect } from 'react';

// Definición de la data estática para los diferentes servicios ofrecidos.
const servicesData = [
    {
        id: 'storyboard',
        title: "Storyboard",
        intro: "A storyboard lays out the key shots of a script.",
        type: 'images',
        content: [
            '/assets/AirPods Spec Storyboard.jpeg', 
            // Placeholder para más imágenes de storyboard
        ],
        description: "It defines characters, locations, style and brand aesthetics, giving agencies and clients a clear sequence and visual language to align on before production.",
    },
    {
        id: 'boardomatic',
        title: "Boardomatic",
        intro: "A boardomatic takes the storyboard into sequence with voice-over, dialogue, music and sound effects.",
        type: 'video',
        content: '/assets/Airpods Spec Boardomatic.mp4', 
        description: "It allows agencies and clients to experience the script in real time, validating its duration, rhythm and the tone of the commercial.",
    },
    {
        id: 'animatic',
        title: "Animatic",
        intro: "An animatic builds on the boardomatic by adding internal movement to each shot.",
        type: 'video',
        content: '/assets/Airpods Spec Animatic.mp4', 
        description: "Characters and scenes gain motion, timing becomes precise and the spot takes shape as the closest version to the final execution before production.",
    },
];

export default function Services() {
    // Estado para controlar la pestaña de servicio activa. Inicializa con el primer servicio.
    const [activeTab, setActiveTab] = useState(servicesData[0].id);
    // Estado para controlar el índice de la imagen actual (solo para Storyboard/Images).
    const [currentFrame, setCurrentFrame] = useState(0);
    // Referencia para interactuar con el elemento <video> (pausar/reiniciar).
    const videoRef = useRef(null);
    // Determina el objeto de servicio activo basado en el estado 'activeTab'.
    const activeService = servicesData.find(s => s.id === activeTab);

    // Efecto que se ejecuta al cambiar de pestaña: pausa el video si existe y resetea el frame a 0.
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setCurrentFrame(0);
    }, [activeTab]);

    // Manejador para cambiar la pestaña activa, pausando cualquier video en reproducción.
    const handleTabChange = (serviceId) => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setActiveTab(serviceId);
    };

    // Lógica para avanzar al siguiente frame del storyboard (solo si el tipo es 'images').
    const nextFrame = () => {
        if (activeService && activeService.type === 'images') {
            setCurrentFrame((prev) => (prev + 1) % activeService.content.length);
        }
    };

    // Lógica para retroceder al frame anterior del storyboard (solo si el tipo es 'images').
    const prevFrame = () => {
        if (activeService && activeService.type === 'images') {
            setCurrentFrame((prev) =>
                (prev - 1 + activeService.content.length) % activeService.content.length
            );
        }
    };

    // Función que renderiza el contenido multimedia dinámico (Imagen con carrusel o Video con controles).
    const renderDynamicContent = () => {
        if (!activeService) return <p className="text-gray-400">Seleccione un servicio para ver el contenido.</p>;

        switch (activeService.type) {
            case 'images':
                // Renderizado del carrusel de imágenes para Storyboard.
                if (!activeService.content || activeService.content.length === 0) {
                    return <p className="text-gray-400">No hay imágenes para mostrar.</p>;
                }
                return (
                    <div className="relative h-full w-full flex flex-col items-center justify-center">
                        <img
                            src={activeService.content[currentFrame]}
                            alt={`Storyboard Frame ${currentFrame + 1}`}
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                        />
                        {/* Controles de navegación de frames (solo si hay más de 1 imagen). */}
                        {activeService.content.length > 1 && (
                            <div className="absolute inset-0 flex justify-between items-center px-4">
                                <button onClick={prevFrame} className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20" aria-label="Anterior frame">&lsaquo;</button>
                                <button onClick={nextFrame} className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20" aria-label="Siguiente frame">&rsaquo;</button>
                            </div>
                        )}
                    </div>
                );
            case 'video':
                // Renderizado del video para Boardomatic/Animatic.
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


    // === RENDERIZADO PRINCIPAL ===
    return (
        <section id="services" className="py-12 px-0 text-gray-100">

            {/* ENCABEZADO: Título y descripción de la sección. */}
            <div className="text-center max-w-3xl mx-auto px-6 mb-12 pb-6">
                <h2 className="text-2xl font-bold text-white mb-2">What we deliver</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Boards give agencies and productions the clarity to sell ideas, to test scripts in a way that feels closer to the real spot, and to plan productions with precision in timing, budgets and logistics.
                </p>
            </div>

            {/* CONTENEDOR PRINCIPAL: Estructura del visor de servicios con estilos visuales. */}
            <div className="mx-auto max-w-4xl px-6 py-4 bg-black/70 border border-gray-800 rounded-xl shadow-xl">

                {/* 1. Botones de Navegación (Tabs): Permite al usuario cambiar entre servicios. */}
                <div className="flex justify-center space-x-4 border-b border-gray-700 pb-3 mb-3 overflow-x-auto">
                    {servicesData.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => handleTabChange(service.id)}
                            className={`
                                py-2 px-6 rounded-full font-semibold text-lg transition duration-300 flex-shrink-0
                                border border-white
                                ${activeTab === service.id
                                    ? 'bg-brand-yellow text-black border-brand-yellow shadow-lg'
                                    : 'bg-transparent text-white hover:border-gray-400'
                                }
                            `}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* 2. Bloque de Descripción Dinámica: Muestra la descripción del servicio activo. */}
                <div className="text-center p-2 mb-4 max-w-3xl mx-auto">
                    <p className="text-gray-400 text-base">
                        {activeService.description}
                    </p>
                </div>

                {/* 3. Visor de Producto Dinámico: Contiene el reproductor de video o el carrusel de imágenes. */}
                <div className="p-0">
                    <div className="border border-gray-700 p-2 rounded-xl min-h-[300px] flex items-center justify-center">
                        {renderDynamicContent()}
                    </div>

                    {/* Indicador de frame actual (solo para Storyboard/Images). */}
                    {activeService && activeService.type === 'images' && activeService.content.length > 0 && (
                        <div className="text-center mt-3 text-gray-500">
                            Frame {currentFrame + 1} de {activeService.content.length}.
                            {activeService.content.length > 1 && " Haz clic en las flechas para pasar los frames."}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}