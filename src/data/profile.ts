import type { ContactLink, NavItem } from "../types/portfolio";
import {
  ReactOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  VitejsOriginal,
  ReactOriginal as ReactRouterOriginal,
  JavaOriginal,
  SpringOriginal,
  MysqlOriginal,
  GitOriginal,
  GithubOriginal,
  DockerOriginal,
  VitestOriginal,
  TailwindcssOriginal,
  NodejsOriginal
} from 'devicons-react'

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

export const stack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Vite", icon: "vite" },
      { name: "React Router", icon: "reactrouter" },
      { name: "Tailwind", icon: "tailwind" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Node.js", icon: "node" },
      { name: "MySQL", icon: "mysql" },
    ]
  },
  {
    category: "Testing",
    items: [
      { name: "Vitest", icon: "vitest" },
      { name: "Testing Library", icon: "testinglibrary" },
    ]
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
    ]
  }
]

export const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  react: ReactOriginal,
  typescript: TypescriptOriginal,
  javascript: JavascriptOriginal,
  vite: VitejsOriginal,
  reactrouter: ReactRouterOriginal,
  java: JavaOriginal,
  spring: SpringOriginal,
  mysql: MysqlOriginal,
  git: GitOriginal,
  github: GithubOriginal,
  docker: DockerOriginal,
  vitest: VitestOriginal,
  tailwind: TailwindcssOriginal,
  node: NodejsOriginal
}

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
