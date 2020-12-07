import * as React from "react";
import * as renderer from "react-test-renderer";

import {GoodsContext} from "../../goods-context";
import App from "./app";

import {goods} from "../../mock";

it(`Render App component`, () => {
  const appElement = renderer
    .create(
        <GoodsContext.Provider value={goods}>
          <App />
        </GoodsContext.Provider>
    )
    .toJSON();

  expect(appElement).toMatchSnapshot();
});
