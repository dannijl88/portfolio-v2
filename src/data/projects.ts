import type { Project } from "../types/portfolio";


export const projects: Project[] = [
  {
    name: "DevRecipes",
    description:
      "projects.devrecipes.description",
    tags: ["React", "TypeScript", "Spring Boot", "JWT", "MySQL"],
    demo: "https://recetas-app-4phf.vercel.app",
    code: "https://github.com/dannijl88/recetas-app",
    featured: true,
  },
  {
    name: "TaskFlow",
    description:
      "projects.taskflow.description",
    tags: ["React", "TypeScript", "Context API", "Vitest"],
    demo: "https://task-flow-sooty-pi.vercel.app",
    code: "https://github.com/dannijl88/TaskFlow",
    featured: false,
  },
  {
    name: "SpaceExplorer",
    description:
      "projects.spaceexplorer.description",
    tags: ["React", "TypeScript", "NASA API", "BEM"],
    demo: "https://space-explorer-livid.vercel.app",
    code: "https://github.com/dannijl88/space-explorer",
    featured: false,
  },
  {
    name: "DevMovies",
    description:
      "projects.devmovies.description",
    tags: ["React", "Spring Boot", "TypeScript", "APIRest", "BEM"],
    demo: "https://github.com/dannijl88/movies-app",
    code: "https://github.com/dannijl88/movies-app",
    featured: false,
  },
  {
    name: "App Clima",
    description:
      "projects.appclima.description",
    tags: ["React", "TypeScript", "Tailwind", "APIRest"],
    demo: "https://apptiempo.danijuan.com/",
    code: "https://github.com/dannijl88/app-clima-react",
    featured: false,
  },
  {
    name: "Medicina Tradicional China",
    description:
      "projects.medicinachina.description",
    tags: ["React", "Tailwind", "HTML", "CSS"],
    demo: "https://medicina-china.vercel.app/",
    code: "https://github.com/dannijl88/medicina-china-react",
    featured: false,
  },
];
