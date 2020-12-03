import * as React from "react";

const Card = ():React.ReactElement => {
  return (
    <article className="cards_card card">
      <div className="card__poster poster poster--unselected" tabIndex={1}>
        <div className="poster__content">
          <p className="poster__text">
            <span className="poster__phrase1">Сказочное заморское яство</span>
            <span className="poster__phrase2">Котэ не одобряет?</span>
          </p>
          <h2 className="poster__title">
            Нямушка
          </h2>
          <p className="poster__taste">с фуа-гра</p>
          <ul className="poster__consist consist">
            <li className="consist__item"><b>10</b> порций</li>
            <li className="consist__item">мышь в подарок</li>
          </ul>
        </div>
        <div className="poster__weight weight">
          <span className="weight__value">0,5</span>
          <span className="weight__measure">кг</span>
        </div>
      </div>
      <p className="card__status">Чего сидишь? Порадуй котэ, <a className="card__link" href="">купи.</a></p>
    </article>
  );
};

export default Card;
