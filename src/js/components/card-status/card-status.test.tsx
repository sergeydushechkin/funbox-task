import * as React from "react";
import * as renderer from "react-test-renderer";

import CardStatus from "./card-status";

it(`Render CardStatus component`, () => {
  const cardStatusElement = renderer
    .create(
        <CardStatus
          isAvailable={false}
          title={`с курой`}
          description={`Филе из цыплят с трюфелями в бульоне.`}
          isActive={false}
          onClick={() => { /* noop*/ }}
        />
    )
    .toJSON();

  expect(cardStatusElement).toMatchSnapshot();
});
