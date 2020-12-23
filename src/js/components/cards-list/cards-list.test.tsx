import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import CardsList from "./cards-list";
import {goods} from "../../mock";

const mockStore = configureStore([]);

const initialState = {
  goods,
  selectedGoods: [goods[1]],
};

it(`Render CardsList component`, () => {
  const store = mockStore(initialState);
  const cardsListElement = renderer
    .create(
        <Provider store={store}>
          <CardsList goods={goods} />
        </Provider>
    )
    .toJSON();

  expect(cardsListElement).toMatchSnapshot();
});
