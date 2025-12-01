// src/components/Work.jsx - Componente de la sección de Portafolio (Grid).

import React, { useState, useEffect } from 'react'; 

// === DATA DE LOS PROYECTOS ===
const projectsData = [
    { type: "Pitch", brand: "Brand X", media: { type: 'image', url: '/assets/work/pitch_brand_x.jpg' } },
    { type: "Test", brand: "Product Y", media: { type: 'video', url: '/assets/work/test_product_y.mp4' } },
    { type: "Campaign", brand: "Agency Z", media: { type: 'image', url: '/assets/work/campaign_agency_z.jpg' } },
    { type: "Previs", brand: "Spot A", media: { type: 'video', url: '/assets/work/previs_spot_a.mp4' } },
    { type: "Experiment", brand: "Short B", media: { type: 'image', url: '/assets/work/experiment_short_b.jpg' } },
    { type: "Pilot", brand: "Series C", media: { type: 'video', url: '/assets/work/pilot_series_c.mp4' } },
];

// Componente para el VISOR DE MEDIOS dentro del Modal.
const ModalViewer = ({ media }) => {
    // Renderiza un reproductor de video si el tipo es 'video'.
    if (media.type === 'video') {
        return (
            <video 
                src={media.url} 
                controls 
                autoPlay 
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            >
                Tu navegador no soporta el video.
            </video>
        );
    }
    // Renderiza una imagen si el tipo es 'image'.
    return (
        <img 
            src={media.url} 
            alt={`Trabajo: ${media.brand}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        />
    );
};

// Componente para la Tarjeta de Proyecto en la grilla.
const WorkCard = ({ type, brand, onClick }) => (
    // Botón con estilos visuales y la función onClick para abrir el modal.
    <button 
        onClick={onClick}
        className="w-full h-full bg-black/60 rounded-xl overflow-hidden aspect-[16/9] flex items-end justify-start p-4 border border-gray-800 hover:border-brand-yellow transition duration-300 transform hover:scale-[1.02] text-left"
    >
        <div className="text-left">
            <p className="text-xs text-gray-500">[Type]</p>
            <h3 className="text-xl font-semibold text-white">
                {type} — {brand}
            </h3>
        </div>
    </button>
);


// === MODAL PRINCIPAL (LIGHTBOX) ===
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    
    // Hook para controlar el desbordamiento del body: oculta el scroll al abrir y lo restaura al cerrar.
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            // Función de limpieza para asegurar la restauración del scroll al desmontar.
            document.body.style.overflow = 'auto'; 
        };
    }, [project]); // Dependencia en 'project' para ejecutar al abrir/cerrar.

    return (
        // Overlay fijo (fixed inset-0) que maneja el cierre al hacer clic fuera del contenido.
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={onClose} 
        >
            <div 
                className="relative"
                onClick={(e) => e.stopPropagation()} // Detiene la propagación para que el clic no cierre el modal.
            >
                {/* Botón de cierre (X) posicionado arriba a la derecha. */}
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-3xl font-light opacity-80 hover:opacity-100 transition"
                    aria-label="Cerrar modal"
                >
                    &times; 
                </button>
                
                {/* Contenido multimedia dinámico. */}
                <ModalViewer media={project.media} />
                
                <div className="text-center mt-3 text-gray-400">
                    {project.type} — {project.brand}
                </div>
            </div>
        </div>
    );
};


export default function Work() {
    // Estado para gestionar el proyecto seleccionado para mostrar en el modal.
    const [activeProject, setActiveProject] = useState(null);

    // Efecto para asegurar que el scroll del body esté activo al cargar si el modal está cerrado.
    useEffect(() => {
        if (!activeProject) {
            document.body.style.overflow = 'auto';
        }
    }, [activeProject]);

    return (
        <section id="work" className="py-16 px-6 md:px-20 text-gray-100">
            
            <div className="max-w-7xl mx-auto"> 
                
                {/* Encabezado de la sección. */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-2">
                        Our work shows the cinematic craft behind every frame
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
                        We create storyboards, boardomatics and animatics that help agencies and productions win pitches and plan with precision.
                    </p>
                </div>

                {/* Grid de Portafolio. Muestra solo los 3 primeros proyectos usando slice(0, 3). */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.slice(0, 3).map((project, index) => (
                        <WorkCard 
                            key={index} 
                            type={project.type} 
                            brand={project.brand} 
                            onClick={() => setActiveProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Componente Modal que se renderiza solo si 'activeProject' tiene un valor. */}
            <ProjectModal 
                project={activeProject}
                onClose={() => setActiveProject(null)} // Función para cerrar el modal.
            />

        </section>
    );
}