import React from "react";
import { useSelector } from "react-redux";

import Product from "../../../components/product";
import { IProduct } from "../../../store/product/types";
import { State } from "../../../store";

export interface SimilarProductProps {
    product: IProduct;
    open: boolean;
}

const SimilarProduct: React.FC<SimilarProductProps> = ({ product, open }) => {
    const similarPorducts = useSelector<State, IProduct[]>((state) => {
        return state.products.filter(
            (p) => p.categorie === product.categorie && p.province === product.province && p._id !== product._id
        );
    });

    return (
        <section className={`similar-products overflow-hidden ${!open && "close"}`}>
            {similarPorducts.length >= 1 ? (
                <div className="overflow-x-auto flex gap-5 pb-12">
                    {similarPorducts.map((product) => (
                        <Product key={product._id} className="w-56" data={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl samim-bold base-text-700 my-12">هیچ آگهی مشابهی نیست</h2>
                </div>
            )}
        </section>
    );
};

export default SimilarProduct;
