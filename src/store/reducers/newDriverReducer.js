import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  error: false,
  loading: false,
  driver: null,
};

const newDriverStart = (state, action) => {
  return updateObject(state, { error: false, loading: true });
};

const newDriverSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loading: false,
    driver: action.driver,
  });
};

const newDriverFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const newDriverReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_NEW_DRIVER_START:
      return newDriverStart(state, action);
    case actionTypes.REQUEST_NEW_DRIVER_SUCCESS:
      return newDriverSuccess(state, action);
    case actionTypes.REQUEST_NEW_DRIVER_FAILED:
      return newDriverFailed(state, action);
    default:
      return state;
  }
};

export default newDriverReducer;
