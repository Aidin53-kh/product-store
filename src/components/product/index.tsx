import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Tooltip } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import { isEmpty } from "lodash";

import { formatPrice, isFavorite, setFavorite } from "../../utils";
import { handleDeleteProduct } from "../../store/products/actions";
import { redAlert, yellowAlert } from "../../utils/messages";
import { IProduct } from "../../store/product/types";
import { State } from "../../store";
import { User } from "../../store/user/types";

const productVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
};

interface ProductProps {
    data: IProduct;
    isForUser?: boolean;
    reRenderFn?: React.Dispatch<React.SetStateAction<boolean>>;
    reRenderVal?: boolean;
    className?: string;
}

const Product: React.FC<ProductProps> = ({ data, reRenderFn, reRenderVal, isForUser = false, className }) => {
    const user = useSelector<State, User>((state) => state.user);
    const dispatch = useDispatch();

    const [animateOnDelete, setAnimateOnDelete] = useState(false);
    const [favoriteIcon, setFavoriteIcon] = useState(isFavorite(data._id));

    const handleDelete = async () => {
        if (data.user !== user.id) return redAlert("مجوز ندارید", "شما مجوز حذف این آگهی دا ندارید");
        const { isConfirmed } = await yellowAlert("می خواهید این آگهی حذف کنید", data.title);
        if (isConfirmed) {
            setAnimateOnDelete(true);
            dispatch(handleDeleteProduct(data._id));
        }
    };

    const handleSetFavorite = () => {
        setFavorite(data._id);
        setFavoriteIcon(!favoriteIcon);
        reRenderFn && reRenderFn(!reRenderVal);
    };

    if (!isForUser && !isEmpty(user) && user.id === data.user) isForUser = true;

    return (
        <AnimatePresence>
            {!animateOnDelete && (
                <motion.div
                    className={`product-card flex flex-col relative shadow-lg bg-blue-50 dark:bg-gray-800 rounded-xl rtl overflow-hidden ${
                        className || ""
                    }`}
                    exit="exit"
                    variants={productVariants}
                >
                    <Link to={`/products/${data._id}`}>
                        <div className="product-card-image p-1 pb-0">
                            <img className="rounded-lg" src="./images/product1.jpg" alt="product" />
                        </div>
                    </Link>
                    <div className="product-card-body flex flex-col py-3 px-4">
                        <div className="product-card-icons flex items-center justify-around pt-5 pb-14 px-2">
                            {isForUser ? (
                                <>
                                    <Tooltip
                                        title={<span className="block samim-bold text-xs p-1">خذف آگهی</span>}
                                        placement="top"
                                    >
                                        <Icon
                                            fontSize="small"
                                            onClick={handleDelete}
                                            className="base-text-900 cursor-pointer"
                                        >
                                            delete
                                        </Icon>
                                    </Tooltip>
                                    <Tooltip
                                        title={<span className="block samim-bold text-xs p-1">ویرایش آگهی</span>}
                                        placement="top"
                                    >
                                        <Link to={`/edit-product/${data._id}`}>
                                            <Icon fontSize="small" className="base-text-900">
                                                edit
                                            </Icon>
                                        </Link>
                                    </Tooltip>
                                </>
                            ) : (
                                <>
                                    <Tooltip
                                        title={<span className="block samim-bold text-xs p-1">افزودن به سبد خرید</span>}
                                        placement="top"
                                    >
                                        <Icon fontSize="small" className="base-text-900 cursor-pointer">
                                            add_shopping_cart
                                        </Icon>
                                    </Tooltip>
                                    <Tooltip
                                        title={
                                            <span className="block samim-bold text-xs p-1">
                                                {favoriteIcon ? "خذف از " : "افزودن به "}
                                                علاقه مندی ها
                                            </span>
                                        }
                                        placement="top"
                                    >
                                        <Icon fontSize="small" onClick={handleSetFavorite} className="base-text-900">
                                            {favoriteIcon ? "bookmark" : "bookmark_border"}
                                        </Icon>
                                    </Tooltip>
                                </>
                            )}
                            <Tooltip
                                title={<span className="block samim-bold text-xs p-1">کپی شناسه آگهی</span>}
                                placement="top"
                            >
                                <Icon fontSize="small" className="base-text-900 cursor-pointer">
                                    content_copy
                                </Icon>
                            </Tooltip>
                            <Tooltip
                                title={<span className="block samim-bold text-xs p-1">اشتراک گذاری</span>}
                                placement="top"
                            >
                                <Icon fontSize="small" className="base-text-900 cursor-pointer">
                                    share
                                </Icon>
                            </Tooltip>
                        </div>
                        <h2 className="text-xs md:text-sm font-bold base-text-900 mb-5 rtl leading-6">
                            <Link to={`/products/${data._id}`}>{data.title}</Link>
                        </h2>
                        <div className="">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs samim-bold text-gray-500">قیمت</span>
                                <div className="base-text-green font-bold text-sm">
                                    {+data.price ? (
                                        <div>
                                            {formatPrice(+data.price)}
                                            <span className="text-xs"> تومان</span>
                                        </div>
                                    ) : (
                                        "توافقی"
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs samim-bold text-gray-500">شهر</span>
                                <div className=" font-bold text-xs base-text-800">
                                    {data.city}
                                    <span className="text-gray-500"> | </span>
                                    {data.province}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Product;
