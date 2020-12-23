import "core-js/features/array/virtual/find-index";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ActionCreator, reducer} from "./reducer/reducer";

import App from "./components/app/app";
import {goods} from "./mock";

const store = createStore(
    reducer,
    window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
);

store.dispatch(ActionCreator.loadGoods(goods));
store.dispatch(ActionCreator.changeSelectedGoods([goods[1]]));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
