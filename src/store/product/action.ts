import { Dispatch } from 'redux';
import { Action, ActionTypes, Product } from './types';

export const setActiveProduct = (product: Product) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SET_PRODUCT, payload: product });
}

export const getSingleProduct = (product: Product) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.GET_PRODUCT, payload: product });
};