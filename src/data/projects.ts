import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    name: "DevRecipes",
    description:
      "Aplicación fullstack de gestión de recetas con autenticación JWT, buscador en tiempo real y paginación.",
    tags: ["React", "TypeScript", "Spring Boot", "JWT", "MySQL"],
    demo: "https://recetas-app-4phf.vercel.app",
    code: "https://github.com/dannijl88/recetas-app",
    featured: true,
  },
  {
    name: "TaskFlow",
    description:
      "Gestor de tareas con Context API, rutas protegidas y tests unitarios con Vitest.",
    tags: ["React", "TypeScript", "Context API", "Vitest"],
    demo: "https://task-flow-sooty-pi.vercel.app",
    code: "https://github.com/dannijl88/TaskFlow",
    featured: false,
  },
  {
    name: "SpaceExplorer",
    description:
      "Explorador de APIs públicas de la NASA con custom hooks, tests unitarios y CSS BEM.",
    tags: ["React", "TypeScript", "NASA API", "BEM"],
    demo: "https://space-explorer-livid.vercel.app",
    code: "https://github.com/dannijl88/space-explorer",
    featured: false,
  },
];
