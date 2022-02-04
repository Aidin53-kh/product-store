export enum ActionTypes {
	SET_PRODUCT = 'SET_PRODUCT',
	GET_PRODUCT = 'GET_PRODUCT',
}

export interface Product {
	price: string;
	title: string;
	city: string;
	province: string;
	group: string;
	categorie: string;
	details: string;
    createdAt?: string|undefined;
	_id?: string|undefined;
	user?: string|undefined;
}

interface SetProduct {
	type: ActionTypes.SET_PRODUCT;
	payload: Product;
}

interface GetProduct {
	type: ActionTypes.GET_PRODUCT;
	payload: Product;
}

export type Action = SetProduct | GetProduct;
