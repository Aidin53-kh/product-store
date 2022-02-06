import { filtersReducer } from './filters/reducer';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer";
import { productsReducer } from "./products/reducer";
import { userReducer } from "./user/reducer";
import { getAllProducts } from "./products/actions";

const reducers = combineReducers({
    user: userReducer,
    product: productReducer,
    products: productsReducer,
    filters: filtersReducer,
});

export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.dispatch<any>(getAllProducts());

export type State = ReturnType<typeof store.getState>;
export type GetState = () => State;

interface Recaptcha {
    getResponse(opt_widget_id?: string): string;
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
        grecaptcha: Recaptcha;
    }
}