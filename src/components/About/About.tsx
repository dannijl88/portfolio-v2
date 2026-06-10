import { skills } from "../../data/profile";
import "./About.css";

export function About() {
  return (
    <section className="about section" id="sobre-mi" aria-labelledby="about-title">
      <div className="about__inner section__inner">
        <div className="about__content">
          <p className="section__eyebrow">sobre mí</p>
          <h2 className="section__title" id="about-title">
            Desarrollo interfaces simples para productos digitales.
          </h2>
          <p className="section__text">
            Me centro en crear experiencias claras, rápidas y fáciles de mantener. Trabajo con React y TypeScript,
            cuidando la estructura del código, la accesibilidad y una capa visual precisa con CSS puro.
          </p>
          <p className="about__meta">Crevillente, Alicante, España · danijuan.com</p>
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
