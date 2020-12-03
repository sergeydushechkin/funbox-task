const goods = [
  {
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
  },
  {
    id: 1,
    title: `с рыбой`,
    description: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
    weight: `2`,
    amount: 7,
    consist: [
      {
        name: `порций`,
        value: 40
      },
      {
        name: `мыши в подарок`,
        value: 2
      },
    ]
  },
  {
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
  },
];

export {goods};
