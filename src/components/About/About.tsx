import { skills } from "../../data/profile";
import "./About.css";

export function About() {
  return (
    <section className="about section" id="sobre-mi" aria-labelledby="about-title">
      <div className="about__inner section__inner">
        <div className="about__content">
          <p className="section__eyebrow">sobre mí</p>
          <h2 className="section__title" id="about-title">
            Desarrollo interfaces modernas para productos digitales.
          </h2>
          <p className="section__text">
            Como desarrollador frontend, mi objetivo es convertir diseños en aplicaciones rápidas, escalables y accesibles. Trabajo con React, TypeScript y CSS, priorizando la calidad del código y una experiencia de usuario cuidada.
          </p>
          <p className="about__meta">Crevillente (Alicante) · Disponible para trabajo remoto, presencial e híbrido</p>
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
