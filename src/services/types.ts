import { AxiosResponse } from "axios";
import { Product } from "../store/product/types";

export interface GetProductsResponse extends AxiosResponse {
    data: {
        products: Product[];
    };
}

export interface GetProductResponse extends AxiosResponse {
    data: {
        product: Product;
        message: string;
    };
}

export interface AddProductResponse extends AxiosResponse {
    data: {
        product: Product;
        message: string;
    };
}

export interface DeleteProductResponse extends AxiosResponse {
    data: {
        message: string;
    };
}

export interface EditProductResponse extends AxiosResponse {
    data: {
        message: string;
    };
}