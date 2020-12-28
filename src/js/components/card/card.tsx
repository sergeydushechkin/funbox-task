import * as React from "react";

import {Item} from "../../types";

import CardStatus from "../card-status/card-status";
import Poster from "../poster/poster";

interface Props {
  item: Item;
  isActive: boolean;
  onClick: (evt: React.MouseEvent, item: Item) => void;
}

const Card = (props: Props):React.ReactElement => {
  const {item, isActive, onClick} = props;
  const {title, description, amount} = item;

  let cardStateClass = ``;

  if (amount) {
    if (isActive) {
      cardStateClass = ` card--selected`;
    }
  } else {
    cardStateClass = ` card--disabled`;
  }


  return (
    <article className={`cards_card card${cardStateClass}`}>
      <Poster
        isActive={isActive}
        item={item}
        onClick={onClick}
      />
      <CardStatus
        isAvailable={!!amount}
        title={title}
        description={description}
        isActive={isActive}
        onClick={(evt: React.MouseEvent) => onClick(evt, item)}
      />
    </article>
  );
};

export default Card;
