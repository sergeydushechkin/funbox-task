import {Item} from "./types";

const changeArrayItem = (items: Array<Item>, item: Item):Array<Item> => {
  const index = items.findIndex((it) => it.id === item.id);
  if (index === -1) {
    return [].concat(items, item);
  } else {
    return [].concat(items.slice(0, index), items.slice(index + 1, items.length));
  }
};

export {changeArrayItem};
