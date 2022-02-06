import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Chip, Icon } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import qs from "query-string";

import { State } from "../../store";
import { FilterQueryStrings } from "./types";
import { IProduct } from "../../store/product/types";
import ArchiveHeader from "./ArchiveHeader";
import { setQueryString } from "../../store/filters/actions";
import { filterProducts, paginate, sortProducts } from "../../utils";
import ProductsGroup from "../../components/product/ProductGroup";
import Product from "../../components/product";

interface ArchiveProps {}

const Archive: React.FC<ArchiveProps> = (): JSX.Element => {
    const location = useLocation();
    const history = useHistory();

    const dispatch = useDispatch();
    const filters = useSelector<State, FilterQueryStrings>((state) => state.filters as FilterQueryStrings);
    const [search, setSearch] = useState<string>(filters.search);

    const products = useSelector<State, IProduct[]>(
        ({ products }) => sortProducts(filterProducts(products, filters), filters.sort || "date") as IProduct[]
    );

    const [perPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(filters.page || 1);

    const paginatedProducts = paginate(products, perPage, currentPage);
    const updateQueryStrings = (querys: Partial<FilterQueryStrings>) => {
        history.push({ pathname: location.pathname, search: qs.stringify({ ...filters, ...querys }) });
    };

    React.useEffect(() => {
        dispatch(setQueryString(location.search)); // update 'filters' property in redux store
    }, [location.search]);

    return (
        <div className="_container px-3">
            <ArchiveHeader
                updateQueryStrings={updateQueryStrings}
                filters={filters}
                search={search}
                setSearch={setSearch}
                productsLength={products.length}
            />
            <div className="flex gap-3 mb-5 overflow-x-auto">
                {filters.startPrice || filters.endPrice ? (
                    <Chip
                        className="ltr px-1 samim base-text-900"
                        variant="outlined"
                        label="فیلتر قیمت"
                        deleteIcon={
                            <Icon fontSize="small" className="base-text-900">
                                clear
                            </Icon>
                        }
                        onDelete={() => updateQueryStrings({ startPrice: null, endPrice: null })}
                    />
                ) : null}
                {filters.onlyWithImage.toString() === "true" && (
                    <Chip
                        className="ltr px-1 samim base-text-900"
                        variant="outlined"
                        label="عکس دار"
                        deleteIcon={
                            <Icon fontSize="small" className="base-text-900">
                                clear
                            </Icon>
                        }
                        onDelete={() => updateQueryStrings({ onlyWithImage: false })}
                    />
                )}
                {filters.onlyWithPrice.toString() === "true" && (
                    <Chip
                        className="ltr px-1 samim base-text-900"
                        variant="outlined"
                        label="قیمت دار"
                        deleteIcon={
                            <Icon fontSize="small" className="base-text-900">
                                clear
                            </Icon>
                        }
                        onDelete={() => updateQueryStrings({ onlyWithPrice: false })}
                    />
                )}
                {filters.search && (
                    <Chip
                        className="ltr px-1 samim base-text-900"
                        variant="outlined"
                        label="فیلتر جستجو"
                        deleteIcon={
                            <Icon fontSize="small" className="base-text-900">
                                clear
                            </Icon>
                        }
                        onDelete={() => {
                            updateQueryStrings({ search: "" });
                            setSearch("");
                        }}
                    />
                )}
            </div>
            {products.length >= 1 ? (
                <ProductsGroup>
                    {paginatedProducts.map((product) => (
                        <Product key={product._id} data={product} />
                    ))}
                </ProductsGroup>
            ) : (
                <div className="text-2xl samim-bold text-center py-12 base-text-900">هیچ آگهی یافت نشد</div>
            )}
            <div className="flex items-center justify-center py-12">
                {products.length > perPage && (
                    <Pagination
                        defaultPage={currentPage}
                        color="primary"
                        variant="outlined"
                        onChange={(_, t) => setCurrentPage(t)}
                        count={Math.ceil(products.length / perPage)}
                        renderItem={(item) => (
                            <Link to={`/archive?${qs.stringify({ ...filters, page: item.page })}`}>
                                <PaginationItem className="base-text-900" {...item} />
                            </Link>
                        )}
                    />
                )}
            </div>
        </div>
    );
};

export default Archive;
