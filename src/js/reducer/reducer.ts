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
  goods,
};

const ActionType = {
  LOAD_GOODS: `LOAD_GOODS`,
};

const reducer = (state = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.LOAD_GOODS:
      return state;
  }

  return state;
};

export {reducer, State};
