import * as React from "react";
import * as renderer from "react-test-renderer";

import Cards from "./cards";

it(`Render CardsList component`, () => {
  const cardsElement = renderer
    .create(
        <Cards title={`Ты сегодня покормил кота?`}/>
    )
    .toJSON();

  expect(cardsElement).toMatchSnapshot();
});
