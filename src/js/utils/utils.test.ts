import {changeArrayItem} from "./utils";

const testGoods = [
  {
    id: 0,
    title: `с фуа-гра`,
    description: `Печень утки разварная с артишоками.`,
    weight: `0,5`,
    amount: 11,
    consist: [{name: `порций`, value: 10}, {name: `мышь в подарок`, value: null}]
  },
  {
    id: 1,
    title: `с рыбой`,
    description: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
    weight: `2`,
    amount: 7,
    consist: [{name: `порций`, value: 40}, {name: `мыши в подарок`, value: 2}]
  },
];

const good = {
  id: 2,
  title: `с курой`,
  description: `Филе из цыплят с трюфелями в бульоне.`,
  weight: `5`,
  amount: 0,
  consist: [{name: `порций`, value: 100},
    {name: `мышей в подарок`, value: 5},
    {name: `заказчик доволен`, value: null}
  ],
};

describe(`changeArrayItem() work correctly`, () => {
  it(`Check that changeArrayItem() remove item correct`, () => {
    expect(changeArrayItem(testGoods, testGoods[1]))
    .toEqual([testGoods[0]]);
  });

  it(`Check that changeArrayItem() add item correct`, () => {
    expect(changeArrayItem(testGoods, good))
    .toEqual([...testGoods, good]);
  });
});

