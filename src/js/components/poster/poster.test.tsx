import * as React from "react";
import * as renderer from "react-test-renderer";

import Poster from "./poster";
import {goods} from "../../mock";

it(`Render Poster component`, () => {
  const posterElement = renderer
    .create(
        <Poster
          item={goods[0]}
          isActive={false}
          onClick={() => { /* noop */ }}
        />
    )
    .toJSON();

  expect(posterElement).toMatchSnapshot();
});
