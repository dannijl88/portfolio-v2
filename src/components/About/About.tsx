import { skills } from "../../data/profile";
import "./About.css";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <section className="about section" id="sobre-mi" aria-labelledby="about-title">
      <div className="about__inner section__inner">
        <div className="about__content">
          <p className="section__eyebrow">{t('about.title')}</p>
          <h2 className="section__title" id="about-title">
            {t('about.subtitle')}
          </h2>
          <p className="section__text">
            {t('about.description')}
          </p>
          <p className="about__meta">{t('about.meta')}</p>
        </div>
        <div className="about__skills" aria-label="Habilidades">
          {skills.map((skill) => (
            <span className="about__skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
