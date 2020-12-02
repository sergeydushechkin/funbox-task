import * as React from "react";

import Cards from "../cards/cards"

const App = ():React.ReactElement => {
  return (
    <main className="main-page">
      <Cards
        title={`Ты сегодня покормил кота?`}
      />
    </main>
  );
};

export default App;
