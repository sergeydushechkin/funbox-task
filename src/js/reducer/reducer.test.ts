import {reducer, ActionType, ActionCreator} from "./reducer";
import {goods} from "../mock";

describe(`ActionCreator work correctly`, () => {
  it(`Check that ActionCreator loadGoods() return correct value`, () => {
    expect(ActionCreator.loadGoods(goods)).toEqual({
      type: ActionType.LOAD_GOODS,
      payload: goods,
    });
  });

  it(`Check that ActionCreator changeSelectedGoods() return correct value`, () => {
    expect(ActionCreator.changeSelectedGoods(goods)).toEqual({
      type: ActionType.CHANGE_SELECTED_GOODS,
      payload: goods,
    });
  });
});

describe(`Reducer work correctly`, () => {
  it(`Check that reducer return correct initial state`, () => {
    expect(reducer(void 0, {type: `123`, payload: 0})).toEqual({
      goods: [],
      selectedGoods: [],
    });
  });

  it(`Check that reducer with type ActionType.LOAD_GOODS return correct state`, () => {
    expect(reducer({
      goods: [],
      selectedGoods: [],
    }, {
      type: ActionType.LOAD_GOODS, payload: goods
    })).toEqual({
      goods,
      selectedGoods: [],
    });
  });

  it(`Check that reducer with type ActionType.CHANGE_SELECTED_GOODS return correct state`, () => {
    expect(reducer({
      goods: [],
      selectedGoods: [],
    }, {
      type: ActionType.CHANGE_SELECTED_GOODS, payload: goods
    })).toEqual({
      goods: [],
      selectedGoods: goods,
    });
  });
});

