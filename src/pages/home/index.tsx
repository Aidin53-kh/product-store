import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";
import Footer from "../../components/footer";
import ProductsGroup from "../../components/product/ProductGroup";
import { State } from "../../store";
import { useSelector } from "react-redux";
import { IProduct } from "../../store/product/types";
import Product from "../../components/product";

interface BoxProps {
    color: string;
    icon: string;
    title: string;
}

const Box: React.FC<BoxProps> = ({ color, icon, title }) => {
    return (
        <div
            className={`text-center w-20 py-3 rounded-md shadow-${color} bg-gradient-to-br from-${color}-400 to-${color}-500 text-white`}
        >
            <Icon fontSize="small">{icon}</Icon>
            <small className="block text-xs samim-bold">{title}</small>
        </div>
    );
};

const Home = () => {
    const products = useSelector<State, IProduct[]>((state) => state.products);

    return (
        <>
            <header className="py-12 mt-1 md:px-0 text-center px-3">
                <div className="_container">
                    <h1 className="text-xl base-text-900 samim-bold mb-3">نیازمندیهای رایگان شیپور</h1>
                    <p className="text-xs md:text-sm base-text-800 samim-bold leading-7">
                        خرید و فروش خودرو، املاک، آپارتمان، گوشی موبایل، تبلت، لوازم خانگی، لوازم دست دوم، استخدام و هر
                        چه فکر کنید!
                    </p>
                    <div className="flex gap-3 md:gap-4 lg:gap-5 mt-7 justify-center">
                        <Box color="blue" icon="info" title="اطلاعات" />
                        <Box color="green" icon="shopping_cart" title="سبد خرید" />
                        <Box color="red" icon="error" title="گزارش ها" />
                        <Box color="yellow" icon="warning" title="قوانین" />
                    </div>
                </div>
            </header>

            <section className="pt-6 px-3">
                <div className="_container z-10">
                    <div className="flex items-center gap-4 rtl mb-6">
                        <h1 className="text-md lg:text-lg flex-1 base-text-900 samim-bold">آخرین محصولات</h1>
                        <Link to="/archive" className="flex gap-3 base-text-blue">
                            <h2 className="text-xs 2xl:text-md samim-bold">نمایش همه</h2>
                            <Icon fontSize="small">arrow_back</Icon>
                        </Link>
                    </div>
                    <Suspense fallback={<h1 className="samim-bold text-center mt-8 text-3xl">Loading...</h1>}>
                        <ProductsGroup>
                            {products.map((product) => <Product key={product._id} data={product} />)}
                        </ProductsGroup>
                    </Suspense>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Home;
