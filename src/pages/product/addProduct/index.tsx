import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Icon } from "@material-ui/core";
import { Formik, Form } from "formik";

import { handleAddProduct } from "../../../store/products/actions";
import { Product } from "../../../store/product/types";
import { TextArea, TextField } from "../../../components/textfield";
import { productSchema, PRODUCT_INITIAL_VALUES } from "../schema";
import { CityDialog, GroupDialog } from "../../../components/dialogs";

const AddProduct: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [openProvinceDialog, setOpenProvinceDialog] = useState(false);
    const [openCategorieDialog, setOpenCategorieDialog] = useState(false);

    const handleSubmit = (values: Product) => {
        dispatch(handleAddProduct(values));
        history.push("/");
    };

    return (
        <div className="_container rtl">
            <div className="max-w-3xl mx-auto base-bg-800 relative rounded-md py-5 px-3 my-16 shadow-md sm:px-4 md:px-5">
                <header className="rtl mb-8 flex justify-between items-center">
                    <h1 className="base-text-800 text-xl samim-bold">ثبت آگهی</h1>
                    <Icon className="base-text-red">delete</Icon>
                </header>

                <main>
                    <Formik
                        initialValues={PRODUCT_INITIAL_VALUES}
                        validationSchema={productSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue }) => (
                            <Form className="flex flex-col gap-5" autoComplete="off">
                                <TextField label="عنوان آگهی *" name="title" placeholder="عنوان آگهی" />
                                <TextField label="قیمت" name="price" type="number" placeholder="قیمت" />
                                <TextField
                                    onClick={() => setOpenProvinceDialog(true)}
                                    label="شهر"
                                    name="city"
                                    placeholder="شهر"
                                    readOnly
                                />
                                <TextField
                                    onClick={() => setOpenCategorieDialog(true)}
                                    label="گروه بندی"
                                    name="group"
                                    placeholder="گروه بندی"
                                    readOnly
                                />
                                <TextArea label="توضیحات اگهی *" name="details" placeholder="توضیحات" rows={6} />
                                <CityDialog
                                    setFieldValue={setFieldValue}
                                    openProvinceDialog={openProvinceDialog}
                                    setOpenProvinceDialog={setOpenProvinceDialog}
                                />
                                <GroupDialog
                                    setFieldValue={setFieldValue}
                                    openCategorieDialog={openCategorieDialog}
                                    setOpenCategorieDialog={setOpenCategorieDialog}
                                />
                                <footer>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className="bg-green-500 text-white rounded-full samim-bold"
                                    >
                                        ثبت آگهی
                                    </Button>
                                </footer>
                            </Form>
                        )}
                    </Formik>
                </main>
            </div>
        </div>
    );
};

export default AddProduct;
