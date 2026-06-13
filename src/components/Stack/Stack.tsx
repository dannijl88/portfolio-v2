import { stack, iconMap } from "../../data/profile";
import "./Stack.css";
import { useTranslation } from "react-i18next";

export function Stack() {
  const {t} = useTranslation();
  return (
    <section className="stack section" id="stack" aria-labelledby="stack-title">
      <div className="stack__inner section__inner">
        <div>
          <p className="section__eyebrow">stack</p>
          <h2 className="section__title" id="stack-title">
            {t('stack.description')}
          </h2>
        </div>
        <div className="stack__categories">
          {stack.map((category) => (
            <div className="stack__category" key={category.category}>
              <p className="stack__category-title">{category.category}</p>
              <ul className="stack__list">
                {category.items.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <li className="stack__item" key={item.name}>
                      <div style={item.invert ? { filter: 'brightness(0) invert(1)' } : {}}>
                        {Icon && <Icon size={32} />}
                      </div>
                      <span className="stack__item-name">{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}