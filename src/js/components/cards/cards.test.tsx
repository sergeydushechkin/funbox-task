import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import Cards from "./cards";
import {goods} from "../../mock";

const mockStore = configureStore([]);

const initialState = {
  goods,
  selectedGoods: [goods[1]],
};

it(`Render Cards component`, () => {
  const store = mockStore(initialState);
  const cardsElement = renderer
    .create(
        <Provider store={store}>
          <Cards title={`Ты сегодня покормил кота?`}/>
        </Provider>
    )
    .toJSON();

  expect(cardsElement).toMatchSnapshot();
});
