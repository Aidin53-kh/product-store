import React from "react";
import { useSelector } from "react-redux";

import Product from "../../../components/product";
import ProductsGroup from "../../../components/product/ProductGroup";
import { State } from "../../../store";
import { IProduct } from "../../../store/product/types";

interface MyProductsProps {}

const MyProducts: React.FC<MyProductsProps> = () => {
    const userId = useSelector<State, string>((state) => state.user.id);
    const userProducts = useSelector<State, IProduct[]>((state) => (
        state.products.filter((product) => product.user === userId)
    ));

    return (
        <div className="_container">
            <div className="py-7 rtl">
                <h1 className="text-3xl samim-bold base-text-800 my-6">اگهی های من</h1>
                {userProducts.length >= 1 ? (
                    <ProductsGroup>
                        {userProducts.map((product) => (
                            <Product key={product._id} data={product} isForUser />
                        ))}
                    </ProductsGroup>
                ) : (
                    <h1 className="text-xl text-center base-text-800 samim-bold my-6">شما هیچ اگهی ثبت نکرده اید</h1>
                )}
            </div>
        </div>
    );
};

export default MyProducts;
