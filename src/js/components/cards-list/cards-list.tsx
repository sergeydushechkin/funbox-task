import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Item} from "../../types";
import {changeArrayItem} from "../../utils/utils";

import {ActionCreator} from "../../reducer/reducer";
import {getSelectedGoods} from "../../reducer/selectors";
import Card from "../card/card";

interface Props {
  goods: Array<Item>;
}

const CardsList:React.FunctionComponent<Props> = (props: Props) => {
  const {goods} = props;
  const dispatch = useDispatch();
  const selectedGoods = useSelector(getSelectedGoods);

  const handleCardClick = React.useCallback((evt: React.MouseEvent, item: Item):void => {
    evt.preventDefault();
    dispatch(ActionCreator.changeSelectedGoods(changeArrayItem(selectedGoods, item)));
  }, [dispatch, selectedGoods]);

  return (
    <ul className="cards__list">
      {
        goods.map((item) => {
          return (
            <li key={item.id} className="cards__item">
              <Card
                item={item}
                isActive={selectedGoods.findIndex((it) => it.id === item.id) !== -1}
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
