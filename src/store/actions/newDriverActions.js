import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const newDriverStart = () => {
  return {
    type: actionTypes.REQUEST_NEW_DRIVER_START,
  };
};

export const newDriverSuccess = (driver) => {
  return {
    type: actionTypes.REQUEST_NEW_DRIVER_SUCCESS,
    driver,
  };
};

export const newDriverFailed = (error) => {
  return {
    type: actionTypes.REQUEST_NEW_DRIVER_FAILED,
    error,
  };
};

export const initNewDriver = (driver) => {
  return (dispatch) => {
    dispatch(newDriverStart());
    const dirverData = driver;
    axios
      .post("/driver", dirverData)
      .then((res) => dispatch(newDriverSuccess(res)))
      .catch((err) => dispatch(newDriverFailed(err)));
  };
};
