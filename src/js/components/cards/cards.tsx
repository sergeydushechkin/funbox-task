import * as React from "react";

import {GoodsContext} from "../../goods-context";
import CardsList from "../cards-list/cards-list";

interface Props {
  title: string
}

const Cards = (props: Props):React.ReactElement => {
  const {title} = props;
  const goods = React.useContext(GoodsContext);

  return (
    <section className="main-page__cards cards">
      <h1 className="cards__title title">{title}</h1>
      <CardsList goods={goods}/>
    </section>
  );
};

export default Cards;
