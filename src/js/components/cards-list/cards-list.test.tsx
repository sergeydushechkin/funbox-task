import * as React from "react";
import * as renderer from "react-test-renderer";

import CardsList from "./cards-list";
import {goods} from "../../mock";

it(`Render CardsList component`, () => {
  const cardsListElement = renderer
    .create(
        <CardsList goods={goods} />
    )
    .toJSON();

  expect(cardsListElement).toMatchSnapshot();
});
