import { Dispatch } from "redux";
import { Action, ActionTypes, User } from "./types";

export const addUser = (user: User) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SET_USER, payload: user });
}

export const clearUser = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.CLEAR_USER, payload: {} });
}