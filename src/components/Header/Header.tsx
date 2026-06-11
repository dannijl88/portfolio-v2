import { Link } from "react-router-dom";
import { navItems } from "../../data/profile";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";
import "./Header.css";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  const handleNavClick = (target: string) => {
    const section = document.getElementById(target);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegación principal">
        <Link className="header__logo" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Daniel Juan
        </Link>
        <div className="header__links">
          {navItems.map((item) => (
            <button
              className="header__link"
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
            >
              {t(item.label)}
            </button>
          ))}
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
