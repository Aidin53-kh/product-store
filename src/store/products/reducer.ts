import { Product } from '../product/types';
import { Action, ActionTypes } from './types';

export const productsReducer = (products: Product[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.INIT:
			return [...action.payload];
		case ActionTypes.ADD_PRODUCT:
			return [...action.payload];
		case ActionTypes.DELETE_PRODUCT:
			return [...action.payload];
		case ActionTypes.UPDATE_PRODUCT:
			return [...action.payload];
		default:
			return products;
	}
};
