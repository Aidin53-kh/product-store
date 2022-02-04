import { Product } from "../product/types";

export enum ActionTypes {
	ADD_PRODUCT = 'ADD_PRODUCT',
	DELETE_PRODUCT = 'DELETE_PRODUCT',
	UPDATE_PRODUCT = 'UPDATE_PRODUCT',
	INIT = 'INIT',
}

interface AddProduct {
	type: ActionTypes.ADD_PRODUCT;
	payload: Product[];
}

interface DeleteProduct {
	type: ActionTypes.DELETE_PRODUCT;
	payload: Product[];
}

interface UpdateProduct {
	type: ActionTypes.UPDATE_PRODUCT;
	payload: Product[];
}

interface Initialize {
	type: ActionTypes.INIT;
	payload: Product[];
}

export type Action = AddProduct | DeleteProduct | UpdateProduct | Initialize;
