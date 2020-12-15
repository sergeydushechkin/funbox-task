import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import CardStatus from "./card-status";

configure({
  adapter: new Adapter()
});

it(`Test CardStatus component link click`, () => {
  const handleUserClick = jest.fn();

  const CardStatusWrap = shallow(
      <CardStatus
        isAvailable={true}
        isActive={false}
        description={`test`}
        title={`с фуа-гра`}
        onClick={handleUserClick}
      />
  );

  const cardLink = CardStatusWrap.find(`.card__link`);
  cardLink.simulate(`click`);

  expect(handleUserClick).toBeCalled();
});
