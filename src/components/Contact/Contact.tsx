import { contactLinks } from "../../data/profile";
import type { ContactLink } from "../../types/portfolio";
import "./Contact.css";

function ContactIcon({ icon }: { icon: ContactLink["icon"] }) {
  if (icon === "mail") {
    return (
      <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 10v8" />
        <path d="M6.5 6v.5" />
        <path d="M11 18v-8" />
        <path d="M11 13.5c0-2 1.2-3.5 3.2-3.5 1.9 0 3.3 1.2 3.3 3.7V18" />
      </svg>
    );
  }

  return (
    <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.2-.9-1.2-.7-.5 0-.5 0-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.7 7.7 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.6.8.6 1.6v2.3c0 .2.1.5.6.4A8.5 8.5 0 0 0 12 3.5Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section className="contact section" id="contacto" aria-labelledby="contact-title">
      <div className="contact__inner section__inner">
        <p className="section__eyebrow">contacto</p>
        <h2 className="contact__title section__title" id="contact-title">
          Hablemos de tu próximo proyecto.
        </h2>
        <p className="contact__text">
          Estoy abierto a oportunidades junior, prácticas y colaboraciones donde pueda aportar en frontend y seguir
          creciendo con un equipo.
        </p>
        <div className="contact__links">
          {contactLinks.map((link) => (
            <a className="contact__link" href={link.href} key={link.label} target="_blank" rel="noreferrer">
              <ContactIcon icon={link.icon} />
              <span className="contact__label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
