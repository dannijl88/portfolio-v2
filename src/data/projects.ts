import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    name: "DevRecipes",
    description:
      "Plataforma completa de gestión de recetas donde los usuarios pueden registrarse, iniciar sesión, publicar sus propias recetas y explorar las de otros. Todo con autenticación segura mediante JWT para que cada usuario solo pueda editar y eliminar sus propias recetas.",
    tags: ["React", "TypeScript", "Spring Boot", "JWT", "MySQL"],
    demo: "https://recetas-app-4phf.vercel.app",
    code: "https://github.com/dannijl88/recetas-app",
    featured: true,
  },
  {
    name: "TaskFlow",
    description:
      "Aplicación de gestión de tareas desarrollada con React y TypeScript. Incluye autenticación simulada con rutas protegidas, CRUD completo con edición inline, estado global mediante Context API y hooks personalizados, filtrado de tareas por estado y tests con Vitest y React Testing Library.",
    tags: ["React", "TypeScript", "Context API", "Vitest"],
    demo: "https://task-flow-sooty-pi.vercel.app",
    code: "https://github.com/dannijl88/TaskFlow",
    featured: false,
  },
  {
    name: "SpaceExplorer",
    description:
      "App de exploración espacial que consume APIs reales de la NASA. Muestra la imagen astronómica del día, fotos del satélite DSCOVR, asteroides cercanos a la Tierra y una galería de imágenes históricas con buscador.",
    tags: ["React", "TypeScript", "NASA API", "BEM"],
    demo: "https://space-explorer-livid.vercel.app",
    code: "https://github.com/dannijl88/space-explorer",
    featured: false,
  },
  {
    name: "DevMovies",
    description:
      "Plataforma de películas que consume la API de TMDB para mostrar información actualizada en tiempo real. El backend actúa como intermediario entre el frontend y la API externa, exponiendo sus propios endpoints REST.",
    tags: ["React", "Spring Boot", "TypeScript", "APIRest", "BEM"],
    demo: "https://github.com/dannijl88/movies-app",
    code: "https://github.com/dannijl88/movies-app",
    featured: false,
  },
  {
    name: "App Clima",
    description:
      "Aplicación web interactiva que muestra información meteorológica en tiempo real. Creada con React, Tailwind y TypeScript para practicar componentes reutilizables y diseño responsive.",
    tags: ["React", "TypeScript", "Tailwind", "APIRest"],
    demo: "https://apptiempo.danijuan.com/",
    code: "https://github.com/dannijl88/app-clima-react",
    featured: false,
  },
  {
    name: "Calculadora JS",
    description:
      "Calculadora interactiva desarrollada en JavaScript que permite realizar operaciones básicas con resultados inmediatos. Incluye manejo de eventos y actualización dinámica de la pantalla.",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "https://calculadora.danijuan.com/",
    code: "https://github.com/dannijl88/Calculadora-JavaScript",
    featured: false,
  },
  {
    name: "Tienda online PHP",
    description:
      "Tienda online realizada siguiendo un curso, implementando PHP y MySQL con el patrón MVC. Permite gestionar productos, usuarios y pedidos, y sirve para aprender la estructura y organización de proyectos en MVC.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "MVC"],
    demo: "https://github.com/dannijl88/Tienda-online-PHP",
    code: "https://github.com/dannijl88/Tienda-online-PHP",
    featured: false,
  },
  {
    name: "Medicina Tradicional China",
    description:
      "Versión desarrollada en React y Tailwind de un proyecto previamente hecho en WordPress. El objetivo fue trasladar la estructura a un entorno más flexible y moderno, mejorando rendimiento y personalización.",
    tags: ["React", "Tailwind", "HTML", "CSS"],
    demo: "https://medicina-china.vercel.app/",
    code: "https://github.com/dannijl88/medicina-china-react",
    featured: false,
  },
];
