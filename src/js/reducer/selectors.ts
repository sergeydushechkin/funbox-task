import {Item} from "../types";
import {State} from "./reducer";

const getGoods = (state:State):Array<Item> => {
  return state.goods;
};

export {getGoods};
