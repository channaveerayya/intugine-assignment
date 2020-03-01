import * as ACTION_TYPES from "./actionTypes";
import axios from "../../axios-interceptor";


export const deliveries = (name,email) => {
  return dispatch => {
    axios
      .post(name, { email: email })
      .then(res => {
        dispatch(deliveriesSuccess(res.data.data));
      })
      .catch(error => {
        dispatch(deliveriesFail(error));
      });
  };
};

export const deliveriesSuccess = (deliveriesData) => {
  return {
    type: ACTION_TYPES.DELIVERIES_SUCCESS,
    deliveriesData:deliveriesData
  };
};

export const deliveriesFail = (error) => {
  return {
    type: ACTION_TYPES.DELIVERIES_FAIL,
    error: error
  };
};