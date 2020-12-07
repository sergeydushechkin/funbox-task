import * as React from "react";
import * as renderer from "react-test-renderer";

import {GoodsContext} from "../../goods-context";
import Cards from "./cards";
import {goods} from "../../mock";

it(`Render Cards component`, () => {
  const cardsElement = renderer
    .create(
        <GoodsContext.Provider value={goods}>
          <Cards title={`Ты сегодня покормил кота?`}/>
        </GoodsContext.Provider>
    )
    .toJSON();

  expect(cardsElement).toMatchSnapshot();
});
