import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon, Tooltip } from "@material-ui/core";
import Swal from "sweetalert2";

import { State } from "../../store";
import { IProduct } from "../../store/product/types";
import ProductsGroup from "../../components/product/ProductGroup";
import Product from "../../components/product";

const Favorites = () => {
    const savedIds: string[] = JSON.parse(localStorage.getItem("saved-items")) || [];

    const [render, reRender] = useState(!0);
    const favoriteProducts = useSelector<State, IProduct[]>(({ products }) => {
        return products.filter((product) => savedIds.includes(product._id));
    });

    const clearFavorites = async () => {
        const { isConfirmed } = await Swal.fire({
            title: "خذف آگهی های پسندیده",
            text: "تمام آگهی ها خذف شود ؟",
            icon: "warning",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        });
        if (isConfirmed) {
            localStorage.removeItem("saved-items");
            reRender(!render);
        }
    };

    return (
        <div className="_container">
            <div className="py-7 rtl px-3">
                <div className="flex items-center justify-between my-6">
                    <h1 className="text-2xl samim-bold base-text-800">آگهی های پسندیده</h1>
                    {favoriteProducts.length >= 1 && (
                        <Tooltip
                            placement="top"
                            title={<span className="block samim-bold text-xs p-1">خذف آگهی های پسندیده</span>}
                        >
                            <Icon onClick={clearFavorites} className="base-text-800">
                                delete
                            </Icon>
                        </Tooltip>
                    )}
                </div>
                {favoriteProducts.length >= 1 ? (
                    <ProductsGroup>
                        {favoriteProducts.map((product) => (
                            <Product key={product._id} data={product} reRenderFn={reRender} reRenderVal={render} />
                        ))}
                    </ProductsGroup>
                ) : (
                    <div className="text-center my-12 px-4">
                        <Icon className="text-9xl text-yellow-400">star</Icon>
                        <p className="base-text-800 leading-8 text-sm xl:text-base samim-bold mt-3">
                            با کلیک بر روی ایکون
                            <Icon className="align-middle mx-1 base-text-700">bookmark</Icon>
                            در قسمت جزعیات آگهی آنها را اینجا ذخیره کنید
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favorites;
