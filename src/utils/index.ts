import decode from "jwt-decode";
import _ from "lodash";

import { FilterQueryStrings } from "../pages/archive/types";
import { Product } from "../store/product/types";
import { User } from "../store/user/types";

export const isFavorite = (id: string) => {
    return (JSON.parse(localStorage.getItem("saved-items") || "[]") as string[]).includes(id);
};

export const setFavorite = (id: string) => {
    const savedProducts: string[] = JSON.parse(localStorage.getItem("saved-items") || "[]");

    if (isFavorite(id)) savedProducts.splice(savedProducts.indexOf(id), 1);
    else savedProducts.push(id);

    localStorage.setItem("saved-items", JSON.stringify(savedProducts));
};

export const formatPrice = (price: number) => new Intl.NumberFormat("fa-IR").format(price);

export const paginate = (products: Product[], perPage: number, currentPage: number) => {
    return _(products)
        .drop((currentPage - 1) * perPage)
        .take(perPage)
        .value();
};

export const sortProducts = (products: Product[], sortType: string) => {
    if (sortType === "price-desc") return _.orderBy(products, (p) => +p.price, ["desc"]);
    else if (sortType === "price-asc") return _.orderBy(products, (p) => +p.price, ["asc"]);
    else return _.orderBy(products, (p) => new Date(p.createdAt), ["desc"]);
};

export const filterProducts = (products: Product[], filters: FilterQueryStrings) => {
    return products.filter((product) => {
        if (filters.onlyWithPrice.toString() === "true" && product.price === "0") return false;
        return (+product.price <= (filters.endPrice || Infinity)) && 
               (+product.price >= (filters.startPrice || 0)) && 
               (product.title.toLowerCase().includes(filters.search.toString().trim().toLowerCase()))
    });
};

export const decodeToken = (token: string): { user: User } => decode(token);
