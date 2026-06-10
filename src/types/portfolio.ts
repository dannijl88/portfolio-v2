export interface NavItem {
  label: string;
  target: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  demo: string;
  code: string;
  featured: boolean;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "linkedin" | "github";
}
