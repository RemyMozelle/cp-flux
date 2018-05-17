import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import FastCommandDispatcher from "./FastCommandDispatcher";
import FastCommandActionTypes from "./FastCommandActionTypes";

class FastCommandStore extends ReduceStore {
  constructor() {
    super(FastCommandDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case FastCommandActionTypes.GET_RESTAURANTS:
        if (!action) {
          return state;
        }
        return action.restaurants;
      default:
        return state;
    }
  }
}

export default new FastCommandStore();
