import { Dispatch } from "redux";
import { GetState } from "..";
import { Product } from "../product/types";
import { addProduct, deleteProduct, getProducts, editProduct } from "../../services/productService";
import { successMessage, errorMessage } from "../../utils/messages";
import { Action, ActionTypes } from "./types";

type Data = {
    message: string;
}

export const getAllProducts = () => async (dispatch: Dispatch<Action>) => {
    try {
        const { data } = await getProducts();
        dispatch({ type: ActionTypes.INIT, payload: data.products });
    } catch ({ data }) {
        errorMessage((data as Data).message);
    }
};

export const handleAddProduct = (product: Product) => {
    return async (dispatch: Dispatch<Action>, getState: GetState) => {
        try {
            const { data, status } = await addProduct(product);
            if (status === 201) {
                successMessage(data.message);
                dispatch({ type: ActionTypes.ADD_PRODUCT, payload: [...getState().products, data.product] });
            }
        } catch ({ data }) {
            errorMessage((data as Data).message);
        }
    };
};

export const handleDeleteProduct = (productId: string) => {
    return async (dispatch: Dispatch<Action>, getState: GetState) => {
        const products = [...getState().products];
        try {
            const { data, status } = await deleteProduct(productId);
            if (status === 200) {
                const newProdutsList = products.filter((product) => product._id !== productId);
                successMessage(data.message);
                dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: newProdutsList });
            }
        } catch ({ data }) {
            errorMessage((data as Data).message);
        }
    };
};

export const handleEditProduct = (product: Product, productId: string) => {
    return async (dispatch: Dispatch<Action>, getState: GetState) => {
        const products = [...getState().products];
        try {
            const { data, status } = await editProduct(product, productId);
            if (status === 200) {
                const productIndex = products.findIndex((product) => product._id === productId);
                products[productIndex] = product;
                successMessage(data.message);
                dispatch({ type: ActionTypes.UPDATE_PRODUCT, payload: products });
            }
        } catch ({ data }) {
            errorMessage((data as Data).message);
        }
    };
};
