interface Consist {
  name: string;
  value: number;
}

interface Item {
  id: number;
  title: string;
  description: string;
  weight: string,
  amount: number,
  consist: Array<Consist>
}

export {Item};
