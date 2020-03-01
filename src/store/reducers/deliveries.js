import * as ACTION_TYPES from "../actions/actionTypes";
const initState = {
  deliveriesData: []
};

const deliveries = (state, action) => {
  return state
};
const deliveriesSuccess = (state, action) => {
  const updatedState = Object.assign({}, state, {
    deliveriesData: action.deliveriesData
  })
  return updatedState
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DELIVERIES_SUCCESS:
      return deliveriesSuccess(state, action);
    case ACTION_TYPES.DELIVERIES:
      return deliveries(state, action);
    default:
      return state;
  }
};

export default reducer;
