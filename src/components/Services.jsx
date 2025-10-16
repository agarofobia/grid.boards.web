// src/components/Services.jsx - ¡Versión FINAL con todas las rutas correctas!

// === IMPORTACIONES ESENCIALES DE REACT ===
import React, { useState, useRef, useEffect } from 'react';

// === DATOS DE LOS SERVICIOS (CON TODAS LAS RUTAS CORREGIDAS) ===
const servicesData = [
    {
        id: 'storyboard',
        title: "Storyboard",
        intro: "A storyboard lays out the key shots of a script.",
        type: 'images',
        content: [
            '/assets/AirPods Spec Storyboard.jpeg', // <--- RUTA CORREGIDA
            // Puedes agregar más imágenes aquí si quieres, por ahora es una
        ],
        description: "It defines characters, locations, style and brand aesthetics, giving agencies and clients a clear sequence and visual language to align on before production.",
    },
    {
        id: 'boardomatic',
        title: "Boardomatic",
        intro: "A boardomatic takes the storyboard into sequence with voice-over, dialogue, music and sound effects.",
        type: 'video',
        content: '/assets/Airpods Spec Boardomatic.mp4', // <--- RUTA CORREGIDA
        description: "It allows agencies and clients to experience the script in real time, validating its duration, rhythm and the tone of the commercial.",
    },
    {
        id: 'animatic',
        title: "Animatic",
        intro: "An animatic builds on the boardomatic by adding internal movement to each shot.",
        type: 'video',
        content: '/assets/Airpods Spec Animatic.mp4', // <--- RUTA CORREGIDA
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
                // Manejo especial si no hay imágenes
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
                        {activeService.content.length > 1 && (
                            <div className="absolute inset-0 flex justify-between items-center px-4">
                                <button onClick={prevFrame} className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20" aria-label="Anterior frame">&lsaquo;</button>
                                <button onClick={nextFrame} className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20" aria-label="Siguiente frame">&rsaquo;</button>
                            </div>
                        )}
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


    // === RENDERIZADO PRINCIPAL (Estilo Navbar Aplicado) ===
    return (
        <section id="services" className="py-12 px-0 text-gray-100">

            {/* ENCABEZADO: Fuera del marco */}
            <div className="text-center max-w-3xl mx-auto px-6 mb-12 pb-6">
                <h2 className="text-2xl font-bold text-white mb-2">What we deliver</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Boards give agencies and productions the clarity to sell ideas, to test scripts in a way that feels closer to the real spot, and to plan productions with precision in timing, budgets and logistics.
                </p>
            </div>

            {/* CONTENEDOR EXTERIOR (EL MARCO) */}
            {/* ESTILO NAVBAR: Fondo semitransparente (bg-black/70) y borde suave (border-gray-800) */}
            <div className="mx-auto max-w-5xl px-6 py-4 bg-black/70 border border-gray-800 rounded-xl shadow-xl">

                {/* 1. Botones de Navegación (Centrado) */}
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

                {/* 2. Bloque de Descripción Dinámica (Flotante y Centrado) */}
                <div className="text-center p-2 mb-4 max-w-3xl mx-auto">
                    <p className="text-gray-400 text-base">
                        {activeService.description}
                    </p>
                </div>

                {/* 3. Visor de Producto Dinámico */}
                <div className="p-0">
                    <div className="border border-gray-700 p-2 rounded-xl min-h-[300px] flex items-center justify-center">
                        {renderDynamicContent()}
                    </div>

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