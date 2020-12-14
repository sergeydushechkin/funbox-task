import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Card from "./card";

configure({
  adapter: new Adapter(),
});

const testItem = {
  id: 0,
  title: `с фуа-гра`,
  description: `Печень утки разварная с артишоками.`,
  weight: `0,5`,
  amount: 11,
  consist: [
    {
      name: `порций`,
      value: 10
    },
    {
      name: `мышь в подарок`,
      value: null
    },
  ]
};

const testZeroItem = {
  id: 2,
  title: `с курой`,
  description: `Филе из цыплят с трюфелями в бульоне.`,
  weight: `5`,
  amount: 0,
  consist: [
    {
      name: `порций`,
      value: 100
    },
    {
      name: `мышей в подарок`,
      value: 5
    },
    {
      name: `заказчик доволен`,
      value: null
    },
  ]
};

it(`Test Card component items clicks and return value`, () => {
  const onUserClick = jest.fn();

  const CardWrap = shallow(
      <Card
        item={testItem}
        isActive={false}
        onClick={onUserClick}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  );

  const poster = CardWrap.find(`.card__poster`);

  poster.simulate(`click`, {
    preventDefault: () => { /* noop */ }
  });

  expect(onUserClick).toHaveBeenCalledTimes(1);
});

it(`Test Card component with zero amount items clicks and not return value`, () => {
  const onUserClick = jest.fn();

  const CardWrap = shallow(
      <Card
        item={testZeroItem}
        isActive={false}
        onClick={onUserClick}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  );

  const poster = CardWrap.find(`.card__poster`);

  poster.simulate(`click`, {
    preventDefault: () => { /* noop */ }
  });

  expect(onUserClick).toHaveBeenCalledTimes(0);
});
