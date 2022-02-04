import http from './httpService';
import config from './config.json';
import { Product } from '../store/product/types';
import {
	AddProductResponse,
	DeleteProductResponse,
	EditProductResponse,
	GetProductResponse,
	GetProductsResponse,
} from './types';

export const getProducts = (): Promise<GetProductsResponse> => {
	return http.get(`${config.baseUrl}/products`);
};

export const getProduct = (productId: string): Promise<GetProductResponse> => {
	return http.get(`${config.baseUrl}/products/${productId}`);
};

export const addProduct = (product: Product): Promise<AddProductResponse> => {
	return http.post(`${config.baseUrl}/dashboard/add-product`, product);
};

export const deleteProduct = (productId: string): Promise<DeleteProductResponse> => {
	return http.delete(`${config.baseUrl}/dashboard/delete-product/${productId}`);
};

export const editProduct = (product: Product, productId: string): Promise<EditProductResponse> => {
	return http.put(`${config.baseUrl}/dashboard/edit-product/${productId}`, product);
};
