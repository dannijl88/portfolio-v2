import { stack, iconMap } from "../../data/profile";
import "./Stack.css";

export function Stack() {
  return (
    <section className="stack section" id="stack" aria-labelledby="stack-title">
      <div className="stack__inner section__inner">
        <div>
          <p className="section__eyebrow">stack</p>
          <h2 className="section__title" id="stack-title">
            Herramientas con las que construyo.
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
                      {Icon && <Icon size={32} />}
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