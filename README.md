# GridBoards — Starter (Vite + React + Tailwind)

Este es el esqueleto (scaffold) de la landing page de GridBoards, diseñado para ser rápido y moderno.

## 🛠️ Tecnologías Base

El proyecto está construido sobre una pila moderna de desarrollo web (MERN-stack sin base de datos):
* **Framework:** React (v18.2.0)
* **Build Tool:** Vite (v5.4.0)
* **Estilos:** Tailwind CSS (v3.4.14)
* **Post-Procesamiento CSS:** PostCSS (v8.4.41) y Autoprefixer (v10.4.20)

---

## 🚀 Inicio Rápido (Desarrollo Local)

Sigue estos pasos para levantar el servidor de desarrollo local:

1.  Asegúrate de tener **Node.js** instalado (versión recomendada v18 o más reciente).
2.  Abre la carpeta del proyecto en tu editor de código (VS Code recomendado).
3.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```
4.  Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5.  Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## ✨ Características y Configuración Específica

### 1. Formulario de Contacto Asíncrono

El formulario ahora utiliza una integración sin servidor (Serverless) para enviar los datos sin recargar la página.

* **Ubicación del Código:** `src/components/Contact.jsx`
* **Servicio de Terceros:** Formspree (usando el endpoint configurado en el código).
* **Implementación:** Se utiliza la API nativa `fetch` de JavaScript dentro de la función `handleSubmit` para realizar un envío asíncrono (AJAX). Esto previene la redirección y permite mostrar un mensaje de éxito/error (`status`) directamente en el componente.
* **Configuración:** La URL del endpoint de Formspree está definida en la constante `FORM_ENDPOINT` dentro de `src/components/Contact.jsx`.

### 2. Sección de Portafolio (`/work`)

El componente del portafolio ha sido modificado para un diseño más compacto.

* **Ubicación del Código:** `src/components/Work.jsx`
* **Implementación:** La lista completa de proyectos (`projectsData`) es truncada usando el método `.slice(0, 3)` para mostrar únicamente los **primeros 3 elementos** en la grilla.

### 3. Estilos de Marca

* **Archivos de Configuración:** `tailwind.config.cjs` y `src/styles/index.css`
* **Personalización de Colores:** Los colores de la marca (`brand-yellow` y `brand-dark`) están definidos en la sección `theme.extend.colors.brand` de `tailwind.config.cjs`. Se pueden modificar para cambiar el esquema de color primario de la aplicación.

---

## 🌎 Despliegue (Deployment)

El proyecto está listo para ser desplegado como una aplicación web estática.

* **Comando de Producción:** Usa el script `npm run build` para generar la carpeta de producción optimizada (`dist`).
* **Servicios Recomendados:** Se puede conectar el repositorio de Git a servicios como **Vercel** o **Netlify** para un despliegue continuo y automático.