import "core-js/features/array/virtual/find-index";
import * as React from "react";
import * as ReactDOM from "react-dom";

import {goods} from "./mock";
import {GoodsContext} from "./goods-context";

import App from "./components/app/app";

ReactDOM.render(
    <GoodsContext.Provider value={goods}>
      <App />
    </GoodsContext.Provider>,
    document.querySelector(`#root`)
);
