import { projects } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import "./Projects.css";
import { useTranslation } from "react-i18next";

function ProjectLinkIcon({ type }: { type: "demo" | "code" }) {
  if (type === "code") {
    return (
      <svg className="projects__link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.2-.9-1.2-.7-.5 0-.5 0-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.7 7.7 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.6.8.6 1.6v2.3c0 .2.1.5.6.4A8.5 8.5 0 0 0 12 3.5Z" />
      </svg>
    );
  }

  return (
    <svg className="projects__link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const {t} = useTranslation();
  const cardClassName = project.featured
    ? "projects__card projects__card--featured"
    : "projects__card";

  return (
    <article className={cardClassName}>
      <header className="projects__card-header">
        <h3 className="projects__card-title">{project.name}</h3>
        <div className="projects__links">
          <a className="projects__link" href={project.demo} target="_blank" rel="noreferrer">
            demo
            <ProjectLinkIcon type="demo" />
          </a>
          <a className="projects__link" href={project.code} target="_blank" rel="noreferrer">
            {t('projects.code')}
            <ProjectLinkIcon type="code" />
          </a>
        </div>
      </header>
      <div className="projects__card-content">
        <p className="projects__card-description">{t(project.description)}</p>
      </div>
      <div className="projects__tags" aria-label={`Tecnologías de ${project.name}`}>
        {project.tags.map((tag) => (
          <span className="projects__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useTranslation();
  return (
    <section className="projects section" id="proyectos" aria-labelledby="projects-title">
      <div className="projects__inner section__inner">
        <div className="projects__header">
          <p className="section__eyebrow">{t('projects.title')}</p>
          <h2 className="section__title" id="projects-title">
            {t('projects.description')}
          </h2>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
