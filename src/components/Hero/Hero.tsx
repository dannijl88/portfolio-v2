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
          Soy desarrollador frontend con formación en Desarrollo de Aplicaciones Web. Me apasiona crear aplicaciones rápidas, accesibles y mantenibles, combinando diseño, rendimiento y código limpio para ofrecer la mejor experiencia de usuario.
        </p>
        <div className="hero__actions">
          <button className="hero__button hero__button--primary" type="button" onClick={handleProjectsClick}>
            ver proyectos
          </button>
          <a className="hero__button hero__button--secondary" href="/src/assets/CV_Daniel_Juan_Lician_linkedin.pdf" target="_blank" download>
            descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
