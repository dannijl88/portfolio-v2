import { useTranslation } from 'react-i18next';
import './LanguageSwitch.css';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.slice(0, 2); // 'es' o 'en'

  const toggleLanguage = () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button 
      onClick={toggleLanguage} 
      className="lang-switch-container"
      aria-label={`Cambiar idioma. Actual: ${currentLang.toUpperCase()}`}
    >
      {/* Esta es la capsula blanca que se desliza por detrás */}
      <span className={`lang-switch-slider ${currentLang}`} />
      
      {/* Las etiquetas de texto por encima del slider */}
      <span className={`lang-switch-text ${currentLang === 'es' ? 'active' : ''}`}>
        ES
      </span>
      <span className={`lang-switch-text ${currentLang === 'en' ? 'active' : ''}`}>
        EN
      </span>
    </button>
  );
}