import { Action, ActionTypes, User } from "./types";

export const userReducer = (user: User = {}, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return { ...action.payload };
        case ActionTypes.SET_FAVORITE:
            return { ...action.payload };
        case ActionTypes.SET_SHOPPING_CART:
            return { ...action.payload };
        case ActionTypes.CLEAR_USER:
            return {};
        default:
            return user;
    }
};
