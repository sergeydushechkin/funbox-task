import * as React from "react";
import * as renderer from "react-test-renderer";

import CardsList from "./cards-list";

it(`Render CardsList component`, () => {
  const cardsListElement = renderer
    .create(
        <CardsList />
    )
    .toJSON();

  expect(cardsListElement).toMatchSnapshot();
});
