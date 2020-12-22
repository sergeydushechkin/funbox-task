import {Item} from "../types";

interface Action {
  type: string;
  payload: string | number | Array<Item>;
}

interface State {
  goods: Array<Item>;
  selectedGoods: Array<Item>,
}

const initialState = {
  goods: [],
  selectedGoods: [],
};

const ActionType = {
  LOAD_GOODS: `LOAD_GOODS`,
  CHANGE_SELECTED_GOODS: `CHANGE_SELECTED_GOODS`,
};

const ActionCreator = {
  loadGoods: (data: Array<Item>):Action => ({
    type: ActionType.LOAD_GOODS,
    payload: data,
  }),
  changeSelectedGoods: (data: Array<Item>):Action => ({
    type: ActionType.CHANGE_SELECTED_GOODS,
    payload: data,
  }),
};

const reducer = (state = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.LOAD_GOODS:
      return Object.assign({}, state, {goods: action.payload});
      break;
    case ActionType.CHANGE_SELECTED_GOODS:
      return Object.assign({}, state, {selectedGoods: action.payload});
      break;
  }

  return state;
};

export {reducer, ActionCreator, State};
