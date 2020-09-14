import { combineReducers } from "redux";
import newDriverReducer from "./newDriverReducer";

const initialState = {};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  main: mainReducer,
  newDriver: newDriverReducer,
});

export default rootReducer;
