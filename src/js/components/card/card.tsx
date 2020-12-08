import * as React from "react";

import {Item} from "../../types";

import CardStatus from "../card-status/card-status";

interface Props {
  item: Item;
  isActive: boolean;
}

const Card = (props: Props):React.ReactElement => {
  const {item, isActive} = props;
  const {title, weight, description, amount, consist} = item;

  let cardStateClass = ``;
  let posterStateClass = ``;
  if (amount) {
    posterStateClass = isActive ? ` poster--selected` : ` poster--unselected`;
    cardStateClass = isActive ? ` card--selected` : ``;
  } else {
    posterStateClass = ` poster--disabled`;
    cardStateClass = ` card--disabled`;
  }

  return (
    <article className={`cards_card card${cardStateClass}`}>
      <div className={`card__poster poster${posterStateClass}`} tabIndex={amount ? 1 : -1}>
        <div className="poster__content">
          <p className="poster__text">
            <span className="poster__phrase1">Сказочное заморское яство</span>
            <span className="poster__phrase2">Котэ не одобряет?</span>
          </p>
          <h2 className="poster__title">
            Нямушка
          </h2>
          <p className="poster__taste">{title}</p>
          <ul className="poster__consist consist">
            {
              consist.map((it) => {
                return (
                  <li key={it.name} className="consist__item">
                    {it.value ? <><b>{it.value}</b>{` ${it.name}`}</> : it.name}
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="poster__weight weight">
          <span className="weight__value">{weight}</span>
          <span className="weight__measure">кг</span>
        </div>
      </div>
      <CardStatus
        isAvailable={!!amount}
        title={title}
        description={description}
        isActive={false}
        onClick={() => { /* noop*/ }}
      />
    </article>
  );
};

export default Card;
