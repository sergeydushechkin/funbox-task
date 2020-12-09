import * as React from "react";
import {Item} from "../../types";
import {changeArrayItem} from "../../utils";
import Card from "../card/card";

interface Props {
  goods: Array<Item>;
}

const CardsList = (props: Props):React.ReactElement => {
  const {goods} = props;
  const [activeCards, setActiveCards] = React.useState([goods[1]]);

  const handleCardClick = React.useCallback((evt: React.MouseEvent, item: Item) => {
    evt.preventDefault();
    setActiveCards(changeArrayItem(activeCards, item));
  }, [activeCards]);

  return (
    <ul className="cards__list">
      {
        goods.map((item) => {
          return (
            <li key={item.id} className="cards__item">
              <Card
                item={item}
                isActive={activeCards.findIndex((it) => it.id === item.id) !== -1}
                onClick={handleCardClick}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default CardsList;
