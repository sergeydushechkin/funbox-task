import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app";

import {goods} from "../../mock";

const mockStore = configureStore([]);

const initialState = {
  goods,
  selectedGoods: [goods[1]],
};

it(`Render App component`, () => {
  const store = mockStore(initialState);
  const appElement = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(appElement).toMatchSnapshot();
});
