import {Item} from "../types";
import {goods} from "../mock";

interface Action {
  type: string;
  payload: string | number;
}

interface State {
  goods: Array<Item>;
}

const initialState = {
  goods: [],
};

const ActionType = {
  LOAD_GOODS: `LOAD_GOODS`,
const ActionCreator = {
  loadGoods: (data: Array<Item>):Action => ({
    type: ActionType.LOAD_GOODS,
    payload: data,
  }),
};

const reducer = (state = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.LOAD_GOODS:
      return Object.assign({}, state, {goods: action.payload});
      break;
  }

  return state;
};

export {reducer, ActionCreator, State};
