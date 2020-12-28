import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Poster from "./Poster";

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

it(`Test Poster component items clicks and return value`, () => {
  const onUserClick = jest.fn();

  const PosterWrap = shallow(
      <Poster
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

  const poster = PosterWrap.find(`.poster`);

  poster.simulate(`click`, {
    preventDefault: () => { /* noop */ }
  });

  expect(onUserClick).toHaveBeenCalledTimes(1);
});

it(`Test Poster component with zero amount items clicks and not return value`, () => {
  const onUserClick = jest.fn();

  const PosterWrap = shallow(
      <Poster
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

  const poster = PosterWrap.find(`.poster`);

  poster.simulate(`click`, {
    preventDefault: () => { /* noop */ }
  });

  expect(onUserClick).toHaveBeenCalledTimes(0);
});
