import {Item} from "../types";
import {goods} from "../mock";

interface State {
  goods: Array<Item>;
}

const initialState = {
  goods,
};

const ActionType = {
  LOAD_GOODS: `LOAD_GOODS`,
};

const reducer = (state = initialState, action: string):State => {
  switch (action.type) {
    case ActionType.LOAD_GOODS:
      return state;
  }

  return state;
};

export {reducer};
