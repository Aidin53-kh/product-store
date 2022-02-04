import { Action, ActionTypes, Product } from './types';

export const productReducer = (product: Product|{} = {}, action: Action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCT:
			return { ...action.payload };
		case ActionTypes.GET_PRODUCT:
			return { ...action.payload };
        default:
            return product;
	}
};
