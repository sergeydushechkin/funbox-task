import * as React from "react";
import * as renderer from "react-test-renderer";

import App from "./app";

it(`Render App component`, () => {
  const appElement = renderer
    .create(
        <App />
    )
    .toJSON();

  expect(appElement).toMatchSnapshot();
});
