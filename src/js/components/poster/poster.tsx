import * as React from "react";

import {Item} from "../../types";

interface Props {
  item: Item;
  isActive: boolean;
  onClick: (evt: React.MouseEvent, item: Item) => void;
}

const Poster:React.FunctionComponent<Props> = (props: Props) => {
  const {item, isActive, onClick} = props;
  const {title, weight, amount, consist} = item;
  const [isFirstSelect, setIsFirstSelect] = React.useState(false);
  const posterRef = React.useRef(null);

  let posterStateClass = ``;

  if (amount) {
    if (isActive) {
      posterStateClass = isFirstSelect ? ` poster--selected-first` : ` poster--selected`;
    } else {
      posterStateClass = ` poster--unselected`;
    }
  } else {
    posterStateClass = ` poster--disabled`;
  }

  const handlePointerLeave = ():void => {
    setIsFirstSelect(false);
    posterRef.current.blur();
  };

  const handlePosterClick = (evt):void => {
    if (!isActive) {
      setIsFirstSelect(true);
    }
    onClick(evt, item);
  };

  return (
    <div ref={posterRef} onPointerLeave={isFirstSelect ? handlePointerLeave : null} onClick={amount ? handlePosterClick : null} className={`card__poster poster${posterStateClass}`} tabIndex={amount ? 1 : -1}>
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
  );
};

export default Poster;
