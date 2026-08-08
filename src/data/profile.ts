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
  JetbrainsOriginal,
  HibernateOriginal,
  JunitOriginal,
} from 'devicons-react'

export const navItems: NavItem[] = [
  { label: "nav.sobremi", target: "sobre-mi" },
  { label: "nav.proyectos", target: "proyectos" },
  { label: "nav.stack", target: "stack" },
  { label: "nav.contacto", target: "contacto" },
];

export const skills: string[] = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "JavaScript",
  "MySQL",
  "CSS BEM",
  "vite",
  "React Router",
  "Git",
  "REST API",
  "Hibernate",
  "Spring Security",
  "JWT",
  "Junit",
  "Mockito"
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
      { name: "MySQL", icon: "mysql" },
      { name: "Hibernate", icon: "hibernate" },
    ]
  },
  {
    category: "Testing",
    items: [
      { name: "Vitest", icon: "vitest" },
      { name: "Jest", icon: "jest" },
      { name: "Junit", icon: "junit" },
    ]
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", invert: true },
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
  jest: JetbrainsOriginal,
  hibernate: HibernateOriginal,
  junit: JunitOriginal
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
