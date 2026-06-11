import "./Hero.css";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const handleProjectsClick = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero__inner section__inner">
        <div className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          {t('hero.status')}
        </div>
        <h1 className="hero__title" id="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero__description">
          {t('hero.description')}
        </p>
        <div className="hero__actions">
          <button className="hero__button hero__button--primary" type="button" onClick={handleProjectsClick}>
            {t('hero.actions.projects')}
          </button>
          <a className="hero__button hero__button--secondary" href="/src/assets/CV_Daniel_Juan_Lician_linkedin.pdf" target="_blank" download>
            {t('hero.actions.cv')}
          </a>
        </div>
      </div>
    </section>
  );
}
