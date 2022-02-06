import React, { useEffect, useState } from "react";
import { Dialog, FormControlLabel, Icon, IconButton, Menu, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Field, Form, Formik } from "formik";

import { FilterQueryStrings } from "./types";
import { FilterAndSortBtn } from "./FilterAndSortBtn";
import { Button, Checkbox, Transition } from "../../components/button";
import { FormikRadioGroup, Radio, TextField } from "../../components/textfield";
import { Product } from "../../store/product/types";

interface ArchiveProps {
    updateQueryStrings(filters: Partial<FilterQueryStrings>): void;
    filters: FilterQueryStrings;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    productsLength: number;
}

const ArchiveHeader: React.FC<ArchiveProps> = ({ filters, updateQueryStrings, search, setSearch, productsLength }) => {
    const [openSortMenu, setOpenSortMenu] = useState(null);
    const [openFilterDialog, setOpenFilterDialog] = useState(false);

    const handleApplySortType = ({ sort }: Partial<FilterQueryStrings>) => {
        setOpenSortMenu(null);
        updateQueryStrings({ sort });
    };

    const handleApplyFilter = (filterData: Partial<FilterQueryStrings>) => {
        setOpenFilterDialog(false);
        updateQueryStrings({ ...filterData });
    };

    const handleSetSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateQueryStrings({ search, page: 1 });
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const { sort, startPrice, endPrice, onlyWithPrice, onlyWithImage } = filters;
    
    useEffect(() => {
        setSearch(filters.search);
    }, [filters.search])
    
    return (
        <div className="my-5">
            <FilterAndSortBtn
                className="mb-5 md:hidden"
                openFilterDialog={setOpenFilterDialog}
                openSortMenu={setOpenSortMenu}
            />
            <div className="flex items-center justify-between lg:justify-start gap-5 py-3 px-5 rounded-lg shadow-md base-bg-800">
                <FilterAndSortBtn
                    className="hidden md:inline-block"
                    openFilterDialog={setOpenFilterDialog}
                    openSortMenu={setOpenSortMenu}
                />

                <form
                    onSubmit={handleSetSearch}
                    className="flex flex-1 2xl:border-l 2xl:border-r border-gray-400 dark:border-gray-700 2xl:px-4"
                    autoComplete="off"
                >
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 rtl outline-none border-none pr-4 base-text-800 bg-transparent"
                        placeholder="جستجو در محصولات ..."
                    />
                    <IconButton type="submit">
                        <Icon className="text-gray-500 cursor-pointer">search</Icon>
                    </IconButton>
                </form>
                <h1 className="text-md hidden 2xl:inline-block base-text-900 samim-bold">{productsLength} : تعداد آگهی ها </h1>
            </div>
            <Menu
                PaperProps={{
                    className: "bg-blue-50 dark:bg-gray-700 rounded-xl",
                    style: { boxShadow: "0 1px 2px rgba(0,0,0,.3)" },
                }}
                open={!!openSortMenu}
                anchorEl={openSortMenu}
                onClose={() => setOpenSortMenu(null)}
            >
                <Formik initialValues={{ sort: sort || "date" }} onSubmit={handleApplySortType}>
                    <Form className="rtl mt-2 mr-2 ml-10">
                        <Field name="sort" component={FormikRadioGroup}>
                            <Radio value="date" label="جدید ترین ها ( پیش فرض )" />
                            <Radio value="price-asc" label="ارزان ترین ها" />
                            <Radio value="price-desc" label="گران ترین ها" />
                        </Field>
                        <Button
                            variant="outlined"
                            type="submit"
                            className="text-green-500 dark:border-gray-600  mt-4 mb-1 mx-3"
                        >
                            ذخیره
                        </Button>
                    </Form>
                </Formik>
            </Menu>

            <Dialog
                className="m-0"
                fullWidth
                fullScreen={fullScreen}
                TransitionComponent={Transition}
                PaperProps={{ className: "rtl base-bg-800 base-text-900 mx-0" }}
                open={openFilterDialog}
                onClose={() => setOpenFilterDialog(false)}
            >
                <Formik
                    initialValues={{ startPrice, endPrice, onlyWithImage, onlyWithPrice }}
                    onSubmit={handleApplyFilter}
                >
                    <Form className="p-5 pb-3">
                        <div className="flex mb-5">
                            <h2 className="samim-bold flex-1 text-xl">فیلتر آگهی ها</h2>
                            <Icon className="base-text-800 mr-3" onClick={() => setOpenFilterDialog(false)}>
                                clear
                            </Icon>
                        </div>
                        <div className="relative left-5 mb-5">
                            <FormControlLabel
                                className="base-text-700"
                                name="onlyWithImage"
                                label={<Typography variant="body2">فقط آگهی های عکس دار</Typography>}
                                control={<Checkbox defaultChecked={onlyWithImage} />}
                            />
                            <br />
                            <FormControlLabel
                                className="base-text-700"
                                name="onlyWithPrice"
                                label={<Typography variant="body2">فقط آگهی های قیمت دار</Typography>}
                                control={<Checkbox defaultChecked={onlyWithPrice} />}
                            />
                        </div>
                        <Typography className="base-text-900 samim-bold mb-3">فیلتر قیمت</Typography>
                        <div className={`flex items-center gap-3 mb-7 ${fullScreen && "flex-col"}`}>
                            <div className="flex items-center gap-3 w-full">
                                از
                                <TextField name="startPrice" type="number" defaultValue={startPrice} />
                            </div>
                            <div className="flex items-center gap-3 w-full">
                                تا
                                <TextField name="endPrice" type="number" defaultValue={endPrice} />
                            </div>
                        </div>
                        <Button onClick={() => setOpenFilterDialog(false)} variant="text" className="text-red-400">
                            انصراف
                        </Button>
                        <Button type="submit" variant="text" className="text-green-500 mr-1">
                            اعمال فیلتر
                        </Button>
                    </Form>
                </Formik>
            </Dialog>
        </div>
    );
};

export default ArchiveHeader;
