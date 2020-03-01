import * as ACTION_TYPES from "./actionTypes";
//import axios from "../../axios-interceptor";


export const login = (name,email) => {
    return {
        type: ACTION_TYPES.LOGIN,
        name,
        email
    };
};
