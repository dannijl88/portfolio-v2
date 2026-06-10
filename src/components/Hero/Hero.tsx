import "./Hero.css";

export function Hero() {
  const handleProjectsClick = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero__inner section__inner">
        <div className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          disponible para trabajar
        </div>
        <h1 className="hero__title" id="hero-title">
          Frontend Developer Junior
        </h1>
        <p className="hero__description">
          Soy Daniel Juan Lician, desarrollador frontend en Crevillente, Alicante. Construyo interfaces limpias,
          accesibles y mantenibles con React, TypeScript y CSS bien estructurado.
        </p>
        <div className="hero__actions">
          <button className="hero__button hero__button--primary" type="button" onClick={handleProjectsClick}>
            ver proyectos
          </button>
          <a className="hero__button hero__button--secondary" href="/cv.pdf" download>
            descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
