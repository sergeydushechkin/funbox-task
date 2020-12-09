import * as React from "react";
import * as renderer from "react-test-renderer";

import Card from "./card";
import {goods} from "../../mock";

it(`Render Card component`, () => {
  const cardElement = renderer
    .create(
        <Card
          item={goods[0]}
          isActive={false}
          onClick={() => { /* noop */ }}
        />
    )
    .toJSON();

  expect(cardElement).toMatchSnapshot();
});
