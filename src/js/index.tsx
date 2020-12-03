import * as React from "react";
import * as ReactDOM from "react-dom";

import {goods} from "./mock";

import App from "./components/app/app";

const GoodsContext = React.createContext(null);

ReactDOM.render(
    <GoodsContext.Provider value={goods}>
      <App />
    </GoodsContext.Provider>,
    document.querySelector(`#root`)
);
