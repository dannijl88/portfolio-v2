import type { ContactLink, NavItem } from "../types/portfolio";

export const navItems: NavItem[] = [
  { label: "sobre mí", target: "sobre-mi" },
  { label: "proyectos", target: "proyectos" },
  { label: "stack", target: "stack" },
  { label: "contacto", target: "contacto" },
];

export const skills: string[] = [
  "React",
  "TypeScript",
  "JavaScript",
  "CSS BEM",
  "Vite",
  "React Router",
  "Vitest",
  "REST APIs",
  "Git",
  "Spring Boot",
];

export const stack: string[] = [
  "React 19",
  "TypeScript",
  "Vite",
  "React Router DOM",
  "CSS Modules",
  "BEM",
  "Vitest",
  "GitHub",
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:dannijl88web@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/danieljuanlician",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/dannijl88",
    icon: "github",
  },
];
