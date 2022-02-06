import { Icon, Divider, IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

import { formatPrice, isFavorite, setFavorite } from "../../../utils";
import { getProduct } from "../../../services/productService";
import { State } from "../../../store";
import { ActionTypes, Product } from "../../../store/product/types";
import SideProductDetails from "./SideProductDetails";
import SimilarProduct from "./SimilarProducts";

const ProductDetails = () => {
    const history = useHistory();
    const match = useRouteMatch();

    const product = useSelector<State, Product>((state) => state.product as Product);
    const dispatch = useDispatch();

    const [render, reRender] = useState(false);
    const [openSimilarProductSection, setOpenSimilarProductSection] = useState(true);

    const productId = (match.params as { id: string }).id;

    const handleSetFavorite = () => {
        setFavorite(product._id);
        reRender(!render);
    };

    useEffect(() => {
        (async function () {
            try {
                const { data, status } = await getProduct(productId);
                if (status === 200) dispatch({ type: ActionTypes.GET_PRODUCT, payload: data.product });
            } catch {
                history.replace("/");
            }
        })();
    }, [productId]);

    return (
        <div className="xl:px-4 md:max-w-3xl xl:max-w-6xl 2xl:max-w-4xl 3xl:max-w-6xl mx-auto">
            <section className="product-details py-0 mx-auto md:py-3 xl:py-4 block xl:flex 2xl:block 3xl:flex gap-3">
                <SideProductDetails className="hidden xl:inline-block 2xl:hidden 3xl:inline-block" />

                <div className="content rtl">
                    <section className="product-image">
                        <img className="md:rounded-md" src="../images/product1.jpg" alt="product" />
                    </section>

                    <section className="product-body py-1 mx-3">
                        <section className="my-4">
                            <div className="flex items-center">
                                <h1 className="samim-bold flex-1 text-md base-text-900">{product.title}</h1>
                                <Icon onClick={handleSetFavorite} className="text-green-500">
                                    {isFavorite(product._id) ? "bookmark" : "bookmark_outline"}
                                </Icon>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="flex-1 base-text-900 samim-bold text-lg">
                                    {formatPrice(+product.price)}{" "}
                                    <span className="text-sm text-green-400">تومان</span>
                                </div>
                                <div className="text-gray-500 text-xs xl:text-sm samim-bold">لحظاتی پیش در تهران</div>
                            </div>
                        </section>
                        <Divider className="bg-gray-200 dark:bg-gray-700" />
                        <section className="product-attrebutes">
                            <div className="flex items-center text-sm samim-bold my-4">
                                <div className="flex-1 base-text-600">وضعیت کالا</div>
                                <div className="base-text-800">در حد نو</div>
                            </div>
                            <div className="flex items-center text-sm samim-bold mb-4">
                                <div className="flex-1 base-text-600">موقعیت</div>
                                <div className="base-text-800">
                                    {product.province} / {product.city}
                                </div>
                            </div>
                            <div className="flex items-center text-sm samim-bold mb-4">
                                <div className="flex-1 base-text-600">دسته بندی</div>
                                <div className="base-text-800">
                                    {product.categorie} / {product.group}
                                </div>
                            </div>
                        </section>
                        <Divider className="bg-gray-200 dark:bg-gray-700" />
                        <section className="product-description mb-12 base-text-900">
                            <h2 className="text-lg samim-bold my-4 dark:text-gray-200">توضحات</h2>
                            <div className="leading-8 text-sm">{product.details}</div>
                        </section>
                    </section>
                </div>
            </section>
            <SideProductDetails className="xl:hidden 2xl:block 3xl:hidden" />

            <Divider className="bg-gray-200 dark:bg-gray-700 mt-6 3xl:mt-0 mx-3" />
            <section className="similar-products-section rtl mx-3 overflow-hidden">
                <div className="flex items-center">
                    <h2 className="text-lg flex-1 samim-bold my-4 base-text-800">محصولات مشابه</h2>
                    <IconButton onClick={() => setOpenSimilarProductSection((o) => !o)}>
                        <Icon>{openSimilarProductSection ? "expand_less" : "expand_more"}</Icon>
                    </IconButton>
                </div>
                <SimilarProduct product={product} open={openSimilarProductSection} />
            </section>

            <Divider className="bg-gray-200 dark:bg-gray-700 mx-3" />
            <section className="rtl mx-3">
                <h2 className="text-lg flex-1 samim-bold my-4 base-text-800">نظرات کاربران</h2>
                <div className="text-center">
                    <h2 className="text-xl samim-bold base-text-700 mt-12 mb-20">هیچ نظری برای این آگهی ثبت نشده</h2>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
