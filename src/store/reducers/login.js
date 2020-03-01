import * as ACTION_TYPES from "../actions/actionTypes";
const initState = {
    name: null,
    email: null
};

const login = (state, action) => {
    const updatedState = Object.assign({}, state, {
        name: action.name,
        email: action.email
    })
    return updatedState
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return login(state, action);
        default:
            return state;
    }
};

export default reducer;
