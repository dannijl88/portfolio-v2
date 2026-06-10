import { stack } from "../../data/profile";
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
        <ul className="stack__list">
          {stack.map((item) => (
            <li className="stack__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
