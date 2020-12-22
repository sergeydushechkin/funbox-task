import {Item} from "../types";
import {State} from "./reducer";

const getGoods = (state: State):Array<Item> => {
  return state.goods;
};

const getSelectedGoods = (state: State):Array<Item> => {
  return state.selectedGoods;
};

export {getGoods, getSelectedGoods};
