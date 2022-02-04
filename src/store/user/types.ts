export enum ActionTypes {
    SET_USER = "SET_USER",
    CLEAR_USER = "CLEAR_USER",
    SET_FAVORITE = "SET_FAVORITE",
    SET_SHOPPING_CART = "SET_SHOPPING_CART",
}

export interface User {
    fullname?: string;
    email?: string;
    id?: string;
};

interface SetUser {
    type: ActionTypes.SET_USER;
    payload: User;
}

interface ClearUser {
    type: ActionTypes.CLEAR_USER;
    payload: User;
}

interface SetFavorite {
    type: ActionTypes.SET_FAVORITE;
    payload: User;
}

interface SetShoppingCart {
    type: ActionTypes.SET_SHOPPING_CART;
    payload: User;
}

export type Action = SetUser | ClearUser | SetFavorite | SetShoppingCart;
